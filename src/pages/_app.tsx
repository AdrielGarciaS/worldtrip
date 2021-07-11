import { AppProps } from 'next/app';
import { ChakraProvider, VStack } from '@chakra-ui/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'styles/global.scss';

import { theme } from 'styles/theme';
import { Header } from 'components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <VStack align="center" justify="center" spacing={0} mx="auto" maxW={1440}>
        <Header />
        <Component {...pageProps} />
      </VStack>
    </ChakraProvider>
  );
}

export default MyApp;
