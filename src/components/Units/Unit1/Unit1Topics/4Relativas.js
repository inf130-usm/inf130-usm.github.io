import React from 'react';
import '../../units.css';

const Relativas = () => {
    return (
        <div id='u1-relativas'>
            <div className='unit-subtitle'>
                <label>
                    Referencias Relativas
                </label>
            </div>
            <div className='unit-content'>
                <p>
                Como se puede observar en la figura 1, en la celda B2 se está obteniendo la suma de las celdas A1 y B1. Al copiar la celda y pegarla en la celda C2 (figura 2), se puede observar que el valor resultante cambió, así como las referencias. En C2 se está sumando B1 junto a C1.
                </p>
                <div className='unit-image'>
                    <img src={"/images/ReferenciasRelativas-Figura1.jpg"} alt="Referencias Relativas Figura 1"/>
                    <div className='unit-caption'>
                        <label>Figura 1</label>
                    </div>
                </div>
                <div className='unit-image'>
                    <img src={"/images/ReferenciasRelativas-Figura2.jpg"} alt="Referencias Relativas Figura 2"/>
                    <div>
                        <label>Figura 2</label>
                    </div>
                </div>
                <p>
                Esto ocurre porque se están usando referencias relativas, cuyo comportamiento no es referenciar a una celda en específico, sino, una celda a una cierta distancia. Es decir, la referencia a la celda A1 en la fórmula de B2 está siendo referenciada como “una celda a la izquierda y una celda hacia arriba”, por lo que al mover la formula a la celda C3, la referencia se transforma en B1.
                </p>
            </div>
        </div>
    );
}

export default Relativas;