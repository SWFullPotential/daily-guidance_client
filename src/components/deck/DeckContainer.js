import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";
import DeckList from "./DeckList";
import NavBar from "../layouts/NavBar";

class DeckContainer extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Tarot Cards</h1>
        <DeckList />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return { fetchCards: () => dispatch(fetchCards()) };
// };

export default connect(null, { fetchCards })(DeckContainer);
