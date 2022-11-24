import React from "react";
import { registerRootComponent } from "expo";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import {
  Oswald_400Regular,
  useFonts as useOswald,
} from "@expo-google-fonts/oswald";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import buffer from "buffer";

import { GNavigation } from "./src/components/GNavigation";
import { theme } from "./src/utils/theme";
import { store } from "./src/store/store";

global.Buffer = buffer.Buffer;

function App() {
  const [aswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!aswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <GNavigation />
        </ReduxProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

registerRootComponent(App);

export default App;
