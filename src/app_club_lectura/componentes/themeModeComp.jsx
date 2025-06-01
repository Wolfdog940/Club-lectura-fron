
import { Box, FormControlLabel, Switch } from '@mui/material';
import IconSwitch from '../styles/iconSwitch';
import { useTheme } from '@mui/material/styles';
import styles from '../styles/vistaLogin.js';


export const ThemeModeComp = ({isDark,handleToggle }) => {
  const theme = useTheme();
  const sx = styles(theme);

  return (
    <Box sx={sx.vista}>
      <FormControlLabel
        control={
          <IconSwitch checked={isDark} onChange={handleToggle}   />
        }
        label=""
      />
    </Box>
  );
};
