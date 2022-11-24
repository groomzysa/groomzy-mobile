import React, { FC, useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  GButton,
  GErrorMessage,
  GSuccessMessage,
  GTextInput,
  GTitle,
} from "../../../../components";
import { Container, Content, FlexRowContainer, Space } from "./styles";
import { TouchableOpacity, View, Text, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  useAddProvider,
  useUpdateProvider,
} from "../../../../api/hooks/mutations";
import {
  ADD_PROVIDER_BUSINESS_DETAILS_MESSAGE,
  UPDATE_PROVIDER_BUSINESS_DETAILS_MESSAGE,
} from "../../../../utils/messages";
import { useSelector } from "react-redux";
import { IAppSliceState } from "../../../../store/slices/types";
import { Flex1, Flex2 } from "../../../../utils/common/styles";

export const BusinessProfile: FC = () => {
  const { user } = useSelector<{ appSlice: IAppSliceState }, IAppSliceState>(
    (state) => state.appSlice
  );

  const [image, setImage] = useState<string>();
  const [tradingName, setTradingName] = useState<string>("");
  const [tradingNameError, setTradingNameError] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumberError, setPhoneNumberError] = useState<string>("");
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

  /**
   *
   * Effects
   *
   */
  useEffect(() => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }, [successMessage]);

  useEffect(() => {
    if (!addProvider) return;

    setSuccessMessage(ADD_PROVIDER_BUSINESS_DETAILS_MESSAGE);

    // After user signed up successfully
    // Reset state and redirect to sign in screen
    setTradingName("");
    setPhoneNumber("");
    setStreetNumber("");
    setStreetName("");
    setTownName("");
    setCityName("");
    setTownName("");
    setAreaCode("");
  }, [addProvider]);

  useEffect(() => {
    if (!updateProvider) return;

    setSuccessMessage(UPDATE_PROVIDER_BUSINESS_DETAILS_MESSAGE);

    // After user signed up successfully
    // Reset state and redirect to sign in screen
    setTradingName("");
    setPhoneNumber("");
    setStreetNumber("");
    setStreetName("");
    setTownName("");
    setCityName("");
    setTownName("");
    setAreaCode("");
  }, [updateProvider]);

  /**
   *
   * Handlers
   *
   */
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result?.cancelled) {
      setImage(result?.uri);
    }
  };

  const addProviderhandler = () => {
    const abortAddProvider =
      !tradingName ||
      !phoneNumber ||
      !streetNumber ||
      !streetName ||
      !townName ||
      !cityName ||
      !provinceName ||
      !areaCode;
    if (!tradingName) {
      setTradingNameError("Trading name is required!");
    } else if (tradingName) {
      setTradingNameError("");
    }
    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required!");
    } else if (phoneNumber) {
      setPhoneNumberError("");
    }
    if (!streetNumber) {
      setStreetNumberError("Street number is required!");
    } else if (streetNumber) {
      setStreetNumberError("");
    }
    if (!streetName) {
      setStreetNameError("Street name is required");
    } else if (streetName) {
      setStreetNameError("");
    }
    if (!townName) {
      setTownNameError("Town / suburb name is required");
    } else if (streetName) {
      setTownNameError("");
    }
    if (!cityName) {
      setCityNameError("City name is required");
    } else if (cityName) {
      setCityNameError("");
    }
    if (!provinceName) {
      setProvinceNameError("Province name is required");
    } else if (provinceName) {
      setProvinceNameError("");
    }
    if (!areaCode) {
      setAreaCodeError("Area code is required");
    } else if (areaCode) {
      setAreaCodeError("");
    }

    if (abortAddProvider) return;

    addProviderTrigger({
      tradingName,
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
      phone: phoneNumber,
    });
  };

  const updateProviderhandler = () => {
    if (!user?.provider) return;

    updateProviderTrigger({
      providerId: user.provider.id,
      streetNumber,
      streetName,
      town: townName,
      city: cityName,
      province: provinceName,
      areaCode,
      phone: phoneNumber,
    });
  };

  return (
    <Container>
      <Content>
        <GTitle title="Business details" />
        {successMessage && <GSuccessMessage message={successMessage} />}
        {(addProviderHasError || updateProviderHasError) && (
          <GErrorMessage message={addProviderError || updateProviderError} />
        )}
        <GTextInput
          testID="tradingName"
          label="Trading name"
          value={tradingName || user?.provider?.profile?.tradingName || ""}
          onTextChange={setTradingName}
          errorMessage={tradingNameError}
        />

        <GTextInput
          testID="phoneNumber"
          label="Phone number"
          value={phoneNumber || user?.provider?.profile?.phone || ""}
          onTextChange={setPhoneNumber}
          errorMessage={phoneNumberError}
        />

        <Space></Space>

        <FlexRowContainer>
          <Flex1>
            <GTextInput
              testID="streetNumber"
              label="Str No."
              value={
                streetNumber ||
                user?.provider?.profile?.address?.streetNumber ||
                ""
              }
              onTextChange={setStreetNumber}
              errorMessage={streetNumberError}
            />
          </Flex1>
          <Flex2>
            <GTextInput
              testID="streetName"
              label="Street name"
              value={
                streetName || user?.provider?.profile?.address?.streetName || ""
              }
              onTextChange={setStreetName}
              errorMessage={streetNameError}
            />
          </Flex2>
        </FlexRowContainer>

        <GTextInput
          testID="townName"
          label="Town/Surbub name"
          value={townName || user?.provider?.profile?.address?.town || ""}
          onTextChange={setTownName}
          errorMessage={townNameError}
        />
        <GTextInput
          testID="cityName"
          label="City name"
          value={cityName || user?.provider?.profile?.address?.city || ""}
          onTextChange={setCityName}
          errorMessage={cityNameError}
        />
        <FlexRowContainer>
          <Flex2>
            <GTextInput
              testID="provinceName"
              label="Province name"
              value={
                provinceName || user?.provider?.profile?.address?.province || ""
              }
              onTextChange={setProvinceName}
              errorMessage={provinceNameError}
            />
          </Flex2>
          <Flex1>
            <GTextInput
              testID="areaCode"
              label="Code"
              value={
                areaCode || user?.provider?.profile?.address?.areaCode || ""
              }
              onTextChange={setAreaCode}
              errorMessage={areaCodeError}
            />
          </Flex1>
        </FlexRowContainer>

        <Space></Space>

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={async () => await pickImage()}>
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
          label={user?.provider ? "Update" : "Create"}
          onPress={user?.provider ? updateProviderhandler : addProviderhandler}
          loading={updateProviderLoading || addProviderLoading}
        />
      </Content>
    </Container>
  );
};
