import React, { FC, useState } from "react";
import {
  useAddTradingAddress,
  useUpdateTradingAddress,
} from "../../../../../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
  GTitle,
} from "../../../../../../components";
import { ITradingAddressProps } from "./types";
import {
  Flex1,
  Flex2,
  FlexRowContainer,
} from "../../../../../../utils/common/styles";
import { useTradingAddressEffects, useTradingAddressHandlers } from "./hooks";

export const TradingAddress: FC<ITradingAddressProps> = ({ address }) => {
  const [streetNumber, setStreetNumber] = useState<string>("");
  const [streetNumberError, setStreetNumberError] = useState<string>("");
  const [streetName, setStreetName] = useState<string>("");
  const [streetNameError, setStreetNameError] = useState<string>("");
  const [townName, setTownName] = useState<string>("");
  const [townNameError, setTownNameError] = useState<string>("");
  const [cityName, setCityName] = useState<string>("");
  const [cityNameError, setCityNameError] = useState<string>("");
  const [provinceName, setProvinceName] = useState<string>("");
  const [provinceNameError, setProvinceNameError] = useState<string>("");
  const [areaCode, setAreaCode] = useState<string>("");
  const [areaCodeError, setAreaCodeError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

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

  const { addTradingAddresshandler, updateTradingAddresshandler } =
    useTradingAddressHandlers();

  useTradingAddressEffects({
    setAreaCode,
    setCityName,
    setStreetName,
    setStreetNumber,
    setSuccessMessage,
    setTownName,
    successMessage,
    addTradingAddress,
    updateTradingAddress,
  });

  return (
    <>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addTradingAddressHasError && (
        <GErrorMessage message={addTradingAddressError} />
      )}
      {updateTradingAddressHasError && (
        <GErrorMessage message={updateTradingAddressError} />
      )}

      <FlexRowContainer>
        <Flex1>
          <GTextInput
            testID="streetNumber"
            label="Str No."
            value={streetNumber || address?.streetNumber || ""}
            onTextChange={setStreetNumber}
            errorMessage={streetNumberError}
            keyboardType="numeric"
          />
        </Flex1>
        <Flex2>
          <GTextInput
            testID="streetName"
            label="Street name"
            value={streetName || address?.streetName || ""}
            onTextChange={setStreetName}
            errorMessage={streetNameError}
          />
        </Flex2>
      </FlexRowContainer>

      <GTextInput
        testID="townName"
        label="Town/Surbub name"
        value={townName || address?.town || ""}
        onTextChange={setTownName}
        errorMessage={townNameError}
      />
      <GTextInput
        testID="cityName"
        label="City name"
        value={cityName || address?.city || ""}
        onTextChange={setCityName}
        errorMessage={cityNameError}
      />
      <FlexRowContainer>
        <Flex2>
          <GTextInput
            testID="provinceName"
            label="Province name"
            value={provinceName || address?.province || ""}
            onTextChange={setProvinceName}
            errorMessage={provinceNameError}
          />
        </Flex2>
        <Flex1>
          <GTextInput
            testID="areaCode"
            label="Code"
            value={areaCode || address?.areaCode || ""}
            onTextChange={setAreaCode}
            errorMessage={areaCodeError}
            keyboardType="numeric"
          />
        </Flex1>
      </FlexRowContainer>

      <GButton
        label={address ? "Update address" : "Add address"}
        onPress={
          address
            ? () =>
                updateTradingAddresshandler({
                  areaCode,
                  cityName,
                  provinceName,
                  streetName,
                  streetNumber,
                  townName,
                  updateTradingAddressTrigger,
                  addressId: address?.id,
                })
            : () =>
                addTradingAddresshandler({
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
                })
        }
        loading={updateTradingAddressLoading || addTradingAddressLoading}
      />
    </>
  );
};
