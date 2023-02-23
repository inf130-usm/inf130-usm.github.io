import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiFileExcel2Fill } from "react-icons/ri";
import { IconContext } from "react-icons";
import '../../units.css';
import { ModeContext } from '../../../../App';
import Content from '../../../../ContentJSON/U1/4Funciones.json';
import YoutubeLink from "../../../YouTubeLink";

const Funciones = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
    }));

    const night = useContext(ModeContext);

    return (
        <div id='u1-funciones'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U1-Funciones.xlsx' className={( night ? "download-file color-white" : "download-file")} download>
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    <label className='right-align excel-text'>&nbsp;Descargar archivo</label>
                </a>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"][0]}
                    <i>{Content["p1"][1]}</i>
                    {Content["p1"][2]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T4F1.jpg"} className='unit-image' alt="Sintaxis Función"/>
                </div>
                <p>
                    {Content["p2"][0]}
                    <i>{Content["p2"][1]}</i>
                    {Content["p2"][2]}
                    <i>{Content["p2"][3]}</i>
                    {Content["p2"][4]}
                </p>
                <p>
                    {Content["p3"][0]}
                    <i>{Content["p3"][1]}</i>
                    {Content["p3"][2]}
                    <i>{Content["p3"][3]}</i>
                    {Content["p3"][4]}
                </p>
                <div className='unit-image2'>
                    <img src={"/images/U1T4F2.gif"} className='unit-image' alt="Ejemplo Función"/>
                </div>
                <YoutubeLink embedId="T6u7s_5FtmY"/>
                <p></p>
                <YoutubeLink embedId="GBCU2uaACII"/>
                <p>
                    {Content["p4"]}
                </p>
                <p>
                    <b>{Content["p5"]}</b>
                </p>
                <p>
                    {Content["p6"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p7"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p7"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][2][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][3][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][4][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][5][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][5][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][6][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][6][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][7][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][7][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][8][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][8][1]}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][9][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][9][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][10][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p7"][10][1]}
                                    </TableCell>
                                </TableRow>                                 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="CBPokSlpL-c"/>
                <p></p>
                <YoutubeLink embedId="8rCyl4q2K1g"/>
                <p>
                    <b>{Content["p8"]}</b>
                </p>
                <p>
                    {Content["p9"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
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
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][4][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][5][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][5][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][6][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][6][1]}
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][7][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][7][1]}
                                    </TableCell>
                                </TableRow>  
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][8][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][8][1]}
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][9][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"][9][1]}
                                    </TableCell>
                                </TableRow>           
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="0_JCfpQ07v0"/>
                <p>
                    <b>{Content["p11"]}</b>
                </p>
                <p>
                    {Content["p12"]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
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
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p13"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p13"][4][1]}
                                    </TableCell>
                                </TableRow>        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="LcFGfkfp2lA"/>
                <p>
                    <b>{Content["p14"]}</b>
                </p>
                <p>
                    {Content["p15"][0]}
                    <i>{Content["p15"][1]}</i>
                    {Content["p15"][2]}
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table" style={{'backgroundColor':"#f2f2f2"}}>
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p16"][0][0]}</StyledTableCell>
                                <StyledTableCell>{Content["p16"][0][1]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][1][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][1][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][2][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][2][1]}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][3][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][3][1]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"][4][1]}
                                    </TableCell>
                                </TableRow>    
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="vr4wiiqLHoA"/>
                <p></p>
                <YoutubeLink embedId="aA57N9kAeHM"/>
            </div>
        </div>
    );
}

export default Funciones;