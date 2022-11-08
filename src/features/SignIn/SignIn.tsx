import React, { FC } from "react";
import { GButton, GRadioButton, GTextInput } from "../../components";
import { Container, TextStyled, SignInContent } from "./styles";
import { SignInProps } from "./types";

export const SignIn: FC<SignInProps> = ({ navigation, route }) => {
  return (
    <Container>
      <SignInContent>
        <GTextInput testID="email" label="email" />
        <GTextInput testID="password" label="password" secureTextEntry />
        <GRadioButton label="Service provider?" />
        <GButton label="Sing in" />
        <TextStyled>Forgot password?</TextStyled>
        <TextStyled
          onPress={() => {
            navigation.navigate("Sign up");
          }}
        >
          Not yet joined?
        </TextStyled>
      </SignInContent>
    </Container>
  );
};
