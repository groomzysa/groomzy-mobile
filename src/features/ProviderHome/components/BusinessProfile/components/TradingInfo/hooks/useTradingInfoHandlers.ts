import ImagePicker from "expo-image-picker";
import {
  IaddTradingInfohandlerParams,
  IpickImageHandlerParams,
  IupdateTradingInfohandlerParams,
} from "./types";

export const useTradingInfoHandlers = () => {
  const pickImageHandler = async ({ setImage }: IpickImageHandlerParams) => {
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

  const addTradingInfohandler = ({
    tradingName,
    phoneNumber,
    setPhoneNumberError,
    setTradingNameError,
    addTradingInfoTrigger,
  }: IaddTradingInfohandlerParams) => {
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

  const updateTradingInfohandler = ({
    phoneNumber,
    tradingName,
    providerId,
    updateTradingInfoTrigger,
  }: IupdateTradingInfohandlerParams) => {
    if (!providerId) return;

    updateTradingInfoTrigger({
      providerId,
      tradingName,
      phone: phoneNumber,
    });
  };

  return {
    pickImageHandler,
    addTradingInfohandler,
    updateTradingInfohandler,
  };
};
