import React from 'react';
import Button from '@mui/material/Button';
import '../Units/units.css';

const Login = () => {
    return (
        <div className='login-container flex-vertical space-evenly'>
            <div className='login-content'>
                <div className="login-input flex space-between">
                    <label>Correo Institucional</label>
                    <input></input>
                </div>
                <div className="login-input flex space-between">
                    <label>Contraseña</label>
                    <input type="password"></input>
                </div>
                <div className="right-align">
                    <Button variant="contained" color="success" size="small" className='login-button'>
                        Iniciar Sesión
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Login;
