import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Content from '../../../../ContentJSON/U3/1ConceptosBasicos.json';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const ConceptosBasicos = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
      }));

    return (
        <div id='u3-conceptosbasicos'>
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
                <p>
                    {Content["p2"][0]}
                    <b style={{color:'green'}}>{Content["p2"][1]}</b>
                    {Content["p2"][2]}
                    <b style={{color:'blue'}}>{Content["p2"][3]}</b>
                    {Content["p2"][4]}
                    <b style={{color:'red'}}>{Content["p2"][5]}</b>
                    {Content["p2"][6]}
                </p>
                <p>
                    {Content["p3"][0]}
                    <b style={{color:'green'}}>{Content["p3"][1]}</b>
                    {Content["p3"][2]}
                    <b style={{color:'green'}}>{Content["p3"][3]}</b>
                    {Content["p3"][4]}
                    <b style={{color:'green'}}>{Content["p3"][5]}</b>
                    {Content["p3"][6]}
                    <b style={{color:'green'}}>{Content["p3"][7]}</b>
                    {Content["p3"][8]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T1F1.jpg"} className='unit-image' alt="Objetos"/>
                </div>
                <p>
                    {Content["p4"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p5"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p5"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][3][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][4][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][5][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][5][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][6][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][6][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][7][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p5"][7][1]}
                                    </TableCell>
                                </TableRow>                        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p6"][0]}
                    <b style={{color:'blue'}}>{Content["p6"][1]}</b>
                    {Content["p6"][2]}
                    <b style={{color:'blue'}}>{Content["p6"][3]}</b>
                    {Content["p6"][4]}
                    <b style={{color:'blue'}}>{Content["p6"][5]}</b>
                    {Content["p6"][6]}
                    <b style={{color:'blue'}}>{Content["p6"][7]}</b>
                    {Content["p6"][8]}
                    <b style={{color:'blue'}}>{Content["p6"][9]}</b>
                    {Content["p6"][10]}
                </p>
                <p>
                    {Content["p7"][0]}
                    <b style={{color:'red'}}>{Content["p7"][1]}</b>
                    {Content["p7"][2]}
                    <b style={{color:'red'}}>{Content["p7"][3]}</b>
                    {Content["p7"][4]}
                    <b style={{color:'red'}}>{Content["p7"][5]}</b>
                    {Content["p7"][6]}
                    <b style={{color:'red'}}>{Content["p7"][7]}</b>
                    {Content["p7"][8]}
                </p>
                <p>
                    {Content["p8"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p9"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p9"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][3][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p9"][4][1]}
                                    </TableCell>
                                </TableRow>                         
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p10"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p10"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p10"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p10"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p10"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p10"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p10"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p10"][3][1]}
                                    </TableCell>
                                </TableRow>                         
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p11"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T1F2.jpg"} className='unit-image' alt="Jerarquía de objetos"/>
                </div>
                <p>
                    {Content["p12"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p13"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p13"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p13"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p13"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p13"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p13"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p13"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p13"][3][1]}
                                    </TableCell>
                                </TableRow>                         
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="xLFJ9Yy2sHI"/>
            </div>
        </div>
    );
}

export default ConceptosBasicos;