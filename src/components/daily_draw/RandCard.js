import React from "react";

const RandCard = (props) => {
  if (props.card) {
    let image = "/deckImages/" + props.card.name_short + ".png";
    const randDirection = Math.floor(Math.random() * 100);
    const up = randDirection > 50 ? true : false;
    const display = up ? (
      <>
        <h4>Your card has been drawn up, which means:</h4>
        <p>{props.card.meaning_up}</p>
        <img src={image} />
        <br />
      </>
    ) : (
      <>
        <h4>Your card has been drawn reversed, which means:</h4>
        <p>{props.card.meaning_rev}</p>
        <img src={image} className="rotate-image" />
        <br />
      </>
    );

    return (
      <div>
        <h1>Your Daily Guidance</h1>
        <h4>Card Name:</h4>
        <p>{props.card.name}</p>
        <br />
        <h4>Card Type: </h4>
        <p>{props.card.card_type}</p>
        <br />
        <h4>Card Value:</h4>
        <p>{props.card.value}</p>
        <br />
        {display}
      </div>
    );
  } else {
    return <div>Please Draw A Card.</div>;
  }
};

export default RandCard;