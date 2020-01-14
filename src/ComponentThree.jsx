import React, { useContext } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { LangContext } from './contexts/LangContext';

function ComponentThree(props) {
    const { lang } = useContext(LangContext);
    const { spareProps, userType, toggleLogin } = useContext(AuthContext);

    return (
        <>
            <h1>Page 3</h1>
            <p>SpareProps: {spareProps}</p>
            <p>UserType: {userType}</p>
            <p>Language: {lang}</p>
            <button onClick={toggleLogin}>Login</button>
        </>
    );
}

export default ComponentThree;
