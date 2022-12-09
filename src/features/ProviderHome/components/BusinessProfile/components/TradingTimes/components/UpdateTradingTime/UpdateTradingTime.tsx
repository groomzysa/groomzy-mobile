import React, { FC, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { DayType } from "../../../../../../../../api/graphql/api.schema";
import {
  GBSelect,
  GButton,
  GSuccessMessage,
} from "../../../../../../../../components";
import { RootState } from "../../../../../../../../store/store";
import {
  Flex1,
  FlexColumContainer,
  FlexRowContainer,
  FlexRowEndContainer,
} from "../../../../../../../../utils/common/styles";
import { Space } from "../../../../styles";
import {
  useUpdateTradingTimeEffects,
  useUpdateTradingTimeHandlers,
} from "./hooks";
import { ActionButtonContainer } from "./styles";
import { IAddTradingTimeProps } from "./types";

export const UpdateTradingTime: FC<IAddTradingTimeProps> = ({
  operatingTime,
  visible,
  hideDialog,
}) => {
  const {
    homeProvider: { dayOptions },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);
  const { id: operatingTimeId } = operatingTime;

  const [day, setDay] = useState<DayType | undefined>(
    operatingTime.day as DayType
  );
  const [opens, setOpens] = useState<string>(operatingTime.opens as string);
  const [closes, setCloses] = useState<string>(operatingTime.closes as string);
  const [showOpens, setShowOpens] = useState<boolean>(false);
  const [showCloses, setShowCloses] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    closesPickerHandler,
    opensPickerHandler,
    updateOperatingTime,
    updateOperatingTimeError,
    updateOperatingTimeHandler,
    updateOperatingTimeHasError,
    updateOperatingTimeLoading,
  } = useUpdateTradingTimeHandlers({
    setShowCloses,
    setShowOpens,
    setCloses,
    setOpens,
  });

  useUpdateTradingTimeEffects({
    closesPickerHandler,
    opensPickerHandler,
    showCloses,
    showOpens,
    hideDialog,
    setCloses,
    setDay,
    setOpens,
    setSuccessMessage,
    successMessage,
    updateOperatingTime,
  });

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Update Trading Time</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {updateOperatingTimeHasError && (
        <GSuccessMessage message={updateOperatingTimeError} />
      )}
      <GBSelect
        items={dayOptions}
        label="Select day"
        onValueChange={(itemValue) => setDay(itemValue as DayType)}
        selectedValue={day}
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
              {opens || "__:__"}
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
              {closes || "__:__"}
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
            onPress={() => {
              updateOperatingTimeHandler({
                operatingTimeId,
                closes,
                day,
                opens,
              });
            }}
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
