import React from 'react'
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';
import {DEFAULT_STYLES} from './constants';
import { APP } from '../../config';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '../Dialog';
const styles = theme => DEFAULT_STYLES;

function Row({classes, title, isLargePoster, lists, isFetchingData}) {
    const isEmpty = (obj, title) => {
        for(var prop in obj) {
          if(obj.hasOwnProperty(prop)) {
            return false;
          }
        }
        return JSON.stringify(obj) === JSON.stringify({});
    }
    
    return (
        <div className={classes.rowRoot}>
            {/* <Dialog /> */}
            <h2>
                {title}
            </h2>
            <div className={classes.rowPosters}>
                {
                    isFetchingData || isEmpty(lists, title) ?
                        <CircularProgress className={classes.loadingIcon}/>
                    :
                    lists.results.map((data) => {
                        return(
                                <img
                                    className={ isLargePoster ? classes.rowPosterLarge : classes.rowPoster}
                                    key={data.id}
                                    src={`${APP.TMDBWebServices.netflixOriginalsImgBaseURL}${data.poster_path}`} 
                                    alt={data.name ? data.name : data.title}
                                />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withStyles(styles)(Row)
