import {
  Box,
  VStack,
  HStack,
  Flex,
  Text,
  GridItem,
  Grid,
  Icon,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FiInfo } from 'react-icons/fi';
import { api } from 'services/api';

interface Props {
  continent: Continent;
}

const Continent = (props: Props) => {
  const { continent } = props;

  console.log(continent);

  return (
    <>
      <Box w="100vw" h="31.25rem" bgImage={`url('${continent.coverImage}')`}>
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

      <VStack
        spacing="5rem"
        maxW={1160}
        align="center"
        justify="center"
        px="8rem"
      >
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
