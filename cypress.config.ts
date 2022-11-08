import { defineConfig } from "cypress";
import webpackConfig from "./cypress/webpack.config";

export default defineConfig({
  viewportHeight: 740,
  viewportWidth: 360,
  component: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/components/**/*.{js,ts,jsx,tsx}",
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: "cypress/e2e/**/*.{js,ts,jsx,tsx}",
  },
});
