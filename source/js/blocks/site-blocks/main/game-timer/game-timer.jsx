import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import timerDisplay from '../../../../utils/time';

export default function GameTimer({ endGame, setFinalTime }) {
  const [gameTime, setGameTime] = useState(0);
  const [timerID, setTimerID] = useState(null);

  // Когда игра закончится - таймер сбросится.

  useEffect(() => {
    if (endGame) {
      clearTimer();
    } else {
      setGameTime(0);
      timerStart();
    }
  }, [endGame]);

  //

  // Запуск таймера

  function timerStart() {
    setTimerID(setInterval(() => setGameTime((prevState) => prevState + 1), 1000));
  }

  //

  // Очистка таймера

  function clearTimer() {
    clearInterval(timerID);
    setFinalTime(gameTime);
  }

  //

  return (
    <span className="game-timer">{timerDisplay(gameTime)}</span>
  );
}

GameTimer.propTypes = {
  endGame: PropTypes.bool.isRequired,
  setFinalTime: PropTypes.func.isRequired,
};
