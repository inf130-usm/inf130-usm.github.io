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
import Content from '../../../../ContentJSON/U1/2Formulas.json';

const Formulas = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
    }));

    return (
        <div id='u1-formulas'>
            <div className='unit-subtitle'>
                <label>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                {Content["p1"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Operador</StyledTableCell>
                                <StyledTableCell>Símbolo</StyledTableCell>
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
                {Content["p2"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Formula</StyledTableCell>
                                <StyledTableCell>Resultado</StyledTableCell>
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