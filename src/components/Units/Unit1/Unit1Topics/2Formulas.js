import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../units.css';
import { ModeContext } from '../../../../App';
import Content from '../../../../ContentJSON/U1/2Formulas.json';

const Formulas = () => {
    const night = useContext(ModeContext);

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
                    {Content["p1"][0]}
                    <i>{Content["p1"][1]}</i>
                    {Content["p1"][2]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
                            <TableHead>
                            <TableRow >
                                <StyledTableCell>{Content["p2"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p2"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][3][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][4][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][5][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][5][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][6][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][6][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][7][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][7][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][8][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][8][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][9][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][9][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][10][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][10][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][11][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p2"][11][1]}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                {Content["p3"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p4"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p4"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][3][1]}
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