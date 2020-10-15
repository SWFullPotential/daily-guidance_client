import React, { Component } from "react";
import { connect } from "react-redux";

const DeckList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <ul>
          <li key={card.id}>{card.name}</li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(DeckList);
