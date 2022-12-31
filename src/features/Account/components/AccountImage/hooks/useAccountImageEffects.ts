import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { UPDATE_USER_ACCOUNT_IMAGE_MESSAGE } from "../../../../../utils/messages";
import { IuseAccountImageEffects } from "./types";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { setIsImageUpload } from "../../../../../store/slices/accountSlice/accountSlice";

export const useAccountImageEffects = ({
  updateAccount,
}: IuseAccountImageEffects) => {
  const [successMessage, setSuccessMessage] = useState<string>();

  const dispatch = useDispatch();

  useEffect(() => {
    // Set to true to enable request header content type to multipart/form
    // dispatch(setIsImageUpload({ isImageUpload: true }));

    if (ImagePicker.PermissionStatus.GRANTED) return;

    async function getPermissions() {
      try {
        await ImagePicker.requestCameraPermissionsAsync();
      } catch (error) {
        Alert.alert((error as Error).message);
      }
    }

    getPermissions();
  }, []);

  useEffect(() => {
    if (!successMessage) return;

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  }, [successMessage]);

  useEffect(() => {
    if (!updateAccount) return;

    setSuccessMessage(UPDATE_USER_ACCOUNT_IMAGE_MESSAGE);
  }, [updateAccount]);

  return {
    successMessage,
  };
};
