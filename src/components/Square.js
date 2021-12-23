import React, { useContext } from "react";

import {GameContext} from '../contexts/GameContext';

export default function Square({ value, index }) {
    const { squares, setSquares, isXNext, setIsXNext } = useContext(GameContext);
    
    function handleClick() {
        if(squares[index]) return;

        const newSquare = [ ...squares];
        newSquare[index] = isXNext ? 'X' : 'O';
        setSquares(newSquare);
        setIsXNext(!isXNext);

    } 

    return <button type="button" onClick={handleClick}>{value}</button>
}