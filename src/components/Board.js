import React, { useContext } from "react";

import {GameContext} from '../contexts/GameContext';
import Square from "./Square";

export default function Board() {
    const { squares } = useContext(GameContext);
    
    return (
        <div className="board-container">
            <div className="board">
                {squares.map((value, index) => (
                    <Square value={value} index={index} />
                ))}
            </div>
        </div>
    )
}