import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";
import DeckList from "./DeckList";

class Deck extends Component {
  loadingState = () => {
    console.log(this.props.loading);
    if (this.props.loading) {
      return <div>Loading...</div>;
    } else {
      <DeckList deckCards={this.props.deckCards} />;
    }
  };

  render() {
    console.log(this.props.deckCards);
    return (
      <div>
        <h1>Tarot Cards</h1>
        {this.loadingState()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deckCards: state.cards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchCards: () => dispatch(fetchCards()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
