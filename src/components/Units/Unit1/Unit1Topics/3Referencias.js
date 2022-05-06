import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../units.css';

const Referencias = () => {
    return (
        <div id='u1-referencias'>
            <div className='unit-subtitle'>
                <label>
                    Referencias
                </label>
            </div>
            <div className='unit-content'>
                <p>
                Es común que en las fórmulas se utilicen los valores ingresados en otras celdas. 
                Para evitar escribir estos valores explícitamente y, considerando que estos pueden 
                cambiar en el tiempo, se hace uso de las referencias a celdas. Dentro de una formula 
                se escribe el nombre de la celda a la que se quiere referenciar para que la formula 
                utilice el valor de esa celda, así, si el valor de la celda cambia, la formula utilizará 
                este nuevo valor.
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Formula</TableCell>
                                <TableCell>Explicación</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=A2*C2'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <span>
                                        Se multiplicará el valor que está en la celda A2 con el valor que está en la celda C2
                                        </span>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=A1*(B1+C1)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <span>
                                        Primero se sumará el valor de B1 más C1 y posteriormente ese resultado se multiplicará por el valor de A1
                                        </span>
                                    </TableCell>
                                </TableRow>                              
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                Existen 3 formas distintas de referenciar celdas. Explicaremos todas por medio de ejemplos.
                </p>
            </div>
        </div>
    );
}

export default Referencias;