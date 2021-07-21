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

interface Props {
  continent: Continent;
}

const Continent = (props: Props) => {
  const { continent } = props;

  return (
    <>
      <Box
        w="full"
        h="31.25rem"
        bgImage={`url('${continent.coverImage}')`}
        bgRepeat="no-repeat"
        mx="auto"
      >
        <Flex align="flex-end" h="full" pl="8.75rem" pb="3.75rem">
          <Text
            lineHeight="4.5rem"
            fontSize="3rem"
            fontWeight="600"
            color="white"
          >
            {continent.title}
          </Text>
        </Flex>
      </Box>

      <VStack spacing="5rem" maxW={1160} align="center" justify="center">
        <Grid
          templateColumns="repeat(2, 1fr)"
          mt="5rem"
          alignItems="center"
          gap="4.375rem"
        >
          <GridItem>
            <Text textAlign="justify">{continent.longDescription}</Text>
          </GridItem>

          <GridItem>
            <HStack align="center" spacing="2.625rem">
              <VStack>
                <Text
                  fontSize="3rem"
                  lineHeight="4.5rem"
                  fontWeight="600"
                  color="yellow.200"
                >
                  {continent.countriesQuantity}
                </Text>
                <Text fontSize="1.5rem" lineHeight="1.875rem" fontWeight="600">
                  países
                </Text>
              </VStack>
              <VStack>
                <Text
                  fontSize="3rem"
                  lineHeight="4.5rem"
                  fontWeight="600"
                  color="yellow.200"
                >
                  {continent.languagesQuantity}
                </Text>
                <Text fontSize="1.5rem" lineHeight="1.875rem" fontWeight="600">
                  línguas
                </Text>
              </VStack>
              <VStack>
                <Text
                  fontSize="3rem"
                  lineHeight="4.5rem"
                  fontWeight="600"
                  color="yellow.200"
                >
                  {continent.citiesQuantity}
                </Text>
                <Text
                  fontSize="1.5rem"
                  lineHeight="1.875rem"
                  fontWeight="600"
                  whiteSpace="nowrap"
                >
                  cidades +100
                  <Icon as={FiInfo} color="gray.200" ml="5px" />
                </Text>
              </VStack>
            </HStack>
          </GridItem>
        </Grid>

        <VStack w="full" align="flex-start">
          <Text
            fontSize="2.25rem"
            fontWeight="500"
            lineHeight="3.375rem"
            textAlign="left"
            mb="2.5rem"
          >
            Cidades +100
          </Text>

          <Grid
            gridTemplateColumns="repeat(4, 1fr)"
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
