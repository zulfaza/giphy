import store from "../redux/store";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router>{children}</Router>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default AppProviders;
