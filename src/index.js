import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import ConfigureStore from "./redux/configureStore";

const store = ConfigureStore({
  Cart: "cart context",
  Fliter: "filter context",
  Products: "products context",
  User: "user context",
});
render(
  <React.StrictMode>
    <ReduxProvider store={store}>
        <App />
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
