import React from 'react';
import PropTypes from 'prop-types';

import timerDisplay from '../../../../utils/time';

export default function EndGamePopup({ gameEndStatus, gameInfo, reloadHandler }) {
  return (
    <section className="end-game-popup">
      <h2 className="end-game-popup__game-end-status">{gameEndStatus ? 'Победа' : 'Поражение'}</h2>
      <p className="end-game-popup__end-game-text">Потраченное время: <b>{timerDisplay(gameInfo.time)}</b>.</p>
      <p className="end-game-popup__end-game-text">Загаданное слово: <b>{gameInfo.word}</b>.</p>
      <button type="button" className="end-game-popup__new-game" onClick={reloadHandler}>Сыграть еще?</button>
    </section>
  );
}

EndGamePopup.propTypes = {
  gameEndStatus: PropTypes.bool.isRequired,
  gameInfo: PropTypes.shape({
    word: PropTypes.string.isRequired,
    time: PropTypes.number,
  }).isRequired,
  reloadHandler: PropTypes.func.isRequired,
};
