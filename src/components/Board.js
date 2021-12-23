import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

import calculateWinner from '../utils/CalculateWinners';

import {GameContext} from '../contexts/GameContext';
import Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";
import Winner from "./Winner";

export default function Board() {
    const { squares, setWhoIsWinner, history } = useContext(GameContext);

    useEffect(() => {
        const winner = calculateWinner(squares);
        if(winner) {
            setWhoIsWinner(winner);
        }
    }, [squares, setWhoIsWinner, history]);
    
    return (
        <div className="board-container">
            <Player />
            <Winner />
            <Reset />
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} key={uuidv4()} />
                ))}
            </div>
        </div>
    )
}