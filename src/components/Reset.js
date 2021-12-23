import React, { useContext } from "react";

import {GameContext} from '../contexts/GameContext';

export default function Reset() {
    const { setIsXNext, setSquares, setWhoIsWinner } = useContext(GameContext);
    
    function handleClick() {
        setSquares(Array(9).fill(null));
        setIsXNext(true);
        setWhoIsWinner('');
    }

    return ( 
        <p className="reset">
            <button type="button" onClick={handleClick}>Reset</button>
        </p>
    )
}