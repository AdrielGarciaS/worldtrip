import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    yellow: {
      100: 'rgba(255, 186, 8, 0.5)',
      200: '#FFBA08',
    },
    gray: {
      50: '#F5F8FA',
      100: '#DADADA',
      200: 'rgb(153, 153, 153, 0.5)',
      400: '#999999',
      600: '#47585B',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Poppins',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      },
    },
  },
});
