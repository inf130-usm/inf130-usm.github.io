import React from 'react';
import Menu from '../MenuTopics/Menu';
import Contents from '../Contents/Contents';
import Topics from '../MenuTopics/Topics';
import "./body.css";

const Body = () => {
    return (
        <div className='body'>
            <Menu/>
            <Contents/>
            <Topics/>
        </div>
    );
}

export default Body;
