import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCards } from "../../actions/cardActions";
import DeckList from "./DeckList";

class DeckContainer extends Component {
  componentDidMount() {
    this.props.fetchCards();
  }
  render() {
    return (
      <div className="text_center">
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
