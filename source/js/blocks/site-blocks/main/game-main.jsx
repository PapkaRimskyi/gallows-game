import React, { useState } from 'react';

import PlayArea from './play-area/play-area';

import StartGameButton from '../../universal-items/universal-buttons/start-game/start-game';

export default function Main() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  function startGameHandler(e) {
    e.preventDefault();
    setIsGameStarted(true);
  }

  return (
    <main className="game-main">
      {isGameStarted ? <PlayArea /> : <StartGameButton buttonHandler={startGameHandler} />}
    </main>
  );
}
