import React from 'react';
import { useDispatch } from 'react-redux';
import Actions from './action';
import { withStyles } from '@material-ui/core';
import {DEFAULT_STYLES} from './constants';
import LoadingIcon from '../../components/LoadingIcon';
const styles = theme => DEFAULT_STYLES;

function LogIn({classes}) {
    return(
        <div>
            
        </div>
    )
}

export default withStyles(styles)(LogIn);