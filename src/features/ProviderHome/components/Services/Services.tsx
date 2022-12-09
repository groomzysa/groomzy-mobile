import React, { FC } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";

import {
  Container,
  Content,
  AddButtonContainer,
  AddButtonText,
  FlatListContainer,
  FlatListItemWrapper,
} from "./styles";
import { Service } from "./Service/Service";
import { Icon, IconComponentProvider } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { AddService } from "./AddService/AddService";
import { useFetchServices } from "../../../../api/hooks/queries";
import { GErrorMessage } from "../../../../components";
import { theme } from "../../../../utils/theme";

export const Services: FC = () => {
  const [addDialogVisible, setAddDialogVisible] = React.useState(false);

  /**
   *
   * Custom hooks
   *
   */
  const { services, servicesError, servicesHasError, servicesLoading } =
    useFetchServices();

  /**
   *
   * Handlers
   *
   */
  const showAddDialogHandler = () => setAddDialogVisible(true);

  const hideAddDialogHandler = () => setAddDialogVisible(false);

  return (
    <>
      <Container>
        {servicesLoading ? (
          <ActivityIndicator />
        ) : (
          <Content>
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
            {servicesHasError && <GErrorMessage message={servicesError} />}
            <FlatListContainer>
              <FlatList
                data={services || []}
                renderItem={({ item: service }) => (
                  <FlatListItemWrapper>
                    <Service service={service} />
                  </FlatListItemWrapper>
                )}
                contentContainerStyle={{
                  padding: theme.spacing.container.xsmall,
                }}
              />
            </FlatListContainer>
          </Content>
        )}
      </Container>

      <AddService
        visible={addDialogVisible}
        hideDialog={hideAddDialogHandler}
      />
    </>
  );
};
