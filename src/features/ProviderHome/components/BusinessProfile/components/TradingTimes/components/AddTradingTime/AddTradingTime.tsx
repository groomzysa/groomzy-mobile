import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DayType } from "../../../../../../../../api/graphql/api.schema";
import {
  GBSelect,
  GButton,
  GErrorMessage,
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
import { useAddTradingTimeHandlers } from "./hooks";
import { ActionButtonContainer, ErrorText } from "./styles";
import { IAddTradingTimeProps } from "./types";

export const AddTradingTime: FC<IAddTradingTimeProps> = ({
  visible,
  hideDialog,
}) => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    dayOptions,
    closes,
    closesError,
    day,
    dayError,
    opens,
    opensError,
    setDay,
    setShowCloses,
    setShowOpens,
    successMessage,
    addOperatingTimeError,
    addOperatingTimeHasError,
    addOperatingTimeLoading,
    addOperatingTimeHandler,
  } = useAddTradingTimeHandlers(hideDialog);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Add Trading Time</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addOperatingTimeHasError && (
        <GErrorMessage message={addOperatingTimeError} />
      )}
      <GBSelect
        items={DAYS}
        enabledItems={dayOptions}
        label="Select day"
        onValueChange={(itemValue) => setDay(itemValue as DayType)}
        selectedValue={day}
      />
      {dayError && <ErrorText>{dayError}</ErrorText>}
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
              {opens || "__:__"}
            </Text>
            {opensError && <ErrorText>{opensError}</ErrorText>}
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
              {closes || "__:__"}
            </Text>
            {closesError && <ErrorText>{closesError}</ErrorText>}
          </FlexColumContainer>
        </Flex1>
      </FlexRowContainer>
      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Add"
            testID="addTradingTimeButton"
            onPress={() => {
              addOperatingTimeHandler();
            }}
            loading={addOperatingTimeLoading}
          />
        </ActionButtonContainer>
        <ActionButtonContainer>
          <GButton
            label="Cancel"
            onPress={hideDialog}
            testID="cancelAddTradingTimeButton"
            variant="cancel"
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
