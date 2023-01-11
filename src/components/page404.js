import React from 'react';
import "./Units/units.css";

const page404 = () => {
    return (
        <div className='unit'>
            <div className='flex space-between'>
                <label className='unit-title'>
                TÓPICO NO ENCONTRADO
                </label>  
            </div>
            <div className='unit-content'>
                <p>Revise la URL...</p>
            </div>
        </div>
    );
}

export default page404;
