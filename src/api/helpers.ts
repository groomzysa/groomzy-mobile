import AsyncStorage from "@react-native-async-storage/async-storage";
import { SerializedError } from "@reduxjs/toolkit";
import { ErrorResponse } from "@rtk-query/graphql-request-base-query/dist/GraphqlBaseQueryTypes";

export const getErrorMessage = (
  error: ErrorResponse | SerializedError | undefined
): string | undefined => error?.message?.split(": {")?.[0];

export const storeToken = async (token: string) => {
  try {
    await AsyncStorage.setItem("@token", token);
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem("@token");
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("@token");
    return token || "";
  } catch (error) {
    return;
  }
};
