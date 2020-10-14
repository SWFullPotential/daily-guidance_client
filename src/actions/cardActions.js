export const fetchCards = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CARDS'});
        fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/')
        .then(response => {
            return response.json()
        })
        .then(card => dispatch({type: 'ADD_CARDS', cards: card}))
    }
}
