import React from 'react';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Subrutinas = () => {
    return (
        <div id='u3-subrutinas'>
            <div className='unit-subtitle'>
                <label>
                    Subrutinas
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    Para poder ejecutar las instrucciones que se aprendieron en la sección anterior, es necesario crear una subrutina con VBA.
                    Ésta es un procedimiento que agrupa las instrucciones y las ejecuta secuencialmente. La subrutina tiene una estructura y sintaxis especifica.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F1.jpg"} className='unit-image' alt="Sintaxis subrutina"/>
                </div>
                <p>
                    Se inicia con la sentencia <b style={{color:'red'}}>Sub</b>, la cual abre la subrutina, posteriormente va el nombre que se le desea dar la subrutina,
                    para poder identificarla. Este nombre tiene ciertas restricciones: no puede tener espacios, iniciar con números o simbolos, ni ser una palabra reservada de VBA, por lo que es común
                    separar las palabras con guión bajo (_) o con mayúsculas. Luego del nombre se debe abir y cerrar paréntesis. Bajo este encabezado van todas las instrucciones
                    necesarias para crear la macro deseada y, finalmente, se debe escribir <b style={{color:'red'}}>End Sub</b> para cerrar la subrutina.
                </p>
                <p>
                    Para construir la macro es necesario acceder a la herramienta <i>Visual Basic</i> en la pestaña <i>Programador</i> o <i>Desarrollador</i> (depende de la versión de Excel).
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T2F2.jpg"} className='unit-image' alt="Herramienta Visual Basic"/>
                </div>
                    Dentro de esta ventana, se debo ir a la pestaña <i>Insertar</i> y luego en <i>Módulo</i>, para abrir el editor de texto donde se escribirá la subrutina.
                <div className="unit-image3">
                    <img src={"/images/U3T2F3.jpg"} className='unit-image' alt="Insertar módulo"/>
                </div>
                <p>
                    Se realizará una subrutina como ejemplo para explicar el proceso. La subrutina que se creará le dará un valor a una celda, posteriormente
                    a otra celda se le dará otro valor y se cambiará el tamaño de la fuente. En la sección anterior se aprendió a referenciar propiedades de objetos,
                    para modificarla se utiliza el signo igual (=) y a continuación el valor que se le quiere dar.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F4.jpg"} className='unit-image' alt="Asignar valor"/>
                </div>
                <p>
                    Por lo tanto, la subrutina a crear tendrá la siguiente estructura:
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F5.jpg"} className='unit-image' alt="Primera subrutina"/>
                </div>
                <p>
                    Ya que en las instrucciones no se menciona el libro de Excel, la subrutina se ejecutará en el libro activo.
                    Para ejecutar la subrutina se debe acceder a la herramienta <i>Macros</i> de la pestaña <i>Programador</i>,
                    tal cual se realizaba al grabar macros.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F6.jpg"} className='unit-image' alt="Herramienta macros"/>
                </div>
                <p>
                    Al ejecutar la macro se procesarán las instrucciones escritas dentro de la subrutina
                    y el resultado quedará reflejado en el archivo.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T2F7.jpg"} className='unit-image' alt="Resultado primera subrutina"/>
                </div>
                <p>
                    <b style={{color:'red'}}><u>Importante</u></b>: Los cambios efectuados por medio de macros no podrán ser eliminados mediante la herramienta <i>Deshacer</i> (Ctrl + Z).
                </p>
                <YoutubeLink embedId="_TD5CMyPbRY"/>
                <p></p>
                <YoutubeLink embedId="em5Pu_8hq5s"/>
            </div>
        </div>
    );
}

export default Subrutinas;