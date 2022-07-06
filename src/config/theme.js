import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const base = createTheme({
  palette: {
    primary: {
      main: "#d500f9",
    },
  },
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
});

const theme = responsiveFontSizes(base)
export default theme