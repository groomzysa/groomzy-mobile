import { isEmpty } from "lodash";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddAccountAddress,
  useUpdateAccountAddress,
} from "../../../../../api/hooks/mutations";
import { RootState } from "../../../../../store/store";
import { useAccountAddressEffects } from "./useAccountAddressEffects";

export const useAccountAddressHandlers = () => {
  const {
    app: { user },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);

  const [streetNumber, setStreetNumber] = useState<string>(
    user?.address?.streetNumber || ""
  );
  const [streetNumberError, setStreetNumberError] = useState<string>("");
  const [streetName, setStreetName] = useState<string>(
    user?.address?.streetName || ""
  );
  const [streetNameError, setStreetNameError] = useState<string>("");
  const [townName, setTownName] = useState<string>(user?.address?.town || "");
  const [townNameError, setTownNameError] = useState<string>("");
  const [cityName, setCityName] = useState<string>(user?.address?.city || "");
  const [cityNameError, setCityNameError] = useState<string>("");
  const [provinceName, setProvinceName] = useState<string>(
    user?.address?.province || ""
  );
  const [provinceNameError, setProvinceNameError] = useState<string>("");
  const [areaCode, setAreaCode] = useState<string>(
    user?.address?.areaCode || ""
  );
  const [areaCodeError, setAreaCodeError] = useState<string>("");

  const {
    addAccountAddressTrigger,
    addAccountAddress,
    addAccountAddressLoading,
    addAccountAddressHasError,
    addAccountAddressError,
  } = useAddAccountAddress();

  const {
    updateAccountAddressTrigger,
    updateAccountAddress,
    updateAccountAddressLoading,
    updateAccountAddressHasError,
    updateAccountAddressError,
  } = useUpdateAccountAddress();

  const { successMessage } = useAccountAddressEffects({
    setAreaCode,
    setCityName,
    setStreetName,
    setStreetNumber,
    setProvinceName,
    setTownName,
    addAccountAddress,
    updateAccountAddress,
  });

  const addAccountAddresshandler = () => {
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

    addAccountAddressTrigger({
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
    });
  };

  const updateAccountAddresshandler = () => {
    if (!user?.address) return;

    updateAccountAddressTrigger({
      addressId: user.address.id,
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
    });
  };

  return {
    hasAddress: !isEmpty(user?.address),
    areaCode,
    cityName,
    provinceName,
    streetName,
    streetNumber,
    townName,
    streetNumberError,
    streetNameError,
    townNameError,
    cityNameError,
    provinceNameError,
    areaCodeError,
    setAreaCode,
    setCityName,
    setStreetName,
    setStreetNumber,
    setProvinceName,
    setTownName,
    successMessage,
    addAccountAddressLoading,
    addAccountAddressHasError,
    addAccountAddressError,
    updateAccountAddressLoading,
    updateAccountAddressHasError,
    updateAccountAddressError,
    updateAccountAddresshandler,
    addAccountAddresshandler,
  };
};
