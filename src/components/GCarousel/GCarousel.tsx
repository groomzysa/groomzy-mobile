import React, { FC } from "react";
import Carousel from "react-native-snap-carousel";
import { WINDOW_WIDTH } from "../../utils/deviceDimentions";
import { theme } from "../../utils/theme";
import { BannerSlider } from "./components";
import { IGCarouselProps } from "./types";

export const GCarousel: FC<IGCarouselProps> = ({ data }) => {
  return (
    <Carousel
      data={data}
      renderItem={({
        item,
        index,
      }: {
        index: number;
        dataIndex: number;
        item: unknown;
      }) => <BannerSlider key={index} uri={item as string} />}
      sliderWidth={WINDOW_WIDTH - theme.spacing.container.xsmall * 2}
      itemWidth={300}
      // autoplay
      loop
    />
  );
};
