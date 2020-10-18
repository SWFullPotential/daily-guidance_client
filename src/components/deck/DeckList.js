import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const DeckList = ({ cards }) => {
  return (
    <div className="list">
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <NavLink className="link" key={card.id} to={`/cards/${card.id}`}>
              {card.name}
            </NavLink>
            <br />
            <br />
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
