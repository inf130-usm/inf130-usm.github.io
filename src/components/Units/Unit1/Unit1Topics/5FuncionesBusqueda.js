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
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";

const Funciones = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
    }));

    return (
        <div id='u1-funciones'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-FuncionesBusqueda.xlsx' className="download-file" download>
                    
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
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
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
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p3"][0]}
                    <i>{Content["p3"][1]}</i>
                    {Content["p3"][2]}
                    <i>{Content["p3"][3]}</i>
                    {Content["p3"][4]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T5F1.gif"} className='unit-image' alt="Función BuscarV"/>
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