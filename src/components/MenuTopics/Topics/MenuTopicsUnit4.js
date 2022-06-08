import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit4 = () => {
    const url = window.location.pathname;
    
    return (   
        <div className='topics'>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div style={{flex: 1, height: '1px', marginRight: '5px', backgroundColor: 'black'}} />
                <div>
                    <label className='menu-list-title'>
                        Tópicos
                    </label>
                </div>
                <div style={{flex: 1, height: '1px', marginLeft: '5px', backgroundColor: 'black'}} />
            </div>
            <ul className='menutopics-list'>
                <li>
                    <a href="/unidad4/teoria" className={url.includes("teoria") ? "menu-list-item bold" : "menu-list-item"}>Teoría</a>
                </li>
                <li>
                    <a href="/unidad4/ejercicios" className={url.includes("ejercicios") ? "menu-list-item bold" : "menu-list-item"}>Ejercicios</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit4;