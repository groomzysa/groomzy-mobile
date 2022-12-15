import React, { FC } from "react";
import { Text, View } from "react-native";
import Dialog from "react-native-dialog";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useSelector } from "react-redux";
import { GButton } from "../../../../../../../../components";
import { RootState } from "../../../../../../../../store/store";
import { FlexRowEndContainer } from "../../../../../../../../utils/common/styles";
import { Space } from "../../../../styles";
import { ActionButtonContainer } from "./styles";
import { IViewTradingTimeProps } from "./types";

export const ViewTradingTime: FC<IViewTradingTimeProps> = ({
  visible,
  hideDialog,
}) => {
  const {
    homeProvider: { operatingTime },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>Viw Trading Time</Dialog.Title>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: "500" }}>{operatingTime?.day}</Text>
      </View>
      <Space />
      <View
        style={{ flexDirection: "row", alignItems: "baseline", padding: 10 }}
      >
        <Ionicons name="calendar-outline" size={22} />
        <Text
          style={{ paddingLeft: 5 }}
        >{`Opens at ${operatingTime?.opens}`}</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "baseline", padding: 10 }}
      >
        <Ionicons name="calendar-outline" size={22} />
        <Text
          style={{ paddingLeft: 5 }}
        >{`Closes at ${operatingTime?.closes}`}</Text>
      </View>
      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Done"
            testID="doneViewTradingTimeButton"
            onPress={hideDialog}
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
