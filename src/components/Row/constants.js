// import theme from '../../theme';

export const DEFAULT_STYLES = {
  root: {
    margin: 0,
  },
  rowPoster: {
    width: '100%',
    objectFit: 'contain',
    maxHeight: '180px',
    transition: 'transform 450ms',
    marginRight: '10px',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  rowPosters: {
    display: 'flex',
    overflowX: 'scroll',
    overflowY: 'hidden',
    padding: '20px',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
  },
  rowPosterLarge: {
    width: '100%',
    objectFit: 'contain',
    maxHeight: '275px',
    transition: 'transform 450ms',
    marginRight: '12px',
    '&:hover': {
      transform: 'scale(1.09)',
    },
  },
  rowRoot: {
    marginLeft: '20px',
    color: 'white'
  },
  loadingIcon: {
    color: '#dc1a28'
  },
};
