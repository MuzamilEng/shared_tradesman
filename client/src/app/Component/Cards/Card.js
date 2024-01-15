import React from "react";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <Link to="">
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc text-[1.2vw]">{card.desc}</span>
        <span className="title text-[1.3vw]">{card.title}</span>
      </div>
    </Link>
  );
}
export default Card;
