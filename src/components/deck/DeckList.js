import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const DeckList = ({ cards }) => {
  return (
    <div>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <NavLink key={card.id} to={`/cards/${card.id}`}>
              {card.name}
            </NavLink>
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
