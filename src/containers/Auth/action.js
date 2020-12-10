// const {Types, Creators} = createActions({
//     setSpeed: ['param'],
// });

// const Actions = {Types, Creators};
export const Actions = {
    setSpeed: (param) => {
        return {
            type: 'SET_SPEED',
            payload: param
        }
    },
}

export default Actions;
