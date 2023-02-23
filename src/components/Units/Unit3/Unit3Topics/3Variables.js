import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import Content from '../../../../ContentJSON/U3/3Variables.json';
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
import { ModeContext } from '../../../../App';

const Variables = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
      }));

      const night = useContext(ModeContext);

    return (
        <div id='u3-Variables'>
            <div className='unit-subtitle flex space-between'>
                <label className='unit-subtitle-text'>
                    {Content["p0"]}
                </label>
                <a href='/excel-files/U3-Variables.xlsm' className={ night ? "download-file color-white" : "download-file"} download>
                    
                    <IconContext.Provider value={{ className: 'excel-icon' }}>
                        <RiFileExcel2Fill/>
                    </IconContext.Provider> 
                    &nbsp;Descargar archivo
                </a>
            </div>
            <div className='unit-content'>
                <p>
                    {Content["p1"][0]}
                    <i>{Content["p1"][1]}</i>
                    {Content["p1"][2]}
                </p>
                <p>
                    {Content["p2"]}
                </p>
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
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p4"][4][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p4"][4][1]}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                    {Content["p4"][5][0]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                    {Content["p4"][5][1]}
                                    </TableCell>
                                </TableRow>                          
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    {Content["p5"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T3F1.jpg"} className='unit-image' alt="Variables"/>
                </div>
                <p>
                    {Content["p6"][0]}
                    <b style={{color:'blue'}}>{Content["p6"][1]}</b>
                    {Content["p6"][2]}
                    <b style={{color:'green'}}>{Content["p6"][3]}</b>
                    {Content["p6"][4]}
                    <b style={{color:'red'}}>{Content["p6"][5]}</b>
                    {Content["p6"][6]}
                    <b style={{color:'orange'}}>{Content["p6"][7]}</b>
                    {Content["p6"][8]}
                    <b style={{color:'green'}}>{Content["p6"][9]}</b>
                    {Content["p6"][10]}
                    <b style={{color:'purple'}}>{Content["p6"][11]}</b>
                    {Content["p6"][12]}
                </p>
                <p>
                    {Content["p7"][0]}
                    <i>{Content["p7"][1]}</i>
                    {Content["p7"][2]}
                </p>
                <p>
                    {Content["p8"]}
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T3F2.jpg"} className='unit-image' alt="Codigo variables"/>
                </div>
                <p>
                    {Content["p9"]}
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T3F3.gif"} className='unit-image' alt="Ejecución de subrutina"/>
                </div>
                <YoutubeLink embedId="J0_q4LGl2u4"/>
                <p></p>
                <YoutubeLink embedId="TuwXrWUZ0Bs"/>
            </div>
        </div>
    );
}

export default Variables;