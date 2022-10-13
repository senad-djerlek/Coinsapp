import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./common/context";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppContextProvider>
        <Toaster position="bot-left" reverseOrder="true" />
        <App />
      </AppContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
