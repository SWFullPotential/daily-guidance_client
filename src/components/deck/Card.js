import React from "react";
import { connect } from "react-redux";
import NavBar from "../layouts/NavBar";
import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  if (card) {
    return (
      <div>
        <NavBar />
        <NavLink to="/cards">All Cards</NavLink>
        <h4>Name:</h4>
        {card.name}
        <br />
        <h4>Name Short:</h4>
        {card.name_short}
        <br />
        <h4>Card Value:</h4>
        {card.value}
        <br />
        <h4>Meaning Up:</h4>
        {card.meaning_up}
        <br />
        <h4>Meaning Reversed:</h4>
        {card.meaning_rev}
        <br />
        <h4>Card Type::</h4>
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
