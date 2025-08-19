import React, { createContext, useState, useContext } from "react";

const Burtgel = createContext();

export const useBurtgel = () => useContext(Burtgel);

export const BurtgelProvider = ({ children }) => {
    const [ner, setNer] = useState('');
    const [nuutsUg, setNuutsUg] = useState('');
    
        const garah = () => {
            setNer('');
            setNuutsUg('');
        };
    return (
        <Burtgel.Provider value={{ ner, setNer, garah, nuutsUg, setNuutsUg}}>
            {children}
        </Burtgel.Provider>
    );
};
