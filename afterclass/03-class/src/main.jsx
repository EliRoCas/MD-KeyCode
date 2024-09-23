import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Route from "./router/Route";
import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Route />
  </StrictMode>
);
