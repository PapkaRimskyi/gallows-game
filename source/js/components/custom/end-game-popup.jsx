/* eslint-disable react/prop-types */
import React from 'react';

import timerDisplay from '../../support-methods/time';

export default function EndGamePopup(props) {
  const { gameEndStatus, gameInfo, reloadHandler } = props;
  return (
    <section className="end-game-popup">
      <h2 className="end-game-popup__game-end-status">{gameEndStatus ? 'Победа' : 'Поражение'}</h2>
      <p className="end-game-popup__end-game-text">Потраченное время: <b>{timerDisplay(gameInfo.time)}</b>.</p>
      <p className="end-game-popup__end-game-text">Загаданное слово: <b>{gameInfo.word}</b>.</p>
      <button type="button" className="end-game-popup__new-game" onClick={reloadHandler}>Сыграть еще?</button>
    </section>
  );
}
