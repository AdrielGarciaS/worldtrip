import { Flex, Image, IconButton, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { FiChevronLeft } from 'react-icons/fi';

export const Header = () => {
  const { asPath, back } = useRouter();

  const isNotHomePage = asPath !== '/';

  const handleGoBack = () => {
    back();
  };

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      px="32"
      py="2"
      align="center"
      justify="center"
    >
      <Flex w="100%" align="center" justify="center">
        {isNotHomePage && (
          <IconButton
            onClick={handleGoBack}
            aria-label="Navigate back"
            icon={<Icon as={FiChevronLeft} />}
            mr="4"
            bg="transparent"
          />
        )}

        <Image
          src="assets/logo.svg"
          alt="World Trip"
          h={45}
          fontSize="8"
          mx="auto"
        />
      </Flex>
    </Flex>
  );
};
