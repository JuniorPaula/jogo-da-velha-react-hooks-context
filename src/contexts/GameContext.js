import React, { createContext, useState } from "react";

export const GameContext = createContext();

export default function GameContextProvider({ children }) {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const [whoIsWinner, setWhoIsWinner] = useState('');

    const states = {
        squares,
        setSquares,
        isXNext,
        setIsXNext,
        whoIsWinner,
        setWhoIsWinner
    }


    return (<GameContext.Provider value={states}>{children}</GameContext.Provider>);
}