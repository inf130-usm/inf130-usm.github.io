import React from 'react';
import '../../units.css';

const Absolutas = () => {
    return (
        <div id='u1-absolutas'>
            <div className='unit-subtitle'>
                <label>
                    Referencias Absolutas
                </label>
            </div>
            <div className='unit-content'>
                <p>
                Para referenciar una celda en específico y que la referencia no se vea alterada, se ocupa el signo pesos ($) antes de la columna y/o fila, dependiendo cual se quiera dejar inmutable. De esta forma, si se referencia a A1 y B1 con referencias absolutas en la fórmula de la celda B2 en la figura 3, no se modificará la referencia al copiar la formula a la celda C2 (figura 4).
                </p>
                <div className='unit-image'>
                    <img src={"/inf130/ReferenciasAbsolutas-Figura1.jpg"} alt="Referencias Absolutas Figura 1"/>
                    <div className='unit-caption'>
                        <label>Figura 3</label>
                    </div>
                </div>
                <div className='unit-image'>
                    <img src={"/inf130/ReferenciasAbsolutas-Figura2.png"} alt="Referencias Absolutas Figura 2"/>
                    <div>
                        <label>Figura 4</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Absolutas;