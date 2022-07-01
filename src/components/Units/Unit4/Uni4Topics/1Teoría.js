import React from 'react';
import YoutubeLink from "../../../YouTubeLink";
import '../../units.css';

const Teoria = () => {
    return (
        <div id='u4-teoria'>
            <div className='unit-subtitle'>
                <label>
                    Teoría
                </label>
            </div>
            <div className='unit-content'>
                <p>
                Como se estudió en unidades anteriores, en Excel existe una variedad de funciones disponibles para el
                trabajo del usuario, así como <i>=promedio()</i>, <i>=buscarv()</i>, <i>=redondear()</i>, entre otras.
                </p> 
                <p>
                Estas funciones están construidas con VBA, por lo que manejando este lenguaje es posible crear funciones propias desde cero,
                con un nombre personalizado y parámetros deseados. Para crearlas se debe trabajar en un módulo (al igual que con las subrutinas)
                y se utilizará el procedimiento Function, el cual tiene una sintaxis similar a Sub.
                </p>
                <div className="unit-image">
                    <img src={"/images/SintaxisFunction.png"} className='unit-image' alt="Sintáxis del procedimiento Function"/>
                </div>
                <p>
                Se inicia con la palabra reservada <b style={{color:'red'}}>Function</b>, continuando se ingresa el <b style={{color:'blue'}}>nombre</b> que se le dará a la función.
                Este nombre sigue las mismas reglas que los nombres de las variables y subrutinas. Dentro de los paréntesis se ingresan los parámetros de la función, que pueden ser 1, 2 o más. Es importante
                especificar que tipo de dato es cada parametro, es por esto que junto a cada uno ingresado se escribe la palabra
                reservada <b style={{color:'red'}}>as</b> junto con el tipo de dato que le corresponde al parámetro (Integer, String, etc.). Posterior a los
                parentesis se debe especificar el <b style={{color:'green'}}>tipo de dato del retorno</b> de la función, el cual corresponde al valor que entregará
                como resultado la función. Al igual que las subrutinas, dentro de Function se desarrollaran todas las instrucciones y
                se debe finalizar declarando una importante variable, cuyo nombre será el <b style={{color:'blue'}}>nombre</b> de la función y su valor será el <b style={{color:'green'}}>valor
                que queremos retornar</b> (el resultado de la función). Cabe destacar que en el procedimiento Function no es posible referenciar
                celdas del libro, por lo que cualquier dato requerido debe ser entregado como parámetro. Para cerrar la función se utilizan
                las palabras reservadas <b style={{color:'red'}}>End Function</b>.
                </p>
                <YoutubeLink embedId="2YXBPMnvAgg"/>
                <p>
                A continuación se puede observar la creación de una función llamada <i>sumaEnteros</i>, que recibe dos parámetros de tipo Integer (num1, num2) y
                retorna un valor de tipo Long.
                </p>
                <div className="unit-image2">
                    <img src={"/images/FunctionSuma.png"} className='unit-image' alt="Ejemplo de una Function"/>
                </div>
                <p>
                Dentro de la función se crea la variable <i>resultadoSuma</i>, donde se almacena el resultado del procedimiento, por lo que
                su tipo coincide con el especificado en el encabezado de la función. Posteriormente se realiza el calculo y el resultado
                es almacenado en una variable de mismo nombre que la función. Esta última variable no es necesario crearla por medio de <i>Dim</i>.
                </p>
                <YoutubeLink embedId="CdCWa3a2_Ss"/>
                <p>
                Finalizada ya la función, es posible usarla de la misma forma que las funciones predefinidas de Excel
                </p>
                <div className="unit-image3">
                    <img src={"/images/FunctionEjemplo.png"} className='unit-image' alt="Modo de uso de Functions"/>
                </div>
                <p>
                Las referencias estudiadas en la Unidad 1 funcionan perfectamente con las funciones creadas y, así como en la hoja de cálculo, también se pueden utilizar la funciones creadas dentro de una subrutina. La lógica
                es la misma, se le entregan datos como parámetro y la función entrega un resultado, pero la sintáxis cambia
                al utilizar la función en código.
                </p>
                <div className="unit-image2">
                    <img src={"/images/FunctionEnSub.png"} className='unit-image' alt="Modo de uso de Functions en subrutinas"/>
                </div>
                <p>
                Como se puede observar, en la subrutina <i>sumar</i> se está haciendo uso de la función <i>sumaEnteros</i>, para
                esto se crean dos variables cuyo tipo de dato coincida con los parámetros, así como una variable cuyo tipo sea
                el del retorno. Se les asigna valores a las varibles <i>num1</i> y <i>num2</i>, que pueden ser explicitos o referenciados de alguna celda.
                La sintaxis del llamado de la función es igual que en la hoja de calculo, exceptuando que se deben reemplazar los punto y coma (;) por coma (,). También,
                es necesario almacenar en alguna variable el retorno de la función, para poder trabajar luego con él, esto se realiza dandole como valor a la variable
                la función. En la subrutina <i>sumar</i>, se le asigna el retorno de la función a la variable <i>resultado</i>.
                </p>
                <YoutubeLink embedId="Rw68DE49FRg"/>
            </div>
        </div>
    );
}

export default Teoria;