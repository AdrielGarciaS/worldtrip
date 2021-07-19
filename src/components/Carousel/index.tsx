import { Box, Text, VStack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

import styles from './styles.module.scss';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

interface Props {
  height?: number | string;
  width?: number | string;
  slides: Continent[];
  onClick?(slug: Continent): void;
}

export const Carousel = (props: Props) => {
  const { height = 450, width = '100%', slides, onClick } = props;

  const onClickSlide = (slide: Continent) => () => {
    onClick?.(slide);
  };

  return (
    <Box h={height} w={width} maxW={1240}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        className={styles.swiperContainer}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.slug} onClick={onClickSlide(slide)}>
            <Box
              h="full"
              w="full"
              bgImage={`url('${slide?.bgImage}')`}
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
            >
              <VStack h="full" w="full" align="center" justify="center">
                <Text
                  color="white"
                  fontSize={['1.5rem', '1.5rem', '3rem']}
                  fontWeight="700"
                  lineHeight={['2.25rem', '2.25rem', '4.5rem']}
                  textAlign="center"
                >
                  {slide.title}
                  <Text
                    fontSize={['0.937rem', '0.937rem', '1.5rem']}
                    lineHeight={['1.31rem', '1.31rem', '2.25rem']}
                    mt="1rem"
                  >
                    {slide.description}
                  </Text>
                </Text>
              </VStack>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
