import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import Products from "../pages/Products";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default AppRoutes;
