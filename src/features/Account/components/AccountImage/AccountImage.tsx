import React, { FC } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
} from "../../../../components";
import { useAccountDetailsHandlers } from "./hooks";

export const AccountImage: FC = () => {
  const {
    successMessage,
    updateAccountError,
    updateAccountHasError,
    updateAccountLoading,
    updateAccountImagehandler,
    image,
    imageUri,
    pickImageHandler,
  } = useAccountDetailsHandlers();

  return (
    <View>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {updateAccountHasError && <GErrorMessage message={updateAccountError} />}
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
              Click to upload account profile image
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{ marginTop: 10 }}>
          {image && (
            <Image
              source={{ uri: imageUri }}
              style={{ width: 120, height: 120 }}
            />
          )}
        </View>
      </View>
      <GButton
        label="Update"
        onPress={updateAccountImagehandler}
        loading={updateAccountLoading}
      />
    </View>
  );
};
