import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { ContactsProvider } from "./contexts/contactsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
