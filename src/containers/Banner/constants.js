import theme from '../../theme';

export const DEFAULT_STYLES = {
  root: {
    margin: '0px',
  },
  banner: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    color: 'white',
    objectFit: 'contain',
    height: '71vh',
    position: 'relative',
  },
  bannerContents: {
    marginLeft: '20px',
    paddingTop: '190px',
    position:'absolute',
    bottom: '4.2rem',
  },
  bannerContentContainer:{
    [theme.breakpoints.down('sm')]: {
      zoom: '65%',
    },
  },
  bannerTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    paddingBottom: '0.3rem',
  },
  bannerDescription: {
    width: '45rem',
    lineHeight: 1.3,
    paddingTop: '1rem',
    fontSize: '0.8rem',
    maxWidth: '360px',
    height: '80px',
  },
  bannerButton: {
    cursor: 'pointer',
    color: '#fff',
    outline: 'none',
    border: 'none',
    fontWeight: 700,
    borderRadius: '0.2vw',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    paddingTop: '0.5ren',
    marginRight: '1rem',
    backgroundColor: 'rgba(51,51,51,0.5)',
    paddingBottom: '0.5rem',
    '&:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6',
      transition: 'all 0.2s'
    },
  },
  bottomFade: {
    position:'absolute',
    height: '4.2rem',
    backgroundImage: 'linear-gradient(180deg,transparent, rgba(37,37,37,0.61),#111)',
    width: '100%',
    bottom: '-2px',
  },
  loadingIcon: {
    color: '#dc1a28',
    zoom: '350%',
  },
};

