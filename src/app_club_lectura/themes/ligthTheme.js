import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
    primary: '#BFDBF7',
    secondary:"#E1E5F2"
    },
    text: {
      primary: '#000000',
    },
  },
});
export default lightTheme