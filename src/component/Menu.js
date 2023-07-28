import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavTop from "./NavTop";
import ProductDisplay from "./ProductDisplay";
import { Gallery } from "./Gallery";
import Java from "./Java";
export default function Menu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavTop />}>
          <Route index element={<ProductDisplay />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="java" element={<Java />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
