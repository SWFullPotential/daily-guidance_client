import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Liker from "./Liker";
class DeckList extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
    // this.updateSearch = this.updateSearch.bind(this)
  }
  updateSearch = (e) => {
    // console.log(e.target.value);
    this.setState({ search: e.target.value });
  };
  render() {
    let filteredCards = this.props.cards.filter((card) => {
      return (
        card.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    //if you cannot find this.state.search within this particular card's  name, do not return it//
    //-1 means any value you cannot find//
    return (
      <div className="list">
        Search Cards:
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
          //onChange={this.updateSearch.bind.this}
        />
        <ul>
          {filteredCards.map((card) => (
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
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};
export default connect(mapStateToProps)(DeckList);
