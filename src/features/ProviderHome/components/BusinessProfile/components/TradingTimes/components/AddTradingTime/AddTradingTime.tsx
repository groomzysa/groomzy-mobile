import React, { FC, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { DayType } from "../../../../../../../../api/graphql/api.schema";
import {
  GBSelect,
  GButton,
  GErrorMessage,
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
import { useAddTradingTimeEffects, useAddTradingTimeHandlers } from "./hooks";
import { ActionButtonContainer, ErrorText } from "./styles";
import { IAddTradingTimeProps } from "./types";

export const AddTradingTime: FC<IAddTradingTimeProps> = ({
  visible,
  hideDialog,
}) => {
  const {
    homeProvider: { dayOptions },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  const [day, setDay] = useState<DayType>();
  const [dayError, setDayError] = useState<string>("");
  const [opens, setOpens] = useState<string>("");
  const [opensError, setOpensError] = useState<string>("");
  const [closes, setCloses] = useState<string>("");
  const [closesError, setClosesError] = useState<string>("");
  const [showOpens, setShowOpens] = useState<boolean>(false);
  const [showCloses, setShowCloses] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  /**
   *
   * Custom hooks
   *
   */
  const {
    addOperatingTime,
    addOperatingTimeError,
    addOperatingTimeHasError,
    addOperatingTimeLoading,
    addOperatingTimeHandler,
    closesPickerHandler,
    opensPickerHandler,
  } = useAddTradingTimeHandlers({
    setShowCloses,
    setShowOpens,
    setCloses,
    setOpens,
  });

  useAddTradingTimeEffects({
    addOperatingTime,
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
  });

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Add Trading Time</Dialog.Title>
      {successMessage && <GSuccessMessage message={successMessage} />}
      {addOperatingTimeHasError && (
        <GErrorMessage message={addOperatingTimeError} />
      )}
      <GBSelect
        items={dayOptions}
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
              addOperatingTimeHandler({
                closes,
                closesError,
                day,
                dayError,
                opens,
                opensError,
                setClosesError,
                setDayError,
                setOpensError,
              });
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
