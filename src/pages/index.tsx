import {
  VStack,
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Center,
  Divider,
} from '@chakra-ui/react';

const categories = [
  {
    title: 'vida noturna',
    icon: '/assets/cocktail.svg',
  },
  {
    title: 'praia',
    icon: '/assets/board.svg',
  },
  {
    title: 'moderno',
    icon: '/assets/building.svg',
  },
  {
    title: 'clássico',
    icon: '/assets/museum.svg',
  },
  {
    title: 'e mais...',
    icon: '/assets/earth.svg',
  },
];

export default function Home() {
  return (
    <VStack w="full">
      <Box
        w="full"
        h="20.937rem"
        paddingInline="32"
        bgImage="url('/assets/sky-background.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        mb="20"
      >
        <Flex align="flex-start" justify="space-between" pt="24">
          <Box mb="5">
            <Text
              as="h2"
              color="gray.50"
              fontSize="2.25rem"
              fontWeight="500"
              lineHeight="3.375rem"
              width="26.625"
              mb="1.25rem"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text
              as="h3"
              color="gray.100"
              fontSize="1.25rem"
              lineHeight="1.875rem"
              width="32.75rem"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image src="/assets/airplane.svg" alt="Avião" h="16.875rem" />
        </Flex>
      </Box>

      <Box w="full" pb="20">
        <HStack spacing="32" align="center" justify="center">
          {categories.map(category => (
            <VStack key={category.title} align="center">
              <Image src={category.icon} alt={category.title} maxH="5.31rem" />
              <Text fontWeight="600" fontSize="1.5rem">
                {category.title}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Box>

      <Divider
        borderBottomWidth="2px"
        width="5.625rem"
        borderColor="gray.600"
        opacity="1"
        borderRadius="1px"
      />

      <Center>
        <Text
          textAlign="center"
          marginBlock="14"
          lineHeight="3.375rem"
          fontSize="xx-large"
          fontWeight="500"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>
      </Center>
    </VStack>
  );
}
