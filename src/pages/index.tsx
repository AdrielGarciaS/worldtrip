import {
  VStack,
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Divider,
} from '@chakra-ui/react';
import { Carousel, CarouselSlide } from 'components/Carousel';

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

const continents: CarouselSlide[] = [
  {
    key: 'Europa',
    bgImage: '/assets/europe-skyline.jpg',
    title: 'Europa',
    description: 'O continente mais antigo.',
  },
  {
    key: 'America',
    bgImage: '/assets/america-skyline.jpg',
    title: 'América',
  },
];

export default function Home() {
  return (
    <VStack
      w="full"
      align="center"
      justify="center"
      spacing="14"
      maxW={1240}
      pb="2.5rem"
    >
      <Box
        w="100vw"
        h="20.937rem"
        px="32"
        bgImage="url('/assets/sky-background.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
        mb="7"
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

      <Box w="full" pb="7">
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

      <Text
        textAlign="center"
        lineHeight="3.375rem"
        fontSize="xx-large"
        fontWeight="500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Carousel slides={continents} />
    </VStack>
  );
}
