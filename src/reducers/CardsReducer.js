const cardsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CARDS":
      return action.payload;
    // case "LOADING_CARDS":
    //   return {
    //     ...state,
    //     cards: [...state.cards],
    //     loading: true,
    //   };
    // case "ADD_CARDS":
    //   return {
    //     ...state,
    //     cards: action.cards,
    //     loading: false,
    //   };
    default:
      return state;
  }
};

export default cardsReducer;
