import React, { FC } from "react";
import { ActivityIndicator, FlatList } from "react-native";

import {
  Container,
  Content,
  FlatListContainer,
  FlatListItemWrapper,
} from "./styles";
import { Service } from "./Service/Service";
import { useFetchServices } from "../../../../../../api/hooks/queries";
import { GErrorMessage } from "../../../../../../components";
import { theme } from "../../../../../../utils/theme";

export const Services: FC = () => {
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
          <FlatListContainer>
            <FlatList
              data={services}
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
  );
};
