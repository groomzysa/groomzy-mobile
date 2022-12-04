import React, { FC, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useAddTradingInfo,
  useUpdateTradingInfo,
} from "../../../../../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
} from "../../../../../../components";
import { ITradingInfoProps } from "./types";
import { useTradingInfoEffects, useTradingInfoHandlers } from "./hooks";

export const TradingInfo: FC<ITradingInfoProps> = ({ provider }) => {
  const [image, setImage] = useState<string>();
  const [tradingName, setTradingName] = useState<string>(
    provider?.tradingName || ""
  );
  const [tradingNameError, setTradingNameError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>(provider?.phone || "");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    addTradingInfoTrigger,
    addTradingInfo,
    addTradingInfoLoading,
    addTradingInfoHasError,
    addTradingInfoError,
  } = useAddTradingInfo();

  const {
    updateTradingInfoTrigger,
    updateTradingInfo,
    updateTradingInfoLoading,
    updateTradingInfoHasError,
    updateTradingInfoError,
  } = useUpdateTradingInfo();

  const { addTradingInfohandler, pickImageHandler, updateTradingInfohandler } =
    useTradingInfoHandlers();

  useTradingInfoEffects({
    setPhoneNumber,
    setSuccessMessage,
    setTradingName,
    successMessage,
    addTradingInfo,
    updateTradingInfo,
  });

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
        <TouchableOpacity
          onPress={async () => await pickImageHandler({ setImage })}
        >
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
        label={provider ? "Update details" : "Add details"}
        onPress={
          provider
            ? () =>
                updateTradingInfohandler({
                  phoneNumber,
                  tradingName,
                  updateTradingInfoTrigger,
                  providerId: provider?.id,
                })
            : () =>
                addTradingInfohandler({
                  addTradingInfoTrigger,
                  phoneNumber,
                  setPhoneNumberError,
                  setTradingNameError,
                  tradingName,
                })
        }
        loading={updateTradingInfoLoading || addTradingInfoLoading}
      />
    </>
  );
};
