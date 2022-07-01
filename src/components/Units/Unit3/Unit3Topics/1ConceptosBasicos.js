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
                    Conceptos Básicos
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    Al término de la unidad 1, se introdujo el tema de las macros y como crearlas por medio de la herramienta <i>Grabar Macro</i>.
                </p>
                <p>
                    En esta unidad se aprenderá a implementar macros por medio de subrutinas, desarrolladas en el lenguaje de programación Visual Basic for Applications (VBA).
                    Pero antes de comenzar a programar es necesario conocer ciertos aspectos básicos de Excel en VBA.
                    Estos aspectos los podemos agrupar en 3: <b style={{color:'green'}}>Objetos</b>, <b style={{color:'blue'}}>Propiedades</b> y <b style={{color:'red'}}>Métodos</b>.
                </p>
                <p>
                    Los <b style={{color:'green'}}>Objetos</b> son todos los elementos con que se trabajan en Excel, los más usados son <b style={{color:'green'}}>Cells</b> (celdas), <b style={{color:'green'}}>Range</b> (rango de celdas) y <b style={{color:'green'}}>Worksheets</b> (hojas), pero también lo son los Workbooks (libros), Application (aplicación), Charts (gráficos), entre otros.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T1F1.jpg"} className='unit-image' alt="Objetos"/>
                </div>
                <p>
                    Como se ve cada objeto tiene su nompre propio, pero ya que existen varios del mismo tipo, es necesario conocer la sintáxis para identificarlos.
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Objeto</StyledTableCell>
                                <StyledTableCell>Explicación</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Cells(1,2)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El objeto celda que se encuentra en la fila 1 y columna 2 (B)'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Range("C4")'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El rango de celdas C4, es decir la celda C4'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Range("A1:C3")'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El rango de celdas desde A1 hasta C3'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Worksheets(3)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'La tercera hoja del archivo Excel'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Worksheets("Hoja1")'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'La hoja llamada Hoja1 en el archivo'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Workbooks("Libro1.xlsx")'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El libro de Excel nombrado Libro1'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Application'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Representa la aplicación de Excel en su totalidad'}
                                    </TableCell>
                                </TableRow>                        
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    Las <b style={{color:'blue'}}>Propiedades</b> son las características de un objeto, así como las celdas tienen un <b style={{color:'blue'}}>Value</b> (valor), <b style={{color:'blue'}}>Font Name</b> (nombre de fuente) y <b style={{color:'blue'}}>Font Size</b> (tamaño de fuente),
                    las hojas y los rangos tiene un <b style={{color:'blue'}}>Name</b> (nombre). Así, cada objeto existente, tienes sus propias propiedades que lo identifican.
                </p>
                <p>
                    Los <b style={{color:'red'}}>Métodos</b> son las acciones y comportamientos, además de darles caracteristicas a los objetos se puede realizar tareas con ellos,
                    así es como una celda permite las acciones <b style={{color:'red'}}>Activate</b> (activar) o <b style={{color:'red'}}>Select</b> (seleccionar) y <b style={{color:'red'}}>ClearContents</b> (borrar contenido).
                </p>
                <p>
                    Para poder acceder a las propiedades de cierto objeto o implementar sus métodos, se utiliza la sintaxis de punto (.) como se puede ver a continuación
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Propiedades</StyledTableCell>
                                <StyledTableCell>Explicación</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Cells(1,2).Value'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El valor de la celda en la fila 1, columna 2 (B1)'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Range("C4").Font.Name'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El nombre de la fuente del rango C4. Notar que existen dos puntos, ya que Font una gran propiedad que abarca otras propiedades (como Name)'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Range("A1:C3").Font.Size'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El tamaño de la fuente del rango A1 a C3. Notar que existen dos puntos, ya que Font una gran propiedad que abarca otras propiedades (como Size)'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Worksheets(3).Name'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El nombre de la tercera hoja del archivo Excel'}
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
                                <StyledTableCell>Métodos</StyledTableCell>
                                <StyledTableCell>Explicación</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Worksheets("Hoja1").Activate'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Activar la hoja llamada Hoja1'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Range("B2:C5").Select'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Seleccionar el rango de celdas B2 a C5'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Cells(2,3).ClearContents'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Borrar el contenido de la celda en la fila 2, columna 3 (C2)'}
                                    </TableCell>
                                </TableRow>                         
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <p>
                    Como se notó en la tabla anterior, existen propiedades que contienen propiedades y para acceder a estas subpropiedades se hace uso igualmente del punto (.).
                    Esto tambien ocurre con los objetos, hay objetos que contienen otros, como por ejemplo una hoja contiene una gran cantidad de celdas.
                    Para acceder correctamente al objeto que deseamos hay que considerar los objetos externos y se debe tener en cuenta la jerarquización.
                    Si un objeto no se menciona, VBA trabajará con el objeto activo.
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T1F2.jpg"} className='unit-image' alt="Jerarquía de objetos"/>
                </div>
                <p>
                    Ejemplificando:
                </p>
                <div className='unit-table'>
                    <TableContainer component={Paper} elevation={4}>
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell>Objeto</StyledTableCell>
                                <StyledTableCell>Explicación</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Workbook("Libro1.xlsx").Worksheets("Hoja1").Cells(1,1)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'Se referencia a la celda A1, de la hoja nombrada Hoja1, del archivo llamado Libro1'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Workbook("Libro2.xlsx").Cells(2,1)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'El objeto celda A2, de la hoja activa, del libro llamado Libro2'}
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell component="th" scope="row">
                                        {'Worksheets("Hoja2").Cells(1,2)'}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {'La celda B1, de la hoja nombrada Hoja2, del libro que se encuentra activo'}
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