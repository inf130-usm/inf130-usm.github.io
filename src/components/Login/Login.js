import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../Units/units.css';

const theme = createTheme({
    palette: {
      white: {
        main: '#FFFFFF'
      },
    },
  });

const Login = () => {

    return (
        <div className='log-button-container'>
            <div className='visible' style={{"visibility":"hidden"}}>
            <Button
                className='log-button'
                variant="contained"
                color="success"
                size="small">
                    Iniciar Sesión
            </Button>
            </div>
            <div className='not-visible'>
                <ThemeProvider theme={theme}>
                    <Button
                        className='log-button'
                        variant="contained"
                        color="error"
                        size="small">
                            Cerrar Sesión
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default Login;
