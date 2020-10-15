import React from "react";

// let direction = props.card.map(
//   (element) => (element.meaning_up, element.meaning_rev)
// );
// // debugger;
// const randDirection = direction[Math.floor(Math.random() * direction.length)];

const RandCard = (props) => {
  if (props.card) {
    return (
      <div>
        <h1>Your Daily Guidance</h1>
        {props.card.name}
        <br />
        {props.card.card_type}
        <br />
        {props.card.value}
        <br />
      </div>
    );
  } else {
    return <div>Please Draw A Card.</div>;
  }
};

export default RandCard;
