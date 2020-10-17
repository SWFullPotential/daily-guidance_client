import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";
import DeckList from "./DeckList";
import NavBar from "../layouts/NavBar";
import Box from "@material-ui/core/Box";

class DeckContainer extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }
  render() {
    return (
      <div>
        <h1>Tarot Cards</h1>
        <DeckList className="card" />
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return { fetchCards: () => dispatch(fetchCards()) };
// };

export default connect(null, { fetchCards })(DeckContainer);
