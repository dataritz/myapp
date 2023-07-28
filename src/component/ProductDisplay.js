import React from "react";
import Product from "./Product";

export default function ProductDisplay() {
  return (
    <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3">
      <Product />
    </div>
  );
}
