import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { useFetchProviders } from "../../api/hooks/queries";
import { GSearch, GTitle } from "../../components";
import { theme } from "../../utils/theme";
import { HomeSafeArea, ProviderSummary } from "./components";
import { FlatListContainer, FlatListItemWrapper } from "./styles";

export const Home: FC = () => {
  const { providers, providersError, providersHasError, providersLoading } =
    useFetchProviders();

  return (
    <>
      <HomeSafeArea>
        {providersLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <View>
              <GSearch testID="homeSearch" label="Search service provider" />
            </View>
            <View>
              {providersHasError && (
                <View>
                  <GTitle
                    title={providersError!.message ?? "Something is wrong"}
                  />
                </View>
              )}
            </View>
            <FlatListContainer>
              <FlatList
                data={providers}
                keyExtractor={(provider) => provider.id}
                renderItem={({ item: provider }) => (
                  <FlatListItemWrapper>
                    <ProviderSummary provider={provider} />
                  </FlatListItemWrapper>
                )}
                contentContainerStyle={{
                  padding: theme.spacing.container.xsmall,
                }}
              />
            </FlatListContainer>
          </>
        )}

        <StatusBar style="auto" />
      </HomeSafeArea>
    </>
  );
};
