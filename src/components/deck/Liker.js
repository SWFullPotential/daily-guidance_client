import React, { Component } from "react";

export class Liker extends Component {
  state = {
    likes: 0,
  };

  handleLike = (e) => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleLike}>Like</button>
        <p>{this.state.likes}</p>
      </>
    );
  }
}

export default Liker;
