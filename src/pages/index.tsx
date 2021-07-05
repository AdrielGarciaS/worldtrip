import { VStack, Box, Flex, Text, Image } from '@chakra-ui/react';

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
      >
        <Flex align="flex-start" justify="space-between" pt="24" mb="20">
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
    </VStack>
  );
}
