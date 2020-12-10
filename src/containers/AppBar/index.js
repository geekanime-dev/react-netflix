import React, { useEffect, useState } from 'react';
import { withStyles, withWidth, Hidden, IconButton, Button, TextField, InputAdornment } from '@material-ui/core';
import {DEFAULT_STYLES} from './constants';
import netflixLogs from '../../images/netflixLogo.png';
import avatarIcon from '../../images/avatarIcon.png';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";
const styles = theme => DEFAULT_STYLES;

function AppNavBar({classes}) {
    const [showAppBar, setShowAppBar] = useState(false);
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const history = useHistory();
    const handleSearchOnClick = () => {
        setIsSearchClicked(!isSearchClicked)
    }

    const handleClickNavigationButtons = (pageUrl) => {
        history.push(pageUrl);
    }

    useEffect(()=> {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowAppBar(true)
            } else {
                setShowAppBar(false)
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, [])

    return (
        <div className={classes.root} style={showAppBar ? {backgroundColor: '#111'} : {backgroundColor: null}}>
            <Hidden mdUp>
                <IconButton className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll}>
                    <MenuIcon />
                </IconButton>
            </Hidden>
            <img src={netflixLogs} className={classes.logo} alt="Logo" />
            <Hidden smDown>
                <Button className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll} onClick={() => handleClickNavigationButtons('/')}>Home</Button>
                <Button className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll} onClick={() => handleClickNavigationButtons('/tvshows')}>TV Shows</Button>
                <Button className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll} onClick={() => handleClickNavigationButtons('/movies')}>Movies</Button>
                <Button className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll} onClick={() => handleClickNavigationButtons('/latest')}>Latest</Button>
                {/* <Button className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll} onClick={() => handleClickNavigationButtons('/mylist')}>My List</Button> */}
                <div className={classes.navigationRight}>
                {
                    isSearchClicked ?
                    <TextField
                        InputProps={{
                            disableUnderline: true,
                            style: {
                            color: '#111',
                            borderRadius: '10px',
                            backgroundColor: '#e6e6e6',
                            height: '100%',
                            padding: '5px',
                            },
                            startAdornment: (
                                <InputAdornment position="start">
                                   <IconButton onClick={handleSearchOnClick}>
                                       <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                              ),
                        }}
                    />
                    :
                    <IconButton className={!showAppBar ? classes.navigationButtons : classes.navigationButtonsOnScroll} onClick={handleSearchOnClick}><SearchIcon /></IconButton>
                }
                <img src={avatarIcon} className={classes.avatarStyle} />
                </div>
                
            </Hidden>
        </div>
    )
}

export default withStyles(styles)(withWidth()(AppNavBar))
