import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TravelSphereThemeProvider from "./style/TravelSphereThemeProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <TravelSphereThemeProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </TravelSphereThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
