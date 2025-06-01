import './App.css'
import {ThemeModeComp} from './app_club_lectura/componentes/themeModeComp.jsx'
import { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {VistaLogin} from './app_club_lectura/vistas/VistaLogin.jsx'
import darkTheme  from './app_club_lectura/themes/darkTheme.js';
import  lightTheme from './app_club_lectura/themes/ligthTheme.js'

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => setIsDark((prev) => !prev);

  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
       <ThemeModeComp isDark={isDark} handleToggle={handleToggle} />
        <VistaLogin/>
      </ThemeProvider>
  )
}

export default App
