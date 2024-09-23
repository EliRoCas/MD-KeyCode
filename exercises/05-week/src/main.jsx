import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OrderSummary from "./pages/OrderSummaryPage.jsx";
import "./styles/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrderSummary />
  </StrictMode>
);
