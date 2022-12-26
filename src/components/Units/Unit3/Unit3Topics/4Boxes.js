import React from 'react';
import { styled } from '@mui/material/styles';
import Content from '../../../../ContentJSON/U3/4Boxes.json';
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Boxes = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
      }));

    return (
        <div id='u3-boxes'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U3-Boxes.xlsm' className="download-file" download>
                    
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    &nbsp;Descargar archivo
                </a>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"]}
                </p>
                <p><b>{Content["p2"]}</b></p>
                <p>
                    {Content["p3"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F1.jpg"} className='unit-image' alt="Sintaxis MsgBox"/>
                </div>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p4"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p4"][0][1]}</StyledTableCell>
                                <StyledTableCell>{Content["p4"][0][2]}</StyledTableCell>
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
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][1][2]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][2][1]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][2][2]}
                                        <a href={Content["p4"][2][4]} target="_blank" rel="noreferrer">
                                            {Content["p4"][2][3]}
                                        </a>
                                        {Content["p4"][2][5]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][3][1]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p4"][3][2]}
                                    </TableCell>
                                </TableRow>                         
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F2.jpg"} className='unit-image' alt="Instruccion MsgBox"/>
                </div>
                <p>
                    {Content["p6"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F3.gif"} className='unit-image' alt="Ventana MsgBox"/>
                </div>
                <p>
                    <b style={{color:'red'}}><u>{Content["p7"][0]}</u></b>
                    {Content["p7"][1]}
                </p>
                <p><b>{Content["p8"]}</b></p>
                <p>
                    {Content["p9"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T4F4.jpg"} className='unit-image' alt="Sintaxis InputBox"/>
                </div>
                <p>
                    {Content["p10"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p11"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p11"][0][1]}</StyledTableCell>
                                <StyledTableCell>{Content["p11"][0][2]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][1][1]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][1][2]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][2][1]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][2][2]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][3][1]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"][3][2]}
                                    </TableCell>
                                </TableRow>                    
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p12"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T4F5.jpg"} className='unit-image' alt="Instruccion InputBox"/>
                </div>
                <div className="unit-image3">
                    <img src={"/images/U3T4F6.gif"} className='unit-image' alt="Ventana InputBox"/>
                </div>
                <YoutubeLink embedId="k1aopK081gE"/>
            </div>
        </div>
    );
}

export default Boxes;