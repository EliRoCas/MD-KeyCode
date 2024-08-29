import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Form from "./pages/Form";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Form />
  </StrictMode>
);
