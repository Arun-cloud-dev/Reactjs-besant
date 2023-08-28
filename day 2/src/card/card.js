import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
};

export default Card;
