import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.scss";
import App from "./routes/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
