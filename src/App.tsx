import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC } from "react";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import queryClient from "./cache/queryClient";
import Snackbar from "./components/Snackbar";
import AppRoutes from "./Routes/AppRoutes";

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />

      <Snackbar />

      <ReactQueryDevtools
        initialIsOpen={false}
        position="right"
        buttonPosition="bottom-right"
      />
    </QueryClientProvider>
  );
};

export default App;
