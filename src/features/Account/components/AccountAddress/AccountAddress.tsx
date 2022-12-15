import React, { FC } from "react";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../components";
import { IAccountAddressProps } from "./types";
import {
  Flex1,
  Flex2,
  FlexRowContainer,
} from "../../../../utils/common/styles";
import { useAccountAddressHandlers } from "./hooks";

export const AccountAddress: FC = () => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    hasAddress,
    areaCode,
    cityName,
    provinceName,
    setAreaCode,
    setCityName,
    setProvinceName,
    setStreetName,
    setStreetNumber,
    setTownName,
    streetName,
    streetNumber,
    successMessage,
    townName,
    areaCodeError,
    cityNameError,
    provinceNameError,
    streetNameError,
    streetNumberError,
    townNameError,
    addAccountAddressLoading,
    addAccountAddressHasError,
    addAccountAddressError,
    updateAccountAddressLoading,
    updateAccountAddressHasError,
    updateAccountAddressError,
    addAccountAddresshandler,
    updateAccountAddresshandler,
  } = useAccountAddressHandlers();

  return (
    <>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addAccountAddressHasError && (
        <GErrorMessage message={addAccountAddressError} />
      )}
      {updateAccountAddressHasError && (
        <GErrorMessage message={updateAccountAddressError} />
      )}

      <FlexRowContainer>
        <Flex1>
          <GTextInput
            testID="streetNumber"
            label="Str No."
            value={streetNumber}
            onTextChange={setStreetNumber}
            errorMessage={streetNumberError}
            keyboardType="numeric"
          />
        </Flex1>
        <Flex2>
          <GTextInput
            testID="streetName"
            label="Street name"
            value={streetName}
            onTextChange={setStreetName}
            errorMessage={streetNameError}
          />
        </Flex2>
      </FlexRowContainer>

      <GTextInput
        testID="townName"
        label="Town/Surbub name"
        value={townName}
        onTextChange={setTownName}
        errorMessage={townNameError}
      />
      <GTextInput
        testID="cityName"
        label="City name"
        value={cityName}
        onTextChange={setCityName}
        errorMessage={cityNameError}
      />
      <FlexRowContainer>
        <Flex2>
          <GTextInput
            testID="provinceName"
            label="Province name"
            value={provinceName}
            onTextChange={setProvinceName}
            errorMessage={provinceNameError}
          />
        </Flex2>
        <Flex1>
          <GTextInput
            testID="areaCode"
            label="Code"
            value={areaCode}
            onTextChange={setAreaCode}
            errorMessage={areaCodeError}
            keyboardType="numeric"
          />
        </Flex1>
      </FlexRowContainer>

      <GButton
        label={hasAddress ? "Update address" : "Add address"}
        onPress={
          hasAddress
            ? () => updateAccountAddresshandler()
            : () => addAccountAddresshandler()
        }
        loading={updateAccountAddressLoading || addAccountAddressLoading}
      />
    </>
  );
};
