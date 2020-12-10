import React from 'react'
import { useSelector } from 'react-redux';
import { withStyles, Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@material-ui/core';
import {DEFAULT_STYLES} from './constants';
import { APP } from '../../config';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CircularProgress from '@material-ui/core/CircularProgress';
const styles = theme => DEFAULT_STYLES;

function DialogComponent({classes, title, videoLink}) {
    return (
        <div>
            <Dialog
                open={true}
                PaperProps={{
                    style: {
                    backgroundColor: '#111',
                    color: 'transparent',
                    boxShadow: 'none',
                    },
                }}
                BackdropProps={{
                    style: {
                        backgroundColor: 'transparent',
                        color: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
                <DialogTitle>
                    <Typography>Modal title</Typography>
                    <IconButton className={classes.closeButton}>
                        <CancelOutlinedIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent dividers>
                    <iframe src='https://omni.metrobank.ph/dev/mbx/signin' ></iframe>
                </DialogContent>
        </Dialog>
        </div>
    )
}

export default withStyles(styles)(DialogComponent)
