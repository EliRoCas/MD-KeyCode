import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalLayout from "../pages/layouts/GlobalLayout";

import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Store from "../pages/public/Store";

import Login from "../pages/users/Login";
import Dashboard from "../pages/users/Dashboard";
import Edit from "../pages/users/Edit";
import Register from "../pages/users/Register";

import ProductDashboard from "../pages/products/ProductDashboard";
import EditProduct from "../pages/products/EditProduct";
import Create from "../pages/products/Create";

import NotFound from "../NotFound";

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GlobalLayout />}> {" "}{/* path -> group root / Element -> Layout */}
          <Route index element={<Home />} />{" "} {/* index -> root (path) / Element -> Page */}
          <Route path="about" element={<About />} />
          <Route path="store" element={<Store />} />
        </Route>
        <Route path="/user" element={<GlobalLayout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="edit" element={user ? <Edit /> : <Home/>} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/products" element={<GlobalLayout />}>
          <Route index element={<ProductDashboard />} />
          <Route path="edit" element={<EditProduct />} />
          <Route path="create" element={<Create />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
