import React, { FC } from "react";
import { ActivityIndicator, Text } from "react-native";

import { Container, Content, MapViewContainer } from "./styles";
import { useFetchServices } from "../../../../../../api/hooks/queries";
import { GErrorMessage } from "../../../../../../components";
import { theme } from "../../../../../../utils/theme";

export const Details: FC = () => {
  /**
   *
   * Custom hooks
   *
   */
  const { services, servicesError, servicesHasError, servicesLoading } =
    useFetchServices();

  return (
    <Container>
      {servicesLoading ? (
        <ActivityIndicator />
      ) : (
        <Content>
          {servicesHasError && <GErrorMessage message={servicesError} />}
          <MapViewContainer
            initialRegion={{
              latitude: -28.4792625,
              longitude: 24.6727135,
              latitudeDelta: 10,
              longitudeDelta: 10,
            }}
          />
          <Text>Day times</Text>
        </Content>
      )}
    </Container>
  );
};
