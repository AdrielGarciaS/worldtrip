import {
  VStack,
  Box,
  Flex,
  Text,
  Image,
  Divider,
  useBreakpointValue,
  Grid,
  Stack,
  GridItem,
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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <VStack
      w="full"
      align="center"
      justify="center"
      spacing={['9', '9', '14']}
      pb="2.5rem"
    >
      <Box
        w="100vw"
        h={['10.187rem', '10.187rem', '20.937rem']}
        px={['4', '4', '32']}
        bgImage="url('/assets/sky-background.svg')"
        bgPosition="center"
        bgRepeat="repeat"
        mb="7"
      >
        <Flex
          align="flex-start"
          justify="space-between"
          pt={['7', '7', '24']}
          maxW={1240}
        >
          <Box mb="5">
            <Text
              as="h2"
              color="gray.50"
              fontSize={['1.25rem', '1.25rem', '2.25rem']}
              lineHeight={['1.875rem', '1.875rem', '3.375rem']}
              fontWeight="500"
              maxWidth={['14.875rem', '26.625rem']}
              mb={['0.5rem', '0.5rem', '1.25rem']}
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Text>
            <Text
              as="h3"
              color="gray.100"
              fontSize={['0.875rem', '0.875rem', '1.25rem']}
              lineHeight={['1.31rem', '1.31rem', '1.875rem']}
              maxWidth={['20.81rem', '20.81rem', '32.75rem']}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          {isWideVersion && (
            <Image src="/assets/airplane.svg" alt="Avião" h="16.875rem" />
          )}
        </Flex>
      </Box>

      <Flex w="full" pb={['0', '0', '7']} justify="center">
        <Grid
          columnGap={['16', '16', '24']}
          rowGap="6"
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            `repeat(${categories.length}, 1fr)`,
          ]}
          alignItems="center"
          justifyContent="center"
        >
          {categories.map((category, index) => {
            const isLast = index === categories.length - 1;

            const colSpanSm = isLast ? 2 : 'auto';

            return (
              <GridItem
                key={category.title}
                minW="6.25rem"
                colSpan={[colSpanSm, colSpanSm, 1]}
              >
                <Stack
                  direction={['row', 'row', 'column']}
                  align="center"
                  justifyContent="center"
                >
                  <Image
                    src={category.icon}
                    alt={category.title}
                    maxH="5.31rem"
                    display={['none', 'none', 'block']}
                  />
                  <Text
                    color="yellow.200"
                    fontSize="25"
                    display={['block', 'block', 'none']}
                  >
                    ●
                  </Text>
                  <Text
                    fontWeight="600"
                    fontSize={['1.125rem', '1.125rem', '1.5rem']}
                    textAlign="center"
                  >
                    {category.title}
                  </Text>
                </Stack>
              </GridItem>
            );
          })}
        </Grid>
      </Flex>

      <Divider
        borderBottomWidth="2px"
        width="5.625rem"
        borderColor="gray.600"
        opacity="1"
        borderRadius="1px"
      />

      <Text
        textAlign="center"
        lineHeight={['1.68rem', '1.68rem', '3.375rem']}
        fontSize={['1.25rem', '1.25rem', '2.25rem']}
        fontWeight="500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Carousel slides={continents} />
    </VStack>
  );
}
