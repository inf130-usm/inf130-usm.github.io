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
                                <StyledTableCell>{Content["p2.1"]}</StyledTableCell>
                                <StyledTableCell>{Content["p2.2"]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p3.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p3.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p4.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p5.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p5.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p6.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p8.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p8.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p9.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p9.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p11.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p12.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p12.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p13.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p13.2"]}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                {Content["p14"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p15.1"]}</StyledTableCell>
                                <StyledTableCell>{Content["p15.2"]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p16.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p16.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p17.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p17.2"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p18.1"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p18.2"]}
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