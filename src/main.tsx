import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import store from "./store";
import TravelSphereThemeProvider from "./style/TravelSphereThemeProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <BrowserRouter>
    <TravelSphereThemeProvider>
      <Routes>
        <Route
          path="/*"
          element={
            <Provider store={store}>
              <App />
            </Provider>
          }
        />
      </Routes>
    </TravelSphereThemeProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
