const deckURL = "http://localhost:3001/cards";

export const fetchCards = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING_CARDS" });
    fetch(deckURL)
      .then((response) => {
        return response.json();
      })
      .then((card) => {
        console.log(card);
        // dispatch({ type: "ADD_CARDS", cards: card });
      });
  };
};
