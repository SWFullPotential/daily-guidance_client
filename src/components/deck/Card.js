import React from "react";
import { connect } from "react-redux";

const Card = (id) => {
  let card = Card.findByProps(id);
  return (
    <div>
      {card.name}
      <br />
      {card.name_short}
      <br />
      {card.value}
      <br />
      {card.meaning_up}
      <br />
      {card.meaning_rev}
      <br />
      {card.card_type}
      <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps)(Card);
