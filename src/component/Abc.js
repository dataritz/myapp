import React from "react";
import { Gallery } from "./Gallery";
let m = ["image/logo.png", "image/crc.jpg", "image/crctraining.png"];
let x = [];
m.map((v) => {
  return x.push(<Gallery url={v} />);
});

export default function Abc() {
  return <div style={{ backgroundColor: "lightblue" }}>{x}</div>;
}
