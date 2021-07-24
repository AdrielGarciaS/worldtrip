import {
  Box,
  VStack,
  HStack,
  Flex,
  Text,
  GridItem,
  Grid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { ReactNode } from 'react';
import { FiInfo } from 'react-icons/fi';
import { api } from 'services/api';

interface CityOverViewProps {
  city: City;
}

const CityOverview = (props: CityOverViewProps) => {
  const { city } = props;
  return (
    <Box
      w="16rem"
      h="17.437rem"
      bg="white"
      border="1px"
      borderColor="yellow.100"
      borderRadius="4px"
    >
      <Image src={city.photo} alt={city.name} w="full" />

      <HStack
        w="full"
        alignItems="center"
        justify="space-between"
        p="1.5rem"
        pt="1.125rem"
      >
        <VStack alignItems="flex-start">
          <Text fontWeight="600" fonSize="1.25rem" lineHeight="1.5rem">
            {city.name}
          </Text>
          <Text fontSize="1rem" lineHeight="1.625rem" color="gray.400">
            {city.country}
          </Text>
        </VStack>

        <Image
          src={city.flagImg}
          alt={city.country}
          w="1.875rem"
          h="1.875rem"
        />
      </HStack>
    </Box>
  );
};

interface CityInfoProps {
  amount: number;
  title: ReactNode;
}

const CityInfo = (props: CityInfoProps) => {
  const { amount, title } = props;

  return (
    <VStack align={['flex-start', 'flex-start', 'center']}>
      <Text
        fontSize={['1.5rem', '1.5rem', '3rem']}
        lineHeight={['2.25rem', '2.25rem', '4.5rem']}
        fontWeight="600"
        color="yellow.200"
      >
        {amount}
      </Text>
      <Text
        fontSize={['1.125rem', '1.125rem', '1.5rem']}
        lineHeight={['1.69rem', '1.69rem', '1.875rem']}
        fontWeight="600"
      >
        {title}
      </Text>
    </VStack>
  );
};

interface Props {
  continent: Continent;
}

const Continent = (props: Props) => {
  const { continent } = props;

  return (
    <>
      <Box
        w="full"
        h={['9.375rem', '9.375rem', '31.25rem']}
        bgImage={`url('${continent.coverImage}')`}
        bgSize="cover"
        bgRepeat="no-repeat"
        mx="auto"
      >
        <Flex
          align={['center', 'center', 'flex-end']}
          justify={['center', 'center', 'flex-start']}
          h="full"
          pl={[0, 0, '8.75rem']}
          pb={[0, 0, '3.75rem']}
        >
          <Text
            lineHeight={['2.625rem', '2.625rem', '4.5rem']}
            fontSize={['1.75rem', '1.75rem', '3rem']}
            fontWeight="600"
            color="white"
          >
            {continent.title}
          </Text>
        </Flex>
      </Box>

      <VStack
        spacing={['1.5rem', '1.5rem', '5rem']}
        maxW={1160}
        align="center"
        justify="center"
      >
        <Grid
          templateColumns={['1fr', '1fr', 'repeat(2, 1fr)']}
          mt={['1.5rem', '1.5rem', '5rem']}
          alignItems="center"
          gap={['1rem', '1rem', '4.375rem']}
        >
          <GridItem>
            <Text textAlign="justify" px="1rem">
              {continent.longDescription}
            </Text>
          </GridItem>

          <GridItem>
            <HStack
              align="center"
              spacing={['2.25rem', '2.25rem', '2.625rem']}
              px="1rem"
            >
              <CityInfo title="países" amount={continent.countriesQuantity} />
              <CityInfo title="línguas" amount={continent.languagesQuantity} />
              <CityInfo
                title={
                  <>
                    cidades +100
                    <Icon
                      as={FiInfo}
                      color="gray.200"
                      ml="5px"
                      fontSize={['0.625rem', '0.625rem', '1rem']}
                    />
                  </>
                }
                amount={continent.citiesQuantity}
              />
            </HStack>
          </GridItem>
        </Grid>

        <VStack w="full" align={['center', 'center', 'flex-start']}>
          <Text
            fontSize={['1.5rem', '1.5rem', '2.25rem']}
            fontWeight="500"
            lineHeight={['2.25rem', '2.25rem', '3.375rem']}
            textAlign="left"
            mb="2.5rem"
            ml={['1rem', '1rem', 0]}
            alignSelf="flex-start"
          >
            Cidades +100
          </Text>

          <Grid
            gridTemplateColumns={['1fr', '1fr', 'repeat(4, 1fr)']}
            alignItems="center"
            justifyContent="center"
            columnGap="2.8rem"
            rowGap="3rem"
            pb="5rem"
          >
            {continent.cities.map(city => (
              <GridItem key={city.name}>
                <CityOverview city={city} />
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </VStack>
    </>
  );
};

export default Continent;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const { slug } = params;

  const response = await api.get('continents/', { params: { slug } });

  return {
    props: {
      continent: response.data[0],
    },
  };
};
