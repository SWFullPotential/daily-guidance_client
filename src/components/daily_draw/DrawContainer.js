import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";
import RandCard from "./RandCard";

class DrawContainer extends Component {
  state = {
    card: null,
  };

  componentDidMount() {
    this.props.fetchCards();
  }

  drawCard = () => {
    let randCard = this.props.cards[
      Math.floor(Math.random() * this.props.cards.length)
    ];
    this.setState({ card: randCard });
  };

  render() {
    return (
      <div className="text_center">
        <h1>Daily Reading</h1>
        <p>Take a deep breathe, center your mind and draw your card.</p>

        <button className="button" onClick={this.drawCard}>
          Draw Card
        </button>
        <RandCard card={this.state.card} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};
export default connect(mapStateToProps, { fetchCards })(DrawContainer);
