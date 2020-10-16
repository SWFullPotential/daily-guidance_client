import React from "react";

const RandCard = (props) => {
  if (props.card) {
    const randDirection = Math.floor(Math.random() * 100);
    const up = randDirection > 50 ? true : false;
    const display = up ? (
      <>
        <h4>Your card has been drawn up, which means:</h4>
        {props.card.meaning_up}
        <br />
      </>
    ) : (
      <>
        <h4>Your card has been drawn reversed, which means:</h4>
        {props.card.meaning_rev}
        <br />
      </>
    );

    return (
      <div>
        <h1>Your Daily Guidance</h1>
        <h4>Card Name:</h4>
        {props.card.name}
        <br />
        <h4>Card Type: </h4>
        {props.card.card_type}
        <br />
        <h4>Card Value:</h4>
        {props.card.value}
        <br />
        {display}
      </div>
    );
  } else {
    return <div>Please Draw A Card.</div>;
  }
};

export default RandCard;
