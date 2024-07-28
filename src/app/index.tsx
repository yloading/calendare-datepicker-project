import React from "react";
import { createRoot } from "react-dom/client";
import "../assets/css/index.css";
import "../assets/css/header.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";

const container = document.getElementById("app-root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
