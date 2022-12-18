import React, { FC, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { useTradingSocialsEffects } from "./hooks";
import { Space } from "../../styles";
import { AddTradingSocial, TradingSocial } from "./components";
import { FlatList } from "react-native-gesture-handler";
import {
  AddButtonContainer,
  AddButtonText,
  TradingSocialContainer,
} from "./styles";
import { useFetchSocials } from "../../../../../../api/hooks/queries/useFetchSocials";

export const TradingSocials: FC = () => {
  const [addDialogVisible, setAddDialogVisible] = useState(false);

  /**
   *
   * Custom hooks
   *
   */
  const { socials } = useFetchSocials();

  useTradingSocialsEffects({
    socials,
  });

  const showAddDialogHandler = () => setAddDialogVisible(true);

  const hideAddDialogHandler = () => setAddDialogVisible(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          showAddDialogHandler();
        }}
      >
        <AddButtonContainer>
          {/* @ts-ignore */}
          <IconComponentProvider IconComponent={MaterialCommunityIcons}>
            <Icon name="plus" size={22} color={"white"} />
            <AddButtonText>Add</AddButtonText>
          </IconComponentProvider>
        </AddButtonContainer>
      </TouchableOpacity>
      <Space />
      <FlatList
        data={socials || []}
        style={{ height: 450 }}
        renderItem={({ item }) => (
          <TradingSocialContainer>
            <TradingSocial social={item} />
          </TradingSocialContainer>
        )}
      />

      <AddTradingSocial
        visible={addDialogVisible}
        hideDialog={hideAddDialogHandler}
      />
    </>
  );
};
