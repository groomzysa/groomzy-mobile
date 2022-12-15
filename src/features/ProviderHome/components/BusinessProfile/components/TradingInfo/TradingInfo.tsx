import React, { FC } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../../../components";
import { useTradingInfoHandlers } from "./hooks";

export const TradingInfo: FC = () => {
  const {
    hasProvider,
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
  } = useTradingInfoHandlers();

  return (
    <>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addTradingInfoHasError && (
        <GErrorMessage message={addTradingInfoError} />
      )}
      {updateTradingInfoHasError && (
        <GErrorMessage message={updateTradingInfoError} />
      )}

      <GTextInput
        testID="tradingName"
        label="Trading name"
        value={tradingName}
        onTextChange={setTradingName}
        errorMessage={tradingNameError}
      />

      <GTextInput
        testID="phoneNumber"
        label="Phone number"
        value={phoneNumber}
        onTextChange={setPhoneNumber}
        errorMessage={phoneNumberError}
        keyboardType="phone-pad"
      />
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={async () => await pickImageHandler()}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="camera" size={22} color="gray" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                marginRight: 20,
              }}
            >
              Click to upload business logo
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 120, height: 120 }}
            />
          )}
        </View>
      </View>

      <GButton
        label={hasProvider ? "Update details" : "Add details"}
        onPress={
          hasProvider
            ? () => updateTradingInfohandler()
            : () => addTradingInfohandler()
        }
        loading={updateTradingInfoLoading || addTradingInfoLoading}
      />
    </>
  );
};
