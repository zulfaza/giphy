import { StrictMode } from "react";
import ReactDOM from "react-dom";
import AppProviders from "core/context";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppProviders>
    <App />
    </AppProviders>
  </StrictMode>,
  rootElement
);
