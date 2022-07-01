import React from 'react';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const EstructuraCondicional = () => {
    return (
        <div id='u3-Estructuracondicional'>
            <div className='unit-subtitle'>
                <label>
                    Estructura If
                </label>
            </div>
            <div className='unit-content'>
                <p>
                    Durante el desarrollo de un algoritmo, existen situaciones en las que es posible continuar por dos o más caminos diferentes,
                    ya sea por influencia del usuario o no. Casos como aprobar o reprobar una asignatura y dar una descripción del clima dada la temperatura
                    pueden ser ejemplos de estos casos. Para resolver estas incertidumbres se ocupa la estructura condicional conocida como <b>If</b>.
                </p>
                <p>
                    La estructura <b>If</b> evalúa una condición lógica y a partir del resultado ejecuta caminos distintos en el código.
                    Es el equivalente en código de la formula <i>=SI()</i> vista en la <i>Unidad 1</i>.
                    Existen 3 tipos de estructuras:
                </p>
                <p><b>Simple</b></p>
                <p>
                    La estructura simple solo considera un camino alterno. Si la condición a evaluar es verdadera, ejecutará todas las instrucciones
                    escritas hasta el final de la estructura, si no, continuará con el camino normal, ignorándolas.
                    La sintaxis es la siguiente:
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F1.jpg"} className='unit-image' alt="Sintaxis If simple"/>
                </div>
                <p> Se puede representar gráficamente como</p>
                <div className="unit-image2">
                    <img src={"/images/U3T5F2.jpg"} className='unit-image' alt="Diagrama If simple"/>
                </div>
                <p><b>Doble</b></p>
                <p>
                    La estructura doble puede tomar dos caminos diferentes: Si la condición es verdadera optará por las instrucciones luego del <i>Then</i>.
                    En cambio, si la condición es falsa, ignorará las instrucciones del <i>Then</i> y ejecutará las que están después del <i>Else</i>.
                </p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F3.jpg"} className='unit-image' alt="Sintaxis If doble"/>
                </div>
                <p>Gráficamente sería</p>
                <div className="unit-image2">
                    <img src={"/images/U3T5F4.jpg"} className='unit-image' alt="Diagrama If doble"/>
                </div>
                <p><b>Múltiple</b></p>
                <p>
                    Es posible anidar estructuras condicionales, estableciendo una estructura dentro del <i>Then</i> o <i>Else</i> de otra, a esto se le llama <b>If anidado</b>.
                    En lugar de escribir las instrucciones dentro de la estructura, se escribirá la sentencia de otra estructura condicional, de esta forma se pueden tener más
                    de dos caminos a elegir, considerando los resultados de todas las condiciones lógicas.
                </p>
                <p>Un ejemplo de If anidado puede ser</p>
                <div className="unit-image3">
                    <img src={"/images/U3T5F5.jpg"} className='unit-image' alt="Sintaxis If multiple"/>
                </div>
                <div className="unit-image2">
                    <img src={"/images/U3T5F6.jpg"} className='unit-image' alt="Diagrama If multiple"/>
                </div>
                Como ejemplo se desarrolla una subrutina para evaluar el estado final de un estudiante, a partir de su promedio final.
                Con el código generado, se pueden observar los dos resultados distintos dados ambos promedios finales.
                <div className="unit-image3">
                    <img src={"/images/U3T5F7.jpg"} className='unit-image' alt="Codigo If"/>
                </div>
                <div className='flex space-between'>
                    <div className="unit-image3">
                        <img src={"/images/U3T5F8.jpg"} className='unit-image' alt="Resultado true If"/>
                    </div>
                    <div className="unit-image3">
                        <img src={"/images/U3T5F9.jpg"} className='unit-image' alt="Resultado false If"/>
                    </div>
                </div>
                <YoutubeLink embedId="ROaEjy2JMrE"/>
            </div>
        </div>
    );
}

export default EstructuraCondicional;