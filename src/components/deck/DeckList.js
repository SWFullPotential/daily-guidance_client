import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const DeckList = ({ cards }) => {
  return (
    <div>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link key={card.id} to={`/cards/${card.id}`}>
              {card.name}
            </Link>
          </li>
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
