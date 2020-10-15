import React from "react";
import { connect } from "react-redux";
import NavBar from "../layouts/NavBar";

const Card = ({ card }) => {
  if (card) {
    return (
      <div>
        <NavBar />
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
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = (state, props) => {
  return {
    card: state.cards.find(
      (card) => props.match.params.id === card.id.toString()
    ),
  };
};

export default connect(mapStateToProps)(Card);
