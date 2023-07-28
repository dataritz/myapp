import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rater(props) {
  let r = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rate) r.push(<FontAwesomeIcon icon={faStar} color="green" />);
    else r.push(<FontAwesomeIcon icon={faStar} />);
  }

  return <div>{r}</div>;
}
