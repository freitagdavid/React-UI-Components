import React from 'react';
import './Header.sass';

const HeaderContent = props => {
    return (
        <>
            <p className="header-content">{props.content}</p>
        </>
    );
};

export default HeaderContent;
