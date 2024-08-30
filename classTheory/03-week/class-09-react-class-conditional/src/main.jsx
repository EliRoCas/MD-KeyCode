import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomeClass from "./pages/HomeClass.jsx";
import HomeConditional from "./pages/HomeConditional.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HomeClass /> */}
    <HomeConditional />
  </StrictMode>
);
