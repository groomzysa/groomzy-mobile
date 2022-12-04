import React, { FC, useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useAddProvider,
  useUpdateProvider,
} from "../../../../../../api/hooks/mutations";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
  GTitle,
} from "../../../../../../components";
import { IBusinessDetailsProps } from "./types";
import { useBusinessDetailsEffects, useBusinessDetailsHandlers } from "./hooks";

export const BusinessDetails: FC<IBusinessDetailsProps> = ({ provider }) => {
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
    addProviderTrigger,
    addProvider,
    addProviderLoading,
    addProviderHasError,
    addProviderError,
  } = useAddProvider();

  const {
    updateProviderTrigger,
    updateProvider,
    updateProviderLoading,
    updateProviderHasError,
    updateProviderError,
  } = useUpdateProvider();

  const { addProviderhandler, pickImageHandler, updateProviderhandler } =
    useBusinessDetailsHandlers();

  useBusinessDetailsEffects({
    setPhoneNumber,
    setSuccessMessage,
    setTradingName,
    successMessage,
    addProvider,
    updateProvider,
  });

  return (
    <>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addProviderHasError && <GErrorMessage message={addProviderError} />}
      {updateProviderHasError && (
        <GErrorMessage message={updateProviderError} />
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
                updateProviderhandler({
                  phoneNumber,
                  tradingName,
                  updateProviderTrigger,
                  providerId: provider?.id,
                })
            : () =>
                addProviderhandler({
                  addProviderTrigger,
                  phoneNumber,
                  setPhoneNumberError,
                  setTradingNameError,
                  tradingName,
                })
        }
        loading={updateProviderLoading || addProviderLoading}
      />
    </>
  );
};
