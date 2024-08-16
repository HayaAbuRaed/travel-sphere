import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import queryClient from "../cache/queryClient";
import store from "../store";
import TravelSphereThemeProvider from "../style/TravelSphereThemeProvider";

const TestProviders: FC<PropsWithChildren> = ({ children }) => {
  return (
    <BrowserRouter>
      <TravelSphereThemeProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </TravelSphereThemeProvider>
    </BrowserRouter>
  );
};

export default TestProviders;
