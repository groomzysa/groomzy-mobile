import React, { FC } from "react";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../../../components";
import {
  Flex1,
  Flex2,
  FlexRowContainer,
} from "../../../../../../utils/common/styles";
import { useTradingAddressHandlers } from "./hooks";

export const TradingAddress: FC = () => {
  /**
   *
   * Custom hooks
   *
   */

  const {
    hasAddress,
    addTradingAddressError,
    addTradingAddressHasError,
    addTradingAddressLoading,
    addTradingAddresshandler,
    areaCode,
    areaCodeError,
    cityName,
    cityNameError,
    provinceName,
    provinceNameError,
    streetName,
    streetNameError,
    streetNumber,
    streetNumberError,
    successMessage,
    townName,
    townNameError,
    updateTradingAddressError,
    updateTradingAddressHasError,
    updateTradingAddressLoading,
    setAreaCode,
    setCityName,
    setProvinceName,
    setStreetName,
    setStreetNumber,
    setTownName,
    updateTradingAddresshandler,
  } = useTradingAddressHandlers();

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
            ? () => updateTradingAddresshandler()
            : () => addTradingAddresshandler()
        }
        loading={updateTradingAddressLoading || addTradingAddressLoading}
      />
    </>
  );
};
