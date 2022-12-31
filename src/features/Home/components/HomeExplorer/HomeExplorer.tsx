import React, { FC } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { GErrorMessage, GSearch } from "../../../../components";
import { theme } from "../../../../utils/theme";
import { ProviderSummary } from "../ProviderSummary/ProviderSummary";
import { useHomeExplorerHandlers } from "./hooks";
import {
  FlatListContainer,
  FlatListItemWrapper,
  HomeExplorerContainer,
  SearchContainer,
} from "./styles";
import { IHomeExplorerProps } from "./types";

export const HomeExplorer: FC<IHomeExplorerProps> = ({ navigation }) => {
  /**
   *
   * Custom hooks
   *
   */
  const {
    providers,
    providersError,
    providersHasError,
    providersLoading,
    searchTmp,
    searchTmpHandler,
    refetchProviders,
    refetchProvidersHandler,
  } = useHomeExplorerHandlers();

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
              value={searchTmp}
              onTextChange={searchTmpHandler}
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
              onRefresh={() => refetchProvidersHandler(true)}
              refreshing={refetchProviders}
            />
          </FlatListContainer>
        </>
      )}
    </HomeExplorerContainer>
  );
};
