const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CARDS":
      return action.payload;

    default:
      return state;
  }
};

export default cardsReducer;
