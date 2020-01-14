import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export function LangProvider(props) {
    const [lang, setLang] = useState('English and Malay');

    return (
        <LangContext.Provider value={{ lang }}>
            {props.children}
        </LangContext.Provider>
    );
}

export default LangProvider;
