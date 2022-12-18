import { useEffect } from "react";

import { IuseTradingSocialsEffectsParams } from "./types";
import { useDispatch } from "react-redux";
import { setSocialOptions } from "../../../../../../../store/slices/providerHomeSlice/providerHomeSlice";
import { SOCIALS } from "../constants";

export const useTradingSocialsEffects = ({
  socials,
}: IuseTradingSocialsEffectsParams) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getSocialOptions = () => {
      if (!socials) {
        return SOCIALS;
      }

      return SOCIALS.filter(
        (social) => !socials.find(({ name }) => social.value === name)
      );
    };

    dispatch(setSocialOptions({ socialOptions: getSocialOptions() }));
  }, [socials]);
};
