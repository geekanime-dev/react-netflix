const actionFile = (
`export const Actions = {
    setDefaultAction: (param) => {
        return {
            type: 'SET_DEFAULT_ACTION',
            payload: param
        }
    },
}

export default Actions;`
)

const reducerFile = (
`const initialState = {

}
    
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DEFAULT_ACTION':
        return ({
            ...state,
            })
        default:
            return state;
        }
    }

export default reducer;`
)

const constantsFile = (
`// import theme from '../../theme';

export const DEFAULT_STYLES = {
    root: {
        margin: 0,
    }
};`
)

const sagaFile = (
`import {takeLatest} from 'redux-saga/effects';

export function* makeSetDefaultAction() {
    //insert code here
}

export default function* defaultSaga() {
    yield takeLatest(Actions.setDefaultAction().type, makeSetDefaultAction);
}`
)

const indexFileStyled = (name) => {
    return (
`import React from 'react'
import { withStyles } from '@material-ui/core';
import {DEFAULT_STYLES} from './constants';
const styles = theme => DEFAULT_STYLES;

function ${name}({classes}) {
    return (
        <div>

        </div>
    )
}

export default withStyles(styles)(${name})`
    )
}

const indexFile = (name) => {
    return (
`import React from 'react'

function ${name}() {
    return (
        <div>
        
        </div>
    )
}
export default ${name}`
    )
}

module.exports = function files(name, withStyle){
    return ({
        action: actionFile,
        reducer: reducerFile,
        constants: constantsFile,
        saga: sagaFile,
        index: (withStyle.toUpperCase() === 'Y') ? indexFileStyled(name) : indexFile(name),
    })
}