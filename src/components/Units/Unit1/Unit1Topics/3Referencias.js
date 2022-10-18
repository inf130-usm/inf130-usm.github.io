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
                <p>{Content["p1"]}</p>
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
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>{Content["p5"]}</p>
                <p><b>{Content["p6"]}</b></p>
                <p>{Content["p7"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F1.gif"} className='unit-image' alt="Referencias Relativas"/>
                </div>
                <p>{Content["p8"]}</p>
                <p><b>{Content["p9"]}</b></p>
                <p>{Content["p10"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F2.gif"} className='unit-image' alt="Referencias Absolutas"/>
                </div>
                <p><b>{Content["p11"]}</b></p>
                <p>{Content["p12"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F3.gif"} className='unit-image' alt="Referencias Mixtas"/>
                </div>
                <p>{Content["p13"]}</p>
                <YoutubeLink embedId="b4quyEtiM3c"/>
            </div>
        </div>
    );
}

export default Referencias;