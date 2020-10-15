export const fetchCards = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/cards")
      .then((response) => response.json())
      .then((cards) => dispatch({ type: "FETCH_CARDS", payload: cards }));
  };
};
