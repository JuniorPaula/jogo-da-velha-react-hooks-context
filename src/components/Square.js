import React, { useContext } from "react";

import {GameContext} from '../contexts/GameContext';

export default function Square({ value, index }) {
    const { squares, setSquares, isXNext, setIsXNext, whoIsWinner, setHistory, history } = useContext(GameContext);
    
    function handleClick() {
        if(squares[index]) return;
        if(whoIsWinner) return;

        const newSquare = [ ...squares];
        newSquare[index] = isXNext ? 'X' : 'O';
        setSquares(newSquare);
        setIsXNext(!isXNext);

        setHistory([...history, {
            squares: [...squares],
            isNext: !isXNext,
        }]);

    } 

    return <button type="button" onClick={handleClick}>{value}</button>
}