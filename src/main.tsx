import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TravelSphereThemeProvider from "./style/TravelSphereThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TravelSphereThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TravelSphereThemeProvider>
);
