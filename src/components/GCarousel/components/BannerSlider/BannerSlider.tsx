import React, { FC } from "react";
import { View } from "react-native";
import { BannerImage } from "./styles";
import { IBannerSliderProps } from "./types";

export const BannerSlider: FC<IBannerSliderProps> = ({ uri }) => {
  return (
    <View>
      <BannerImage source={{ uri }} />
    </View>
  );
};
