import React from 'react';
import ComponentThree from './ComponentThree';

function ComponentTwo(props) {
    return (
        <>
            <h1>Page 2 with Page 3 embedded</h1>
            <ComponentThree />
        </>
    );
}

export default ComponentTwo;
