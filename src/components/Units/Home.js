import React from 'react';
import Emoji from '../../Emoji';
import './units.css';

const Home = () => {
    return (
        <div className='unit'>
            <div className='flex space-between'>
                <label className='unit-title'>
                INF130 - Programación
                </label>  
                <img src={"./images/Logo-DI.png"} className='unit-title-image' alt="Logo Departamento de Informática"/>
            </div>
            <div className='unit-content'>
                <p>
                    <b>¡Bienvenidos y bienvenidas!</b> <Emoji symbol="👋" label="waving hand"/>
                </p>
                <p>
                    Dentro de la siguiente plataforma podrás encontrar los contenidos correspondientes al curso
                    INF130-Programación y tratamiento de datos para la gestión.
                </p>
                <p>
                    El uso de la plataforma está destinado al estudio, repaso y ejercitación del estudiantado del curso,
                    por lo que dentro de cada unidad encontraran contenido teórico, ejemplos y ejercicios de la sección.
                </p>
                <p>
                    Para una facil navegación los contenidos están dividos por sus Unidades, exceptuando la Unidad 2 del curso,
                    a los cuales se puede acceder desde el menú de la izquierda. Dentro de cada unidad, el contenido está dividido
                    por tópicos, especificados en el menú de la derecha de cada unidad. Al final de cada unidad se puede encontrar
                    un recopilatorio de ejercicios por tópico.
                </p>
            </div>
            <div className='right-align'>
                <label><Emoji symbol="📝" label="note"/><b>Contacto:</b></label><br/>
                <label> Pedro Arriagada Noack <br/> pedro.arriagadan@sansano.usm.cl </label>
            </div>
        </div>
    );
}

export default Home;
