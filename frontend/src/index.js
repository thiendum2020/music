import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import "./assets/styles/home.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
