import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../units.css';

const Formulas = () => {
    return (
        <div id='u1-formulas'>
            <div className='unit-subtitle'>
                <label>
                    Formulas
                </label>
            </div>
            <div className='unit-content'>
                <p>
                En las celdas es posible ingresar cálculos matemáticos y lógicos que se resolverán de forma automática 
                y constantemente, entregándose el resultado en la misma celda. Para realizar este proceso es requerido 
                iniciar el valor de la celda con un signo igual “=” y a continuación plasmar la fórmula de la cual se 
                quiere obtener el resultado. Excel acepta una gran cantidad de operadores matemáticos y lógicos, además, 
                respeta el orden precedencia de estos y es posible agregar paréntesis a los cálculos. Algunos operadores 
                que se pueden usar son los siguientes:
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Operador</TableCell>
                                <TableCell>Símbolo</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Suma
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'+'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Resta
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'-'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Multiplicación
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'*'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        División
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'/'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Exponenciación
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'^'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Igual que
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'='}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Mayor que
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'>'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Mayor o igual que
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'>='}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Menor que
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'<'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Menor o igual que
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'<='}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        Distinto que
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'<>'}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                Para una mayor compresión, se entregarán unos pequeños ejemplos con los resultados que aparecerán en la celda:
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Formula</TableCell>
                                <TableCell>Resultado</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=15+8'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'23'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=5>3'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'VERDADERO'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=(-2)^3'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'-8'}
                                    </TableCell>
                                </TableRow>                                
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
}

export default Formulas;