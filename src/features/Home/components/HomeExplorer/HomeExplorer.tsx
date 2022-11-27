import React, { FC, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { useFetchProviders } from "../../../../api/hooks/queries";
import { GErrorMessage, GSearch } from "../../../../components";
import { theme } from "../../../../utils/theme";
import { ProviderSummary } from "../ProviderSummary/ProviderSummary";
import {
  FlatListContainer,
  FlatListItemWrapper,
  HomeExplorerContainer,
  SearchContainer,
} from "./styles";
import { IHomeExplorerProps } from "./types";

export const HomeExplorer: FC<IHomeExplorerProps> = ({ navigation }) => {
  const [search, setSearch] = useState<string>("");
  const { providers, providersError, providersHasError, providersLoading } =
    useFetchProviders();

  return (
    <HomeExplorerContainer>
      {providersLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <SearchContainer>
            <GSearch
              testID="homeSearch"
              label="Search service provider"
              value={search}
              onTextChange={setSearch}
            />
          </SearchContainer>
          {providersHasError && <GErrorMessage message={providersError} />}
          <FlatListContainer>
            <FlatList
              data={providers}
              renderItem={({ item: provider }) => (
                <FlatListItemWrapper>
                  <ProviderSummary
                    provider={provider}
                    navigation={navigation}
                  />
                </FlatListItemWrapper>
              )}
              contentContainerStyle={{
                padding: theme.spacing.container.xsmall,
              }}
            />
          </FlatListContainer>
        </>
      )}
    </HomeExplorerContainer>
  );
};
