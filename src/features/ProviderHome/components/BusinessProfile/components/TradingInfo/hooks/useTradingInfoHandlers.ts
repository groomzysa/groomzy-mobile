import ImagePicker from "expo-image-picker";
import { isEmpty } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddTradingInfo,
  useUpdateTradingInfo,
} from "../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../store/store";
import { useTradingInfoEffects } from "./useTradingInfoEffects";

export const useTradingInfoHandlers = () => {
  const {
    app: { user },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);
  const provider = user?.provider;
  const [image, setImage] = useState<string>();
  const [tradingName, setTradingName] = useState<string>(
    provider?.tradingName || ""
  );
  const [tradingNameError, setTradingNameError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>(provider?.phone || "");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    addTradingInfoTrigger,
    addTradingInfo,
    addTradingInfoLoading,
    addTradingInfoHasError,
    addTradingInfoError,
  } = useAddTradingInfo();

  const {
    updateTradingInfoTrigger,
    updateTradingInfo,
    updateTradingInfoLoading,
    updateTradingInfoHasError,
    updateTradingInfoError,
  } = useUpdateTradingInfo();

  const { successMessage } = useTradingInfoEffects({
    setPhoneNumber,
    setTradingName,
    addTradingInfo,
    updateTradingInfo,
  });

  /**
   *
   * Handlers
   *
   */
  const pickImageHandler = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result?.cancelled) {
      setImage(result?.uri);
    }
  };

  const addTradingInfohandler = () => {
    const abortAddProvider = !tradingName || !phoneNumber;
    if (!tradingName) {
      setTradingNameError("Trading name is required!");
    } else if (tradingName) {
      setTradingNameError("");
    }
    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required!");
    } else if (phoneNumber) {
      setPhoneNumberError("");
    }

    if (abortAddProvider) return;

    addTradingInfoTrigger({
      tradingName,
      phone: phoneNumber,
    });
  };

  const updateTradingInfohandler = () => {
    if (!provider) return;

    updateTradingInfoTrigger({
      providerId: provider.id,
      tradingName,
      phone: phoneNumber,
    });
  };

  return {
    hasProvider: !isEmpty(provider),
    image,
    tradingName,
    tradingNameError,
    phoneNumber,
    phoneNumberError,
    addTradingInfoLoading,
    addTradingInfoHasError,
    addTradingInfoError,
    updateTradingInfoLoading,
    updateTradingInfoHasError,
    updateTradingInfoError,
    successMessage,
    setImage,
    setTradingName,
    setPhoneNumber,
    pickImageHandler,
    addTradingInfohandler,
    updateTradingInfohandler,
  };
};
