export const fetchCards = () => {
  return (dispatch) => {
    fetch("https://daily-guidance.herokuapp.com/cards")
      .then((response) => response.json())
      .then((cards) => dispatch({ type: "FETCH_CARDS", payload: cards }));
  };
};
