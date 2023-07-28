import React from "react";
import RateClass from "./RateClass";
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
    productname: "Router",
    url: "image/router.jpg",
    price: 2340,
    disc: "AC 1200 Mbps WAVE 2 Concurrent dual band wireless Router with 4 High gain Omni Antenna;802.11 a/b/g/n/ac standards with speed of 300 Mbps",
    rating: 4,
  },
  {
    productname: "Fire Stick",
    url: "image/fire.jpg",
    price: 6000,
    disc: "Latest generation of our best-selling Fire TV device - 50% more powerful than the 2nd generation for fast streaming in Full HD. Includes Alexa Voice Remote with power and volume buttons.",
    rating: 5,
  },
];

export default function ProductClass() {
  return masterList.map((prod) => {
    return (
      <div className="col mt-2">
        <div className="card">
          <img
            src={prod.url}
            style={{ width: "40%" }}
            className="card-img-top mx-auto"
            alt="logo"
          />
          <div className="card-body text-center">
            <h5 className="card-title">{prod.productname}</h5>
            <h5 className="card-title">{prod.price}</h5>
            <p className="card-text">{prod.disc}</p>
            <RateClass rating={prod.rating} />
          </div>
        </div>
      </div>
    );
  });
}
