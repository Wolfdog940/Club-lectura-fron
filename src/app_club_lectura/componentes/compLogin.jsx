import { Box,FormControl, FormLabel, TextField, Typography ,Button,FormControlLabel} from "@mui/material";
import { CompLoginEx } from "./compLoginEx";

export const CompLogin = ({estilos}) => {
    return (
        <>
            <Box className={estilos.formContainer}>
                <Typography className={estilos.textoCabecera}>Inicio de sesion</Typography>
                <FormControl>
                    <Box className={estilos.inputContainer}>
                        <FormLabel  htmlFor="email">Correo</FormLabel>
                        <TextField
                            className={estilos.imputLabel}
                            id="email"
                            type="email"
                            name="email"
                            placeholder="TuCorreo@email.com"
                            autoComplete="email"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                        />
                    </Box>
                    <Box className={estilos.inputContainer}>
                        <FormLabel htmlFor="password">Contraseña</FormLabel>
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            placeholder="********"
                            autoComplete="current-password"
                            autoFocus
                            required
                            fullWidth
                            variant="outlined"
                        />
                    </Box>
                    <Box className={estilos.boton}>

                    <Button
                        sx={{ width: '100%' }}
                        type="submit"
                        variant="contained"
                        >
                        Login
                        </Button>
                    </Box>
                </FormControl>
                <CompLoginEx iconName="Google" />
                <CompLoginEx iconName="Facebook" />
            </Box>
        </>
    )
}      
