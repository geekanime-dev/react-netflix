import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './action';

function Auth() {
    const dispatch = useDispatch();
    dispatch(Actions.setSpeed(10));
    const reduxStore = useSelector(state => state);

    console.log(reduxStore)
    return(
        <div>
            Hello World!
        </div>
    )
}

export default Auth;