import { CompLogin } from "../componentes/compLogin";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import styles from '../styles/vistaLogin.js'
import estilos from "./vistaLogin.module.css";


export const VistaLogin = () => {
  const theme = useTheme();
  const sx = styles(theme);
  
  return (
    <Box sx={sx.vista} className={estilos.container}>
        <CompLogin sx ={sx.componente} estilos={estilos} />
     </Box>
  );
}