import React, { useContext } from "react";

import {GameContext} from '../contexts/GameContext';
import Square from "./Square";
import Player from "./Player";
import Reset from "./Reset";

export default function Board() {
    const { squares } = useContext(GameContext);
    
    return (
        <div className="board-container">
            <Player />
            <Reset />
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} />
                ))}
            </div>
        </div>
    )
}