import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit4 = () => {
    return (   
        <div className='topics'>
            <label className='menu-list-title'>
                Contenidos
            </label>
            <ul className='menutopics-list'>
                <li>
                    <a href="/unidad1/conceptos-basicos" className='menu-list-item'>Conceptos básicos</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit4;