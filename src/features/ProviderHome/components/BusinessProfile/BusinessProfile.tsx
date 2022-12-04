import React, { FC, useState } from "react";
import { Container, Content, Space } from "./styles";
import { useFetchProvider } from "../../../../api/hooks/queries";
import { ActivityIndicator, Divider } from "react-native-paper";
import { GButton, GErrorMessage } from "../../../../components";
import { BusinessAddress, BusinessDetails } from "./components";
import { useBusinessProfileHandlers } from "./hooks";
import { Flex1, FlexRowContainer } from "../../../../utils/common/styles";

export const BusinessProfile: FC = () => {
  const [showBusinessDetails, setShowBusinessDetails] = useState<boolean>(true);
  const [showAddressDetails, setShowAddressDetails] = useState<boolean>(false);

  /**
   *
   * Custom hooks
   *
   */
  const { provider, providerLoading, providerHasError, providerError } =
    useFetchProvider();

  const { showAddressDetailsHandler, showBusinessDetailsHandler } =
    useBusinessProfileHandlers();

  return (
    <Container>
      {providerLoading ? (
        <ActivityIndicator />
      ) : (
        <Content>
          <FlexRowContainer>
            <Flex1>
              <GButton
                label="Trading Info"
                variant={showBusinessDetails ? "secondary" : "primary"}
                onPress={() =>
                  showBusinessDetailsHandler({
                    setShowAddressDetails,
                    setShowBusinessDetails,
                  })
                }
                // disabled={!showBusinessDetails}
              />
            </Flex1>
            <Flex1>
              <GButton
                label="Trading Address"
                variant={showAddressDetails ? "secondary" : "primary"}
                onPress={() =>
                  showAddressDetailsHandler({
                    setShowAddressDetails,
                    setShowBusinessDetails,
                  })
                }
                // disabled={!showAddressDetails}
              />
            </Flex1>
          </FlexRowContainer>
          {providerHasError && <GErrorMessage message={providerError} />}
          {showBusinessDetails && <BusinessDetails provider={provider} />}
          {showAddressDetails && (
            <BusinessAddress address={provider?.addresses?.[0]} />
          )}
        </Content>
      )}
    </Container>
  );
};
