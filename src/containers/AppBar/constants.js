import theme from '../../theme';
const netflixLogo = require('../../images/netflixLogo.png')

export const DEFAULT_STYLES = {
  root: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    backgroundImage: 'linear-gradient(#111, transparent)',
    display: 'flex',
    padding: '5px 0px 0px 20px',
  },
  logo: {
    zoom: '50%',
  },
  navigationBar: {
    display: 'flex',
    alignItems: 'center',
  },
  navigationButtons: {
    padding: '0px 10px',
    color: '#fff',
    '&:hover': {
      color: '#fff',
      backgroundColor: 'rgba(51,51,51,0.5)',
      transition: 'all 0.2s'
    },
  },
  navigationButtonsOnScroll: {
    padding: '0px 10px',
    color: '#fff',
    '&:hover': {
      color: '#78161d',
      transition: 'all 0.2s'
    },
  },
  avatarStyle: {
    objectFit: 'contain',
    height: '5vh',
    padding: '5px',
  },
  navigationRight: {
    margin: '0px 20px 0px auto',
    display: 'flex',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
};