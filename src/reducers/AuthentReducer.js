const initialState = {
    logged_in: false, 
    message: '', 
    user: {}
}

const authentReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_USER':
            return {
                ...state, 
                logged_in: true, 
                user: action.user
            }
        case 'LOGOUT_USER': 
            return {
                ...state, 
                logged_in: false, 
                user: {}
            }
        default:
            return state
    }
}
