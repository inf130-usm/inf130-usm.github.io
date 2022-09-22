import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Variables = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#4051B5',
          color: theme.palette.common.white,
        },
      }));

    return (
        <div id='u3-Variables'>
            <div className='unit-subtitle'>
                <label>
                    Variables
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    En el mundo de la programación, los datos no son estáticos, éstos se pueden modificar, trabajar con ellos e
                    incluso ser desconocidos ya que el usuario debe proveerlos. Para poder trabajar con los datos es necesario
                    antes almacenarlos dentro de lo conocido como <i>variable</i>.
                </p>
                <p>
                    Una variable es un espacio de memoría que puede almacenar un dato, se le representa como una caja cuyo interior
                    posee el dato que almacena la variable. Para poder crear una variable son necesario dos aspectos: un nombre
                    y su tipo de dato. El nombre de la variable respeta las mismas reglas que el nombre de la subrutina. Por otro lado,
                    el tipo de dato es exactamente eso, la clase de dato que puede almacenar la variable.
                </p>
                <p>
                    Existe una gran cantidad de tipo de datos dentro de la programación, algunos de ellos son:
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Tipo de Dato</StyledTableCell>
                                <StyledTableCell>Descripción</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Integer'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Números enteros, positivos y negativos'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Double'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Número decimales, positivos y negativos'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'String'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Texto, debe escribirse entre comillas ("")'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Boolean'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Dato que solo puede tener los valores True o False'}
                                    </TableCell>
                                </TableRow> 
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Variant'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Cualquier tipo'}
                                    </TableCell>
                                </TableRow>                          
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    Declarar y darle valor a las variables tiene una sintáxis especifica
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T3F1.jpg"} className='unit-image' alt="Variables"/>
                </div>
                <p>
                    Para crear la variable se usa la palabra reservada Dim, luego el nombre que se le quiere asignar a la variable
                    y finalmente la palabra reservada As, seguida del tipo de dato que almacenará la variable creada.
                    Para darle un valor a una variable ya creada, se debe ecribir el nombre de la variable, continuada por el
                    signo igual (=) y el valor que se quiere almacenar (debe coincidir con el tipo de dato definido en la variable).
                </p>
                <p>
                    Es posible darle valor a variables sin declararlas antes (creandose en el momento), pero si no se maneja con cuidado
                    puede generar problemas en el código, por lo que se evitará durante este curso. Para forzar el declarar variable se
                    utiliza la instrucción <i>Option Explicit</i> al inicio del editor de texto, fuera de la subrutina.
                </p>
                <p>
                    A continuación se puede apreciar un código de ejemplo trabajando con variables.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T3F2.jpg"} className='unit-image' alt="Codigo variables"/>
                </div>
                <p>
                    En la imagen de la izquierda puede verse la hoja antes de la ejecución de la macro y a la derecha el resultado al ejecutarla.
                </p>
                <div className='flex space-between'>
                    <div className="unit-image3">
                        <img src={"/images/U3T3F3.jpg"} className='unit-image' alt="Antes de ejecutar código"/>
                    </div>
                    <div className="unit-image3">
                        <img src={"/images/U3T3F4.jpg"} className='unit-image' alt="Después de ejecutar código"/>
                    </div>
                </div>
                <YoutubeLink embedId="J0_q4LGl2u4"/>
                <p></p>
                <YoutubeLink embedId="TuwXrWUZ0Bs"/>
            </div>
        </div>
    );
}

export default Variables;