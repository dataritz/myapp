import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Rater from "./Rater";
import LikeComp from "./LikeComp";
let masterList = [
  {
    productname: "Mouse",
    url: "image/mouse.jpg",
    price: 500,
    disc: "Description of mouse",
    rating: 4,
  },
  {
    productname: "Keyboard",
    url: "image/keyboard.jpg",
    price: 500,
    disc: "Description of keyboard",
    rating: 3,
  },
  {
    productname: "Keyboard",
    url: "image/keyboard.jpg",
    price: 1500,
    disc: "Description of keyboard top mechnical keyboard",
    rating: 5,
  },
];

export default function Product() {
  return masterList.map((obj) => {
    return (
      <div className="col">
        <div className="card">
          <img
            src={obj.url}
            style={{ width: "50%" }}
            className="card-img-top mx-auto"
            alt="logo"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{obj.productname}</h5>
            <h5 className="card-title">{obj.price}</h5>
            <p className="card-text">{obj.disc}</p>
            <Rater rate={obj.rating} />
            <LikeComp />
          </div>
        </div>
      </div>
    );
  });
}
