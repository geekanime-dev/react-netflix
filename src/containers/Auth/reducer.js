const initialState = {
    speed: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SPEED':
            return ({
                ...state,
                speed: action.payload
            })
        default:
            return state;
    }
}
// const doSetUserSuccess = (state, { param }) => {
//     return state.merge({
//         userLogged: !state.userLogged,
//     })
// }

// export const reducer = createReducer(INITIAL_STATE, {
//     [Actions.Types.SET_USER]: doSetUser,
//     [Actions.Types.SET_USER_SUCCESS]: doSetUserSuccess,
// })


export default reducer;