import ImagePicker from "expo-image-picker";
import {
  IaddProviderhandlerParams,
  IpickImageHandlerParams,
  IupdateProviderhandlerParams,
} from "./types";

export const useBusinessDetailsHandlers = () => {
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

  const addProviderhandler = ({
    tradingName,
    phoneNumber,
    setPhoneNumberError,
    setTradingNameError,
    addProviderTrigger,
  }: IaddProviderhandlerParams) => {
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

    addProviderTrigger({
      tradingName,
      phone: phoneNumber,
    });
  };

  const updateProviderhandler = ({
    phoneNumber,
    tradingName,
    providerId,
    updateProviderTrigger,
  }: IupdateProviderhandlerParams) => {
    if (!providerId) return;

    updateProviderTrigger({
      providerId,
      tradingName,
      phone: phoneNumber,
    });
  };

  return {
    pickImageHandler,
    addProviderhandler,
    updateProviderhandler,
  };
};
