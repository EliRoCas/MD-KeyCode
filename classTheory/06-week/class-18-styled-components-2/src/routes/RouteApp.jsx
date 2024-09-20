import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteApp;
