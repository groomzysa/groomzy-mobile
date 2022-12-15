import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DayType } from "../../../../../../../../api/graphql/api.schema";
import {
  GBSelect,
  GButton,
  GSuccessMessage,
} from "../../../../../../../../components";
import {
  Flex1,
  FlexColumContainer,
  FlexRowContainer,
  FlexRowEndContainer,
} from "../../../../../../../../utils/common/styles";
import { Space } from "../../../../styles";
import { DAYS } from "../../constants";
import { useUpdateTradingTimeHandlers } from "./hooks";
import { ActionButtonContainer } from "./styles";
import { IAddTradingTimeProps } from "./types";

export const UpdateTradingTime: FC<IAddTradingTimeProps> = ({
  visible,
  hideDialog,
}) => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    operatingTime,
    closes,
    day,
    dayOptions,
    opens,
    setShowCloses,
    setShowOpens,
    setDay,
    successMessage,
    updateOperatingTimeError,
    updateOperatingTimeHandler,
    updateOperatingTimeHasError,
    updateOperatingTimeLoading,
  } = useUpdateTradingTimeHandlers(hideDialog);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Update Trading Time</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {updateOperatingTimeHasError && (
        <GSuccessMessage message={updateOperatingTimeError} />
      )}
      <GBSelect
        items={DAYS}
        enabledItems={dayOptions}
        label="Select day"
        onValueChange={(itemValue) => setDay(itemValue as DayType)}
        selectedValue={day || (operatingTime?.day as DayType)}
      />
      <Space />
      <FlexRowContainer>
        <Flex1>
          <FlexColumContainer>
            <TouchableOpacity
              onPress={() => setShowOpens(true)}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="calendar-outline" size={24} />

              <Text style={{ paddingLeft: 5 }}>Opens at</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "500", paddingTop: 5 }}>
              {opens || (operatingTime?.opens as string) || "__:__"}
            </Text>
          </FlexColumContainer>
        </Flex1>
        <Flex1>
          <FlexColumContainer>
            <TouchableOpacity
              onPress={() => setShowCloses(true)}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="calendar-outline" size={24} />

              <Text style={{ paddingLeft: 5 }}>Closes at</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: "500", paddingTop: 5 }}>
              {closes || (operatingTime?.closes as string) || "__:__"}
            </Text>
          </FlexColumContainer>
        </Flex1>
      </FlexRowContainer>
      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Update"
            testID="updateTradingTimeButton"
            onPress={updateOperatingTimeHandler}
            loading={updateOperatingTimeLoading}
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelUpdateTradingTimeButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
