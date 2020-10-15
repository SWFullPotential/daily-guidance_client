import React, { Component } from "react";
import { connect } from "react-redux";

// // class DeckList extends Component {
// //   debugger;
// //   listDeckCards = ({ cards }) => {
// //     return cards.map((card) => <li key={card.id}>{card.name}</li>);
// //   };
// //   render() {
// //     return <div>{this.listDeckCards()}</div>;
// //   }
// // }
// // const mapStateToProps = (state) => {
// //   return {
// //     cards: state.cards,
// //   };
// // };
// // export default connect(mapStateToProps)(DeckList);
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
