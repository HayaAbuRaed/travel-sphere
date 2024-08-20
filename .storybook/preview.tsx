import type { Preview } from "@storybook/react";
import React from "react";
import TravelSphereThemeProvider from "../src/style/TravelSphereThemeProvider";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../src/cache/queryClient";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <TravelSphereThemeProvider>
            <Provider store={store}>
              <QueryClientProvider client={queryClient}>
                <Story />
              </QueryClientProvider>
            </Provider>
          </TravelSphereThemeProvider>
        </BrowserRouter>
      );
    },
  ],
};

export default preview;
