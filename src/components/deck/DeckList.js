import React from "react";
import { connect } from "react-redux";

const DeckList = ({ cards }) => {
  return (
    <div>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(DeckList);
