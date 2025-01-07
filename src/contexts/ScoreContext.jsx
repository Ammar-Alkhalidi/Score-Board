import React, { useState, createContext } from 'react';

// Creating the context
export const ScoreContext = createContext();

// Creating the provider component
export const ScoreContextProvider = ({ children }) => {
    const [score, setScore] = useState(0);

    // Functions to modify score
    const plusScore = () => setScore((prevScore) => prevScore + 10);
    const minusScore = () => setScore((prevScore) => prevScore - 10);

    return (
        <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
            {children}
        </ScoreContext.Provider>
    );
};
