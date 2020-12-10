const initialState = {
    publicKey: null,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PUBLIC_KEY_SUCCESS':
            return ({
                ...state,
                publicKey: action.payload
            })
        default:
            return state;
    }
}

export default reducer;