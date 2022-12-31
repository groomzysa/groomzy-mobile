import React, { FC, useState } from "react";
import PDFReader from "rn-pdf-reader-js";

import { API_BASE_URL } from "../../../config";
import { FlexRowEndContainer } from "../../utils/common/styles";
import { theme } from "../../utils/theme";

import { ContentContainer, TextStyled } from "./styles";

export const TsAndCs: FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState<boolean>(false);

  console.log(
    "http://192.168.9.124:4000/tsandcs/groomzy_ts_and_cs.pdf",
    `${API_BASE_URL}/tsandcs/groomzy_ts_and_cs.pdf`
  );
  return (
    <ContentContainer>
      <FlexRowEndContainer>
        <TextStyled onPress={() => setShowPrivacyPolicy(!showPrivacyPolicy)}>
          {!showPrivacyPolicy
            ? "Click here for Privacy Policy"
            : "Click here for Ts and Cs"}
        </TextStyled>
      </FlexRowEndContainer>
      {showPrivacyPolicy && (
        <PDFReader
          source={{
            uri: `${API_BASE_URL}/tsandcs/groomzy_privacy_policy.pdf`,
          }}
          webviewProps={{
            startInLoadingState: true,
            useWebView2: true,
            scalesPageToFit: true,
            scrollEnabled: true,
            textZoom: 100,
          }}
          withScroll
          customStyle={{
            readerContainerDocument: {
              backgroundColor: theme.colors.bg.primary,
              padding: 0,
              margin: 0,
            },
          }}
        />
      )}

      {!showPrivacyPolicy && (
        <PDFReader
          source={{
            uri: `${API_BASE_URL}/tsandcs/groomzy_ts_and_cs.pdf`,
          }}
          webviewProps={{
            startInLoadingState: true,
            useWebView2: true,
            scalesPageToFit: true,
            scrollEnabled: true,
            textZoom: 100,
          }}
          withScroll
          customStyle={{
            readerContainerDocument: {
              backgroundColor: theme.colors.bg.primary,
              padding: 0,
              margin: 0,
            },
          }}
        />
      )}
    </ContentContainer>
  );
};
