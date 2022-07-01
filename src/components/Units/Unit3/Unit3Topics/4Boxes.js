import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Boxes = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
      }));

    return (
        <div id='u3-boxes'>
            <div className='unit-subtitle'>
                <label>
                    InputBox y MsgBox
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    A veces es necesario mostrar información al usuario o incluso solicitarle a éste información que no se encuentra en la planilla de Excel.
                    Para enfrentar esta situación existen dos instrucciones en VBA, que permiten la entrada y salida de datos del algoritmo.
                </p>
                <p><b>MessageBox</b></p>
                <p>
                    La instrucción MsgBox permite desplegar en pantalla una pequeña ventana con información para el usuario.
                    Este comando posee varios parámetros pero se ocupará más que nada solo el primero.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F1.jpg"} className='unit-image' alt="Sintaxis MsgBox"/>
                </div>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Parámetro</StyledTableCell>
                                <StyledTableCell>Tipo</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Mensaje'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Texto'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Obligatorio. Mensaje que se desplegará en la ventana'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Botones'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Numérico'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Opcional. Número para espeficiar que botones se mostrarán en la ventana. 0 es solo Aceptar, 1 es Aceptar y Cancelar'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Título'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Texto'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Opcional. Título de la ventana desplegada'}
                                    </TableCell>
                                </TableRow>                         
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    Si no se especifican los parámetros opcionales, se establecerán unos por defectos. Por lo tanto, una instrucción de MsgBox de forma 
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F2.jpg"} className='unit-image' alt="Instruccion MsgBox"/>
                </div>
                <p>
                    <b style={{color:'red'}}><u>Importante</u></b>: En algunas versiones MsgBox no es necesario que lleve paréntesis.
                </p>
                <p>
                    Tendrá como resultado el despliegue de la siguiente ventana.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F3.jpg"} className='unit-image' alt="Ventana MsgBox"/>
                </div>
                <p><b>InputBox</b></p>
                <p>
                    La instrucción despliega el mismo tipo de ventana que MsgBox, pero ésta posee un cuadro para que el usuario escriba y así poder almacenar la información entregada.
                    La sintaxis es la siguiente
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T4F4.jpg"} className='unit-image' alt="Sintaxis InputBox"/>
                </div>
                <p>
                    La instrucción debe ir en conjunto a una variable, donde se guardará la información que entregue el usuario.
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Parámetro</StyledTableCell>
                                <StyledTableCell>Tipo</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Mensaje'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Texto'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Obligatorio. Mensaje que se desplegará en la ventana.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Título'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Texto'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Opcional. Título de la ventana desplegada.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Predeterminado'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Texto'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Opcional. Mensaje que se guardará si el cuadro de texto se entrega vacío.'}
                                    </TableCell>
                                </TableRow>                    
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    Así, la instrucción con su correspondiente resultado son:
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F5.jpg"} className='unit-image' alt="Instruccion InputBox"/>
                </div>
                <div className="unit-image3">
                    <img src={"/images/U3T4F6.jpg"} className='unit-image' alt="Ventana InputBox"/>
                </div>
                <YoutubeLink embedId="hY_A16tkTKk"/>
            </div>
        </div>
    );
}

export default Boxes;