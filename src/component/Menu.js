import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavTop from "./NavTop";
import ProductDisplay from "./ProductDisplay";
import { Gallery } from "./Gallery";
import LikeComp from "./LikeComp";
import Viewtodo from "./Viewtodo";
import Counter from "./Counter";
export default function Menu() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavTop />}>
          <Route index element={<ProductDisplay />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="product" element={<ProductDisplay />} />
          <Route path="like" element={<LikeComp count="200" />} />
          <Route path="to-doapp" element={<Viewtodo />} />
          <Route path="counter" element={<Counter count="10" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
