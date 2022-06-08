import React from 'react';
import '../menutopics.css';

const MenuTopicsUnit3 = () => {
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
                    En construcción...
                </li>
            </ul>
        </div>
    );
}

export default MenuTopicsUnit3;