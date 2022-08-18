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
                                <StyledTableCell>Función</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {"=ALEATORIO.ENTRE(número1;número2)"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve un número aleatorio entre los valores número1 y número2 entregados'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=REDONDEAR(número;cantidadDecimales)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve el número entregado redondeado a la cantidad de decimales especificados'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=SUMA(número1;número2;...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve la suma de todos los números entregados. Recibe una cantidad variable de argumentos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=SUMAR.SI(rangoNúmeros;criterio;[rangoSuma])'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir del rango de números entregado, verifica elemeno por elemento si cumple el criterio lógico proporcionado, en caso de cumplirlo suma los elemento correspondiente de rangoSuma, si éste no fue proporcionado realiza la suma con rangoNúmeros. Para una explicación más detallada revise los videos adjuntos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=PROMEDIO(número1;número2;...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve el promedio de todos los números entregados. Recibe una cantidad variable de argumentos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=MAX(número1;número2;...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve el número mayor de todos los números entregados. Recibe una cantidad variable de argumentos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=MIN(número1;número2;...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve el número menor de todos los números entregados. Recibe una cantidad variable de argumentos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=CONTAR(valor1;valor2;...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve la cantidad de valores numéricos entregados. Usualmente usado referenciando una rango de celdas para saber la cantidad de estas que tienen valores numéricos.'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=CONTAR.SI(rango;criterio)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir del rango entregado, cuenta la cantidad de celdas que cumplen con el criterio lógico entregado. Para una explicación más detallada revise los videos adjuntos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=CONTARA(valor1;valor2;...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve la cantidad de valores no vacios entregados. Usualmente usado referenciando una rango de celdas para saber la cantidad de estas que no están vacias.'}
                                    </TableCell>
                                </TableRow>                                 
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="CBPokSlpL-c"/>
                <p></p>
                <YoutubeLink embedId="8rCyl4q2K1g"/>
                <p><b>{Content["p7"]}</b></p>
                <p>{Content["p8"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Función</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {"=CONCAT(texto1;texto2;...)"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Concatena (une) los textos entregados, formando un solo texto. Recibe una cantidad variable de argumentos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=IGUAL(texto1;texto2)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Compara el texto1 y texto2, entregando VERDADERO si son iguales o FALSO si son distintos.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=LARGO(texto)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve el largo del texto entregado, la cantidad de carácteres.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=MAYUSC(texto)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Transforma el texto entregado, escribiendolo solo con mayúsculas.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=MINUSC(texto)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Transforma el texto entregado, escribiendolo solo con minúsculas.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=NOMPROPIO(texto)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Transforma el texto entregado, escribiendo con mayúscula la primera letra de cada palabra y el resto en minúsculas.'}
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=ENCONTRAR(texto1;texto2)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Busca el texto1 en el texto2 y entrega la posición en que lo encuentra.'}
                                    </TableCell>
                                </TableRow>  
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=IZQUIERDA(texto;número)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Extrae la cantidad de carácteres especificada por número desde texto, iniciando de la izquierda.'}
                                    </TableCell>
                                </TableRow>   
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=DERECHA(texto;número)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Extrae la cantidad de carácteres especificada por número desde texto, iniciando de la derecha.'}
                                    </TableCell>
                                </TableRow>           
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="0_JCfpQ07v0"/>
                <p><b>{Content["p9"]}</b></p>
                <p>{Content["p10"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Función</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {"=AHORA()"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Entrega la fecha actual junto con la hora.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=DIAS(fecha1;fecha2)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir de la fecha1 y fecha2 entregadas, devuelve la cantidad de días que hay entre ambas.'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=FECHA(año;mes;día)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve el formato fecha del año, mes y día ingresados, los 3 de forma numérica.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=HOY()'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Entrega la fecha actual'}
                                    </TableCell>
                                </TableRow>        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="LcFGfkfp2lA"/>
                <p><b>{Content["p11"]}</b></p>
                <p>{Content["p12"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Función</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {"=Y(comparación1;[comparación2];...)"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Verifica todas las comparaciones entregadas y devuelve VERDADERO en caso que todas sean verdaderas, en cambio, devuelve FALSO.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=O(comparación1;[comparación2];...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Verifica todas las comparaciones entregadas y devuelve VERDADERO en caso que alguna sea verdadera, en cambio, devuelve FALSO.'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=SI(comparación;siVerdadero;siFalso)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Verifica la comparación entregada, si ésta es verdadera devuelve lo especificado en siVerdadero, en cambio, devuelve siFalso.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=SI.CONJUNTO(comparación1;siVerdadero1;[comparación2];[siVerdadero2];...)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Verifica por orden cada comparación entregada, a la primera que encuentre verdadera, devuelve el siVerdadero correspondiente.'}
                                    </TableCell>
                                </TableRow>    
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <YoutubeLink embedId="vr4wiiqLHoA"/>
                <p></p>
                <YoutubeLink embedId="aA57N9kAeHM"/>
                <p><b>{Content["p13"]}</b></p>
                <p>{Content["p14"]}</p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Función</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {"=BUSCARV(valorBuscado;matriz;numColumna)"}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir de la matriz entregada, busca la fila en que se encuentra valorBuscado en la primera columna de la matriz, luego devuelve el valor de la misma fila pero de la columa numColumna.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=BUSCARH(valorBuscado;matriz;numFila)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'A partir de la matriz entregada, busca la columna en que se encuentra valorBuscado en la primera fila de la matriz, luego devuelve el valor de la misma columna pero de la fila numFila.'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=COINCIDIR(valor;rango;[tipoDeCoincidencia])'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Busca el valor en el rango entregado y devuelve el número de fila o columna en la que se encuentra. El tipo de coincidencia es para realizar una busqueda exacta o de otro tipo.'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=INDICE(rango;numFila;[numColumna])'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Entrega el valor de la celda que se encuentra en el número de fila y columna entregados, considerando el rango o matriz ingresado.'}
                                    </TableCell>
                                </TableRow>  
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'=UNICOS(rango)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Devuelve los valores únicos de un rango dado.'}
                                    </TableCell>
                                </TableRow>   
                            </TableBody>
                        </Table>
                    </TableContainer>
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