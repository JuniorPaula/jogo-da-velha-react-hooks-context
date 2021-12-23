import React, { useContext } from "react";

import {GameContext} from '../contexts/GameContext';

export default function Board() {
    const context = useContext(GameContext);
    
    return <h1>Board</h1>
}