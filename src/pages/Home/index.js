import React from 'react';

import GameContextProvider from '../../contexts/GameContext';
import Board from '../../components/Board';

import './index.css';

export default function Home() {
  return (
      <GameContextProvider>
          <Board />
      </GameContextProvider>
  );
}
