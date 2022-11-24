import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { FlatList, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import { useFetchProviders } from "../../api/hooks/queries";
import { GErrorMessage, GSearch } from "../../components";
import { theme } from "../../utils/theme";
import { ProviderSummary } from "./components";
import {
  FlatListContainer,
  FlatListItemWrapper,
  HomeSafeAreaView,
} from "./styles";

export const Home: FC = () => {
  const [search, setSearch] = useState<string>("");
  const { providers, providersError, providersHasError, providersLoading } =
    useFetchProviders();

  return (
    <HomeSafeAreaView>
      {providersLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View>
            <GSearch
              testID="homeSearch"
              label="Search service provider"
              value={search}
              onTextChange={setSearch}
            />
          </View>
          <View>
            {providersHasError && <GErrorMessage message={providersError} />}
          </View>
          <FlatListContainer>
            <FlatList
              data={providers}
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
    </HomeSafeAreaView>
  );
};
