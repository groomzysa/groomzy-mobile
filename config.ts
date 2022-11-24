import Constants from "expo-constants";
import { AppConfig } from "./app.config";

export const { API_BASE_URL } = Constants.manifest?.extra as AppConfig;
