import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../../custom-hooks/use-previous';

import timerDisplay from '../../../../utils/time';

export default function GameTimer({ gameEndStatus, setFinalTime }) {
  const [gameTime, setGameTime] = useState(0);
  const [timerID, setTimerID] = useState(null);
  const prevGameEndStatus = usePrevious(gameEndStatus);

  useEffect(() => {
    timerStart();
  }, []);

  useEffect(() => {
    if (prevGameEndStatus !== gameEndStatus) {
      if (gameEndStatus) {
        clearTimer();
      } else {
        setGameTime(0);
        timerStart();
      }
    }
  }, [gameEndStatus]);

  function timerStart() {
    setTimerID(setInterval(() => setGameTime((prevState) => prevState + 1), 1000));
  }

  function clearTimer() {
    clearInterval(timerID);
    setFinalTime(gameTime);
  }

  return (
    <span className="game-timer">{timerDisplay(gameTime)}</span>
  );
}

GameTimer.propTypes = {
  gameEndStatus: PropTypes.bool.isRequired,
  setFinalTime: PropTypes.func.isRequired,
};
