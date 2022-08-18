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
                                <StyledTableCell>Formula</StyledTableCell>
                                <StyledTableCell>Explicación</StyledTableCell>
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
                <p>{Content["p2"]}</p>
                <p><b>{Content["p3"]}</b></p>
                <p>{Content["p4"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F1.gif"} className='unit-image' alt="Referencias Relativas"/>
                </div>
                <p>{Content["p5"]}</p>
                <p><b>{Content["p6"]}</b></p>
                <p>{Content["p7"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F2.gif"} className='unit-image' alt="Referencias Absolutas"/>
                </div>
                <p><b>{Content["p8"]}</b></p>
                <p>{Content["p9"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T3F3.gif"} className='unit-image' alt="Referencias Mixtas"/>
                </div>
                <p>{Content["p10"]}</p>
                <YoutubeLink embedId="b4quyEtiM3c"/>
            </div>
        </div>
    );
}

export default Referencias;