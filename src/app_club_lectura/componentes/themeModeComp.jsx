import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // luna
import Brightness7Icon from '@mui/icons-material/Brightness7'; // sol

const IconSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 1,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      color: '#fff',
      '& .MuiSwitch-thumb:before': {
        content: '"🌙"',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: '"☀️"',
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    opacity: 1,
  },
}));

export const ThemeModeComp = () => {
  const [isDark, setIsDark] = useState(false);

  const handleChange = (event) => {
    console.log("Cambio de tema", event.target.checked);
    setIsDark(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        control={
          <IconSwitch checked={isDark} onChange={handleChange} />
        }
        label=""
      />
    </Box>
  );
};
