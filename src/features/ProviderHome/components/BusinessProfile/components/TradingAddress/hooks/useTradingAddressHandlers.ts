import {
  IaddTradingAddresshandlerParams,
  IupdateTradingAddresshandlerParams,
} from "./types";

export const useTradingAddressHandlers = () => {
  const addTradingAddresshandler = ({
    addTradingAddressTrigger,
    areaCode,
    cityName,
    provinceName,
    setAreaCodeError,
    setCityNameError,
    setProvinceNameError,
    setStreetNameError,
    setStreetNumberError,
    setTownNameError,
    streetName,
    streetNumber,
    townName,
  }: IaddTradingAddresshandlerParams) => {
    const abortAddProviderAddress =
      !streetNumber ||
      !streetName ||
      !townName ||
      !cityName ||
      !provinceName ||
      !areaCode;

    if (!streetNumber) {
      setStreetNumberError("Street number is required!");
    } else if (streetNumber) {
      setStreetNumberError("");
    }
    if (!streetName) {
      setStreetNameError("Street name is required");
    } else if (streetName) {
      setStreetNameError("");
    }
    if (!townName) {
      setTownNameError("Town / suburb name is required");
    } else if (streetName) {
      setTownNameError("");
    }
    if (!cityName) {
      setCityNameError("City name is required");
    } else if (cityName) {
      setCityNameError("");
    }
    if (!provinceName) {
      setProvinceNameError("Province name is required");
    } else if (provinceName) {
      setProvinceNameError("");
    }
    if (!areaCode) {
      setAreaCodeError("Area code is required");
    } else if (areaCode) {
      setAreaCodeError("");
    }

    if (abortAddProviderAddress) return;

    addTradingAddressTrigger({
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
    });
  };

  const updateTradingAddresshandler = ({
    addressId,
    areaCode,
    cityName,
    provinceName,
    streetName,
    streetNumber,
    townName,
    updateTradingAddressTrigger,
  }: IupdateTradingAddresshandlerParams) => {
    if (!addressId) return;

    updateTradingAddressTrigger({
      addressId,
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
    });
  };

  return {
    updateTradingAddresshandler,
    addTradingAddresshandler,
  };
};
