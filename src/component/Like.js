import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
export default function Like(props) {
  const [c, setC] = useState(null);
  const [likecount, setlikecount] = useState(parseInt(props.count));
  function onclick() {
    if (c === "green") {
      setC("black");
      setlikecount(likecount - 1);
    } else {
      setC("green");
      setlikecount(likecount + 1);
    }
  }

  return (
    <div>
      <span>{likecount}</span>
      <FontAwesomeIcon
        className="ms-3"
        icon={faThumbsUp}
        color={c}
        onClick={onclick}
      />
    </div>
  );
}
