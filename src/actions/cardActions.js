export const fetchCards = () => {
  return (dispatch) => {
    fetch("https://warm-ridge-20834.herokuapp.com/cards")
      .then((response) => response.json())
      .then((cards) => dispatch({ type: "FETCH_CARDS", payload: cards }));
  };
};
