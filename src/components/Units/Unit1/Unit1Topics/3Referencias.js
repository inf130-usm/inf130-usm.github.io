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
import Content from '../../../../ContentJSON/U1/3Referencias.json';
import YoutubeLink from "../../../YouTubeLink";

const Referencias = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
      }));

    return (
        <div id='u1-referencias'>
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
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
                            <TableHead>
                            <TableRow>
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
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p3"]}
                </p>
                <p>
                    <b>{Content["p4"]}</b>
                </p>
                <p>
                    {Content["p5"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F1.gif"} className='unit-image' alt="Referencias Relativas"/>
                </div>
                <p>
                    {Content["p6"][0]}
                    <i>{Content["p6"][1]}</i>
                    {Content["p6"][2]}
                </p>
                <p>
                    <b>{Content["p7"]}</b>
                </p>
                <p>
                    {Content["p8"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F2.gif"} className='unit-image' alt="Referencias Absolutas"/>
                </div>
                <p>
                    <b>{Content["p9"]}</b>
                </p>
                <p>
                    {Content["p10"]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F3.gif"} className='unit-image' alt="Referencias Mixtas"/>
                </div>
                <p>
                    {Content["p11"][0]}
                    <i>{Content["p11"][1]}</i>
                    {Content["p11"][2]}
                </p>
                <YoutubeLink embedId="b4quyEtiM3c"/>
            </div>
        </div>
    );
}

export default Referencias;