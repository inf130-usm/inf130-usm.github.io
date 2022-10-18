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
import Content from '../../../../ContentJSON/U1/4Funciones.json';
import YoutubeLink from "../../../YouTubeLink";

const Funciones = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
    }));

    return (
        <div id='u1-funciones'>
            <div className='unit-subtitle'>
                <label>{Content["p0"]}</label>
            </div>
            <div className='unit-content'>
                <p>{Content["p1"]}</p>
                <div className='unit-image2'>
                    <img src={"/images/U1T4F1.jpg"} className='unit-image' alt="Sintaxis Función"/>
                </div>
                <p>{Content["p2"]}</p>
                <p>{Content["p3"]}</p>
                <div className='unit-image3'>
                    <img src={"/images/U1T4F2.jpg"} className='unit-image' alt="Sintaxis Función"/>
                </div>
                <YoutubeLink embedId="T6u7s_5FtmY"/>
                <p></p>
                <YoutubeLink embedId="GBCU2uaACII"/>
                <p>{Content["p4"]}</p>
                <p><b>{Content["p5"]}</b></p>
                <p>{Content["p6"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p7"]}</StyledTableCell>
                                <StyledTableCell>{Content["p8"]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p9"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p10"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p11"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p12"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p13"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p14"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p15"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p16"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p17"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p18"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p19"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p20"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p21"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p22"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p23"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p24"]}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p25"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p26"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p27"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p28"]}
                                    </TableCell>
                                </TableRow>                                 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="CBPokSlpL-c"/>
                <p></p>
                <YoutubeLink embedId="8rCyl4q2K1g"/>
                <p><b>{Content["p29"]}</b></p>
                <p>{Content["p30"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p31"]}</StyledTableCell>
                                <StyledTableCell>{Content["p32"]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p33"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p34"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p35"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p36"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p37"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p38"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p39"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p40"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p41"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p42"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p43"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p44"]}
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p45"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p46"]}
                                    </TableCell>
                                </TableRow>  
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p47"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p48"]}
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p49"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p50"]}
                                    </TableCell>
                                </TableRow>           
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="0_JCfpQ07v0"/>
                <p><b>{Content["p51"]}</b></p>
                <p>{Content["p52"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p53"]}</StyledTableCell>
                                <StyledTableCell>{Content["p54"]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p55"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p56"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p57"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p58"]}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p59"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p60"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p61"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p62"]}
                                    </TableCell>
                                </TableRow>        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="LcFGfkfp2lA"/>
                <p><b>{Content["p63"]}</b></p>
                <p>{Content["p64"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>{Content["p65"]}</StyledTableCell>
                                <StyledTableCell>{Content["p66"]}</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p67"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p68"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p69"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p70"]}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p71"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p72"]}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {Content["p73"]}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {Content["p74"]}
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