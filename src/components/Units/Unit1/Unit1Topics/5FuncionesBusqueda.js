import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../units.css';
import Content from '../../../../ContentJSON/U1/5FuncionesBusqueda.json';
import YoutubeLink from "../../../YouTubeLink";

const Funciones = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
    }));

    return (
        <div id='u1-funciones'>
            <div className='unit-subtitle'>
                <label>{Content["p0"]}</label>
            </div>
            <div className='unit-content'>
                <p>{Content["p1"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Función</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {"=BUSCARV(valorBuscado;matriz;numColumna)"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir de la matriz entregada, busca la fila en que se encuentra valorBuscado en la primera columna de la matriz, luego devuelve el valor de la misma fila pero de la columa numColumna.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=BUSCARH(valorBuscado;matriz;numFila)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir de la matriz entregada, busca la columna en que se encuentra valorBuscado en la primera fila de la matriz, luego devuelve el valor de la misma columna pero de la fila numFila.'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=COINCIDIR(valor;rango;[tipoDeCoincidencia])'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Busca el valor en el rango entregado y devuelve el número de fila o columna en la que se encuentra. El tipo de coincidencia es para realizar una busqueda exacta o de otro tipo.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=INDICE(rango;numFila;[numColumna])'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Entrega el valor de la celda que se encuentra en el número de fila y columna entregados, considerando el rango o matriz ingresado.'}
                                    </TableCell>
                                </TableRow>  
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=UNICOS(rango)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve los valores únicos de un rango dado.'}
                                    </TableCell>
                                </TableRow>   
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="fb1WQsDvjkA"/>
                <p></p>
                <YoutubeLink embedId="N_k0JyQTCwo"/>
                <p></p>
                <YoutubeLink embedId="nNvTh77-3vo"/>
                <p></p>
                <YoutubeLink embedId="-7N2wPIEtxc"/>
            </div>
        </div>
    );
}

export default Funciones;