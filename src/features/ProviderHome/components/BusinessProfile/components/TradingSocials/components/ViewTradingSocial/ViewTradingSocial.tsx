import React, { FC } from "react";
import { Text, View } from "react-native";
import Dialog from "react-native-dialog";
import { useSelector } from "react-redux";
import { GButton } from "../../../../../../../../components";
import { RootState } from "../../../../../../../../store/store";
import { FlexRowEndContainer } from "../../../../../../../../utils/common/styles";
import { Space } from "../../../../styles";
import { ActionButtonContainer } from "./styles";
import { IViewTradingSocialProps } from "./types";

export const ViewTradingSocial: FC<IViewTradingSocialProps> = ({
  visible,
  hideDialog,
}) => {
  const {
    homeProvider: { social },
  } = useSelector<RootState, Pick<RootState, "homeProvider">>((state) => state);

  return (
    <Dialog.Container visible={visible} onBackdropPress={hideDialog}>
      <Dialog.Title>View Trading Social</Dialog.Title>
      <View style={{ padding: 8 }}>
        <Text style={{ fontWeight: "500" }}>{social?.name}</Text>
      </View>
      <Space />
      <View style={{ padding: 8 }}>
        <Text>{social?.username}</Text>
      </View>
      <Space />
      <FlexRowEndContainer>
        <ActionButtonContainer>
          <GButton
            label="Done"
            testID="doneViewTradingSocialButton"
            onPress={hideDialog}
          />
        </ActionButtonContainer>
      </FlexRowEndContainer>
    </Dialog.Container>
  );
};
