import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  root: {
    margin: 0,
    padding: 0,
  },
  palette: {
    primary: {
      light: '#004d8b',
      main: '#126ebd',
      dark: '#29567b',
      contrastText: '#fff',
    },
    secondary: {
      light: '#0088d9',
      main: '#007bc4',
      dark: '#0070b0',
      contrastText: '#fff',
    },
    accent: {
      dark: '#9C5C00',
      main: '#1fb2ef',
      light: '#FFD08B',
      contrastText: '#000',
    },
    error: {
      dark: '#A31616',
      main: '#f44336',
      light: '#FFC5C5',
      contrastText: '#fff ',
    },
    success: {
      dark: '#6fb300',
      main: '#6fb300',
      light: '#6fb300',
      contrastText: '#fff ',
    },
  },
  overrides: {
    MuiMenuItem: {
      root: {
        '&$selected': {
          backgroundColor: '#07A6EA',
        },
      },
    },
    MuiButton: {
      root: {
        fontSize: '1rem',
        borderRadius: 5,
        minHeight: 55,
      },
      raised: {
        backgroundColor: '#f9f9f9',
        color: 'rgb(130, 131, 132)',
      },
    },
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: 'rgba(5, 170, 239, 0.61)',
        },
        '&$active': {
          color: '#07A6EA',
        },
      },
    },
    MuiStepPositionIcon: {
      root: {
        color: 'rgba(92, 143, 165, 0.45)',
      },
    },
    MuiDialogContent: {
      root: {
        padding: 24,
      },
    },
    MuiModal: {
      hidden: {
        visibility: 'auto',
      },
    },
    MuiTypography: {
      root: {
        fontWeight: 200,
      },
      title: {
        fontSize: '1.3rem',
        fontWeight: 300,
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          content: '""',
        },
      },
    },
    MuiTab: {
      root: {
        height: 40,
      },
      label: {
        fontSize: 11,
      },
    },
  },
});
