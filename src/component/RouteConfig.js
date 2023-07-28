import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductClass from "./ProductClass";
import About from "./About";
import NavLayout from "./NavLayout";
import Java from "./Java";
export default function RouteConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route path="product" element={<ProductClass />} />
          <Route path="about" element={<About />} />
          <Route path="java" element={<Java />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
