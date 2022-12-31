import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { useSelector } from "react-redux";
import { API_BASE_URL } from "../../../../../../config";
import { useUpdateAccount } from "../../../../../api/hooks/mutations";
import { RootState } from "../../../../../store/store";
import { useAccountImageEffects } from "./useAccountImageEffects";
import { Alert } from "react-native";

export const useAccountImageHandlers = () => {
  /**
   *
   * State
   *
   */
  const {
    app: { user },
  } = useSelector<RootState, Pick<RootState, "app">>((state) => state);

  const [image, setImage] = useState<FormData>();
  const [imageUri, setImageUri] = useState<string>();

  /**
   *
   * Custom hooks
   *
   */
  const {
    updateAccountTrigger,
    updateAccount,
    updateAccountLoading,
    updateAccountHasError,
    updateAccountError,
  } = useUpdateAccount();

  const { successMessage } = useAccountImageEffects({
    updateAccount,
  });

  /**
   *
   * Handlers
   *
   */

  const updateAccountImagehandler = async () => {
    if (!user) return;

    updateAccountTrigger({
      userImage: image,
    });
  };

  const pickImageHandler = async () => {
    try {
      // No permissions request is necessary for launching the image library
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result?.cancelled) {
        const fileType = result.uri.split(".").pop();
        const response = await fetch(result.uri);
        const imageBlob = await response.blob();

        const formData = new FormData();
        formData.append("file", {
          //@ts-ignore
          name: `${user?.email}_${user?.role?.toLowerCase()}.${fileType}`,
          uri: result.uri,
          type: `image/${fileType}`,
        });
        // formData.append(
        //   "file",
        //   imageBlob,
        //   `${user?.email}_${user?.role?.toLowerCase()}.${fileType}`
        // );

        setImageUri(result.uri);
        setImage(formData);
      }
    } catch (error) {
      Alert.alert((error as Error).message);
    }
  };

  return {
    updateAccountLoading,
    updateAccountHasError,
    updateAccountError,
    updateAccountImagehandler,
    image,
    imageUri,
    pickImageHandler,
    successMessage,
  };
};
