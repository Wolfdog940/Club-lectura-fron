import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
       primary: '#022B3A',
       secondary:"#1F7A8C"
    },
    text: {
      primary: '#ffffff',
    },
  },
});
export default darkTheme;