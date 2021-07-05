import { AppProps } from 'next/app';
import { ChakraProvider, VStack } from '@chakra-ui/react';

import { theme } from 'styles/theme';
import { Header } from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <VStack align="flex-start" spacing={0}>
        <Header />
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
