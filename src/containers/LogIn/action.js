export const Actions = {
    setPublicKey: () => {
        return {
            type: 'SET_PUBLIC_KEY',
        }
    },
    setPublicKeySuccess: (param) => {
        return {
            type: 'SET_PUBLIC_KEY_SUCCESS',
            payload: param
        }
    },
}

export default Actions;