import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchCards } from "../../actions/cardActions";
import NavBar from "../layouts/NavBar";
import RandCard from "./CardDraw";

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
      <div>
        <NavBar />
        <h1>Daily Reading</h1>
        <p>Take a deep breathe, center your mind and draw your card.</p>

        <button onClick={this.drawCard}>Draw Card</button>
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
