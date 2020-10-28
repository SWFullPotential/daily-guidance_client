import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Liker from "./Liker";

const DeckList = ({ cards }) => {
  return (
    <div className="list">
      <ul>
        {cards.map((card) => (
          <li>
            <NavLink className="link" key={card.id} to={`/cards/${card.id}`}>
              {card.name}
            </NavLink>
            {/* <Liker /> */}
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
