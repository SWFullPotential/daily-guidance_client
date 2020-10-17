import React from "react";
import { connect } from "react-redux";
import NavBar from "../layouts/NavBar";
import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
  if (card) {
    return (
      <div className="card">
        <NavLink className="link" to="/cards">
          All Cards
        </NavLink>
        <h3>Name:</h3>
        <p>{card.name}</p>
        <br />
        <h3>Name Short:</h3>
        <p>{card.name_short}</p>
        <br />
        <h3>Card Value:</h3>
        <p>{card.value}</p>
        <br />
        <h3>Meaning Up:</h3>
        <p>{card.meaning_up}</p>
        <br />
        <h3>Meaning Reversed:</h3>
        <p>{card.meaning_rev}</p>
        <h3>Card Type:</h3>
        <p>{card.card_type}</p>
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
