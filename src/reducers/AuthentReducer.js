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
        case 'CREATE_USER_ERROR': 
            return {
                ...state, 
                message: action.errors
            }
        case 'CREATE_SESSION':
            return {
                ...state, 
                logged_in: true, 
                user: action.user
            }
        case 'CREATE_SESSION_ERROR': 
            return {
                ...state, 
                message: action.errors
            }
        case 'DESTROY_SESSION': 
            return {
                ...state, 
                logged_in: false, 
                user: {}
            }
        default:
            return state
    }
}
