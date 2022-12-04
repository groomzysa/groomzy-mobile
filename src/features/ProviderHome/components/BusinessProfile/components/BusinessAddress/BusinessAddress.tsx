import React, { FC, useState } from "react";
import {
  useAddProviderAddress,
  useUpdateProviderAddress,
} from "../../../../../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
  GTitle,
} from "../../../../../../components";
import { IBusinessAddressProps } from "./types";
import {
  Flex1,
  Flex2,
  FlexRowContainer,
} from "../../../../../../utils/common/styles";
import { useBusinessAddressEffects, useBusinessAddressHandlers } from "./hooks";

export const BusinessAddress: FC<IBusinessAddressProps> = ({ address }) => {
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
    addProviderAddressTrigger,
    addProviderAddress,
    addProviderAddressLoading,
    addProviderAddressHasError,
    addProviderAddressError,
  } = useAddProviderAddress();

  const {
    updateProviderAddressTrigger,
    updateProviderAddress,
    updateProviderAddressLoading,
    updateProviderAddressHasError,
    updateProviderAddressError,
  } = useUpdateProviderAddress();

  const { addProviderAddresshandler, updateProviderAddresshandler } =
    useBusinessAddressHandlers();

  useBusinessAddressEffects({
    setAreaCode,
    setCityName,
    setStreetName,
    setStreetNumber,
    setSuccessMessage,
    setTownName,
    successMessage,
    addProviderAddress,
    updateProviderAddress,
  });

  return (
    <>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addProviderAddressHasError && (
        <GErrorMessage message={addProviderAddressError} />
      )}
      {updateProviderAddressHasError && (
        <GErrorMessage message={updateProviderAddressError} />
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
                updateProviderAddresshandler({
                  areaCode,
                  cityName,
                  provinceName,
                  streetName,
                  streetNumber,
                  townName,
                  updateProviderAddressTrigger,
                  addressId: address?.id,
                })
            : () =>
                addProviderAddresshandler({
                  addProviderAddressTrigger,
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
        loading={updateProviderAddressLoading || addProviderAddressLoading}
      />
    </>
  );
};
