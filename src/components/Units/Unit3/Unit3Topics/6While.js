import React from 'react';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const EstructuraRepetitiva = () => {
    return (
        <div id='u3-Estructurarepetitiva'>
            <div className='unit-subtitle'>
                <label>
                    Estructura While
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    Las estructuras condicionales no sirven para todos los casos. En la situación del inicio de sesión de una plataforma,
                    el usuario debe ingresar su contraseña, para verificar si ésta es correcta podría utilizarse una estructura If,
                    pero si el usuario se equivoca debemos pedir la contraseña nuevamente, ¿Y si se equivoca nuevamente? ¿Cuántas veces
                    se debe repetir el ingreso de contraseña? Para casos ciclicos y repetitivos, existen las estructuras repetitivas conocidas
                    como <b>While</b>.
                </p>
                <p>
                    Su comportamiento es similar a la estructura If, dada una cierta condición lógica, la evalúa y si es verdadera ejecuta
                    las instrucciones dentro de la estructura. Lo distintivo del ciclo While es que al terminar de ejecutar las instrucciones,
                    evalúa nuevamente la condición lógica y si esta continúa siendo verdadera, vuelve a ejecutar las instrucciones y así una y otra vez.
                    Se llamará <i>iteración</i> a cada una de las pasadas o ejecuciones de las instrucciones realizadas por el ciclo.
                </p>
                <p>
                    Existen tres sintaxis posible para la estructura While, las dos primeras presentadas a continuación son equivalentes.
                    Estas estructuras evaluan la condición y luego intentan ejecutar las instrucciones internas, por lo que es posible que
                    en algunos casos las instrucciones nunca vayan a ejecutarse.
                </p>
                <div className='flex space-between'>
                    <div className="unit-image3">
                        <img src={"/images/U3T6F1.jpg"} className='unit-image' alt="Sintaxis while wend"/>
                    </div>
                    <div className="unit-image3">
                        <img src={"/images/U3T6F2.jpg"} className='unit-image' alt="Sintaxis do while loop"/>
                    </div>
                </div>
                <p>
                    Una representación gráfica puede ser:
                </p>
                <div className="unit-image2">
                    <img src={"/images/U3T6F3.jpg"} className='unit-image' alt="Diagrama while"/>
                </div>
                <p>
                    La tercera sintaxis posible es la siguiente:
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T6F4.jpg"} className='unit-image' alt="Sintaxis do loop while"/>
                </div>
                <p>
                    En este caso en primer lugar se ejecutan las instrucciones dentro de la estructura y luego se evalúa la condición
                    que podría resultar en la repetición de la ejecución o no. Por lo tanto, con esta estructura las instrucciones se ejecutan
                    al menos una vez, al contrario de las estructuras anteriores.
                </p>
                <p>
                    En las 3 estructuras la condición funciona del mismo modo y trabaja igual que la estructura If, pero en la estructura While
                    hay que tener 2 consideraciones <b style={{color:'red'}}><u>importantes</u></b>:
                </p>
                <ul>
                    <li>En la comparación de la condición lógica debe haber al menos una variable.</li>
                    <li>Entre las instrucciones de la estructura, debe modificarse al menos una de las variables de la condición lógica, para así evitar un ciclo infinito</li>
                </ul>
                <p>
                    Si lo que se está evaluando en la condición lógica nunca es modificado, la condición nunca tendrá la oportunidad de ser falsa,
                    por lo que el ciclo While nunca se detendría.
                </p>
                <p>
                    De este modo, se puede ver el siguiente ejemplo, como se utiliza un ciclo While para escribir el número correspondiente a su fila en las primeras 10 celdas de la columna A. 
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T6F5.jpg"} className='unit-image' alt="Ejemplo ciclo while"/>
                </div>
                <div className="unit-image3">
                    <img src={"/images/U3T6F6.jpg"} className='unit-image' alt="Ejemplo ciclo while"/>
                </div>
                <p>
                    Como se puede observar se estableció la variable <i>fila</i> en la condición y como última instrucción del ciclo se incrementa
                    el valor de la variable <i>fila</i> en 1. Llegando así, luego de la décima iteración (vuelta), al final del ciclo While.
                </p>
                <YoutubeLink embedId="kZX2firkIKM"/>
            </div>
        </div>
    );
}

export default EstructuraRepetitiva;