import React, { useEffect, useState } from 'react'
import { withStyles, Button } from '@material-ui/core';
import {DEFAULT_STYLES} from './constants';
import CircularProgress from '@material-ui/core/CircularProgress';
import { APP } from '../../config';
import fetchAPI from '../../API/API';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useLocation } from "react-router-dom";
const styles = theme => DEFAULT_STYLES;

function Banner({classes}) {
    const [movieBanner, setMovieBanner] = useState(null);
    const truncate = (input, limit) => input.length > limit ? `${input.substring(0, limit)}...` : input;
    const location = useLocation();

    async function getBanner() {
        switch(location.pathname) {
            case '/tvshows': {
                setMovieBanner(null)
                return await (fetchAPI.tvShowServices.fetchTVShows())
            }
            case '/movies': {
                setMovieBanner(null)
                return await (fetchAPI.movieServices.fetchMovies())
            }
            case '/latest': {
                setMovieBanner(null)
                return await (fetchAPI.latestServices.fetchTrending())
            }
            default : return await (fetchAPI.homeServices.fetchNetflixOriginals())
        }
    }

    useEffect(()=> {
        async function getNeflixOriginalsByOne() {
            getBanner().then((response) => {
                new Promise((resolve, reject) => {
                    resolve(response.data.results[Math.floor(Math.random() * response.data.results.length)])
                }).then((data) => {
                    setMovieBanner(data)
                })
            })
        }
        getNeflixOriginalsByOne();
    }, [location.pathname])
    
    return (
        <div className={classes.banner} style={ movieBanner ? {backgroundImage: `url(${APP.TMDBWebServices.netflixOriginalsImgBaseURL}${movieBanner.backdrop_path})`} : {}}>
            <div className={classes.bannerContents}>
                    { 
                    movieBanner 
                    ?
                    <div className={classes.bannerContentContainer}>
                        <div className={classes.bannerTitle}>
                            {movieBanner.name ? movieBanner.name : movieBanner.title}
                        </div>
                        <div className={classes.bannerButtons}>
                            {/* Buttons */}
                            <Button className={classes.bannerButton}>
                                Play
                            </Button>
                            <Button className={classes.bannerButton}>
                                <InfoOutlinedIcon />&nbsp; More Info
                            </Button>
                        </div>
                        <div className={classes.bannerDescription}>
                            {/* Description */}
                            {truncate(movieBanner.overview, 300)}
                        </div>
                    </div>  
                    :
                    <CircularProgress className={classes.loadingIcon} />
                    }
                </div>
            <div className={classes.bottomFade}/>
        </div>
    )
}

export default withStyles(styles)(Banner)
