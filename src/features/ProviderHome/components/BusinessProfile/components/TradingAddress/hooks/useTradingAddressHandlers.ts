import { isEmpty } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddTradingAddress,
  useUpdateTradingAddress,
} from "../../../../../../../api/hooks/mutations";
import { RootState } from "../../../../../../../store/store";
import { IupdateTradingAddresshandlerParams } from "./types";
import { useTradingAddressEffects } from "./useTradingAddressEffects";

export const useTradingAddressHandlers = () => {
  const {
    app: { user },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);
  const providerAddress = user?.provider?.addresses?.[0];
  const [streetNumber, setStreetNumber] = useState<string>(
    providerAddress?.streetNumber || ""
  );
  const [streetNumberError, setStreetNumberError] = useState<string>("");
  const [streetName, setStreetName] = useState<string>(
    providerAddress?.streetName || ""
  );
  const [streetNameError, setStreetNameError] = useState<string>("");
  const [townName, setTownName] = useState<string>(providerAddress?.town || "");
  const [townNameError, setTownNameError] = useState<string>("");
  const [cityName, setCityName] = useState<string>(providerAddress?.city || "");
  const [cityNameError, setCityNameError] = useState<string>("");
  const [provinceName, setProvinceName] = useState<string>(
    providerAddress?.province || ""
  );
  const [provinceNameError, setProvinceNameError] = useState<string>("");
  const [areaCode, setAreaCode] = useState<string>(
    providerAddress?.areaCode || ""
  );
  const [areaCodeError, setAreaCodeError] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    addTradingAddressTrigger,
    addTradingAddress,
    addTradingAddressLoading,
    addTradingAddressHasError,
    addTradingAddressError,
  } = useAddTradingAddress();

  const {
    updateTradingAddressTrigger,
    updateTradingAddress,
    updateTradingAddressLoading,
    updateTradingAddressHasError,
    updateTradingAddressError,
  } = useUpdateTradingAddress();

  const { successMessage } = useTradingAddressEffects({
    setAreaCode,
    setCityName,
    setProvinceName,
    setStreetName,
    setStreetNumber,
    setTownName,
    addTradingAddress,
    updateTradingAddress,
  });

  /**
   *
   * Handlers
   *
   */

  const addTradingAddresshandler = () => {
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

  const updateTradingAddresshandler = () => {
    if (!providerAddress) return;

    updateTradingAddressTrigger({
      addressId: providerAddress.id,
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
    });
  };

  return {
    hasAddress: !isEmpty(providerAddress),
    streetNumber,
    streetName,
    townName,
    cityName,
    provinceName,
    areaCode,
    streetNumberError,
    streetNameError,
    townNameError,
    cityNameError,
    provinceNameError,
    areaCodeError,
    addTradingAddressLoading,
    addTradingAddressHasError,
    addTradingAddressError,
    updateTradingAddressLoading,
    updateTradingAddressHasError,
    updateTradingAddressError,
    successMessage,
    setAreaCode,
    setCityName,
    setProvinceName,
    setStreetName,
    setStreetNumber,
    setTownName,
    updateTradingAddresshandler,
    addTradingAddresshandler,
  };
};
