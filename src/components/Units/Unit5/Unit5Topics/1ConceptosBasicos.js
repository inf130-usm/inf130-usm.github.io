import React from 'react';
import '../../units.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Content from '../../../../ContentJSON/U5/1ConceptosBasicos.json';
import YoutubeLink from "../../../YouTubeLink";

const ConceptosBasicos = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
    }));

    return (
        <div id='u5-teoria'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"][0]}
                    <i>{Content["p1"][1]}</i>
                    {Content["p1"][2]}
                </p>
                <div className='unit-image3'>
                    <img src={"/images/U5T1F1.jpg"} className='unit-image' alt="Controles de formulario"/>
                </div>
                <p>
                    {Content["p2"]}
                </p>
                <p>
                    <b>{Content["p3"][0]}</b>{Content["p3"][1]}
                </p>
                <p>
                    <b>{Content["p4"][0]}</b>{Content["p4"][1]}
                </p>
                <p>
                    {Content["p5"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p6"][0][0]}</StyledTableCell>
                                <StyledTableCell style={{"text-align":"center"}}>{Content["p6"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6"][1]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='unit-image3'>
                                            <img src={"/images/U5T1F2.gif"} className='unit-image' alt="Control boton"/>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6"][2]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='unit-image3'>
                                            <img src={"/images/U5T1F3.gif"} className='unit-image' alt="Control cuadro combinado"/>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6"][3]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='unit-image3'>
                                            <img src={"/images/U5T1F4.gif"} className='unit-image' alt="Control de número"/>
                                        </div>
                                    </TableCell>
                                </TableRow>  
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6"][4]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='unit-image3'>
                                            <img src={"/images/U5T1F5.gif"} className='unit-image' alt="Control cuadro de lista"/>
                                        </div>
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6"][5]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='unit-image4'>
                                            <img src={"/images/U5T1F6.gif"} className='unit-image' alt="Control casilla (checkbox)"/>
                                        </div>
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p6"][6]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <div className='unit-image4'>
                                            <img src={"/images/U5T1F7.gif"} className='unit-image' alt="Control botón de opción"/>
                                        </div>
                                    </TableCell>
                                </TableRow>                             
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="uMi96-qyDog"/>
                <p></p>
                <YoutubeLink embedId="cZe3QOTACTM"/>
            </div>
        </div>
    );
}

export default ConceptosBasicos;