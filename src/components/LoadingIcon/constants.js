// import theme from '../../theme';

export const DEFAULT_STYLES = {
    root: {
      margin: 0,
    },
    loadingStyle: {
        '@global': {
            '@keyframes rotation': {
                '0%': {
                transform: 'rotate(0deg)',
                },
                '100%': {
                transform: 'rotate(360deg)',
                }
            }
        },
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        display: 'inline-block',
        borderTop: "4px solid #a50909",
        borderRight: "4px solid transparent",
        boxSizing: "border-box",
        // animation: "rotation 1s linear infinite",
        animationName: 'rotation',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',
        '&::after': {
            content: '',
            boxSizing: 'border-box',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            borderLeft: '4px solid #FF3D00',
            borderBottom: '4px solid transparent',
            // animation: 'rotation 0.5s linear infinite reverse',
            animationName: 'rotation',
            animationDuration: '1s',
            animationTimingFunction: 'linear',
            animationIterationCount:'infinite',
            animationDirection: 'reverse'
        },
    }
  };