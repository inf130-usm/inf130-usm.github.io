import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit3 = () => {
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
                    <a href="/unidad3/conceptos-basicos" className={url.includes("conceptos") ? "menu-list-item bold" : "menu-list-item"}>Conceptos Básicos</a>
                </li>
                <li>
                    <a href="/unidad3/subrutinas" className={url.includes("subrutinas") ? "menu-list-item bold" : "menu-list-item"}>Subrutinas</a>
                </li>
                <li>
                    <a href="/unidad3/variables" className={url.includes("variables") ? "menu-list-item bold" : "menu-list-item"}>Variables</a>
                </li>
                <li>
                    <a href="/unidad3/boxes" className={url.includes("boxes") ? "menu-list-item bold" : "menu-list-item"}>InputBox y MsgBox</a>
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit3;