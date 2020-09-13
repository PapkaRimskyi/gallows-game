import React, { useState, useEffect } from 'react';

import GameTimer from '../game-timer/game-timer';
import HiddenWord from '../hidden-word/hidden-word';
import GallowArea from '../gallow-area/gallow-area';
import Attempts from '../attempts/attempts';
import Letter from '../letter/letter';
import EndGamePopup from '../../../universal-items/universal-blocks/end-game-popup/end-game-popup';

import randomNumber from '../../../../utils/randomNumber';

import wordCollection from './word-collection/word-collection';

export default function PlayArea() {
  const [hiddenWord, setHiddenWord] = useState('');
  const [currentButtonLetter, setCurrentButtonLetter] = useState(null);
  const [lifesLeft, changeLifesLeft] = useState([true, true, true, true, true, true]);
  const [gameEndStatus, setGameEndStatus] = useState(false);
  const [finalTime, setFinalTime] = useState(null);

  useEffect(() => {
    setHiddenWord(getRandomHiddenWord());
  }, []);

  // Проверка на совпадение между буквой у нажатой кнопки со всеми буквами в слове. Нет совпадений - минус жизнь.

  useEffect(() => {
    if (currentButtonLetter) {
      lifeControl(compareAnswer());
    }
  }, [currentButtonLetter]);

  //

  // Проверка жизней и если их не осталось - конец игры.

  useEffect(() => {
    if (!lifesLeft.find((item) => item !== false)) {
      setGameEndStatus(true);
    }
  }, [lifesLeft]);

  //

  function lifeControl(similarLetter) {
    if (similarLetter.length === 0) {
      const lifesCopy = lifesLeft.slice();
      lifesCopy.splice(lifesCopy.findIndex((item) => (item === true ? item : false)), 1, false);
      changeLifesLeft(lifesCopy);
    }
  }

  function compareAnswer() {
    return hiddenWord.split('').filter((item) => item.toUpperCase() === currentButtonLetter);
  }

  function getRandomHiddenWord() {
    return wordCollection[randomNumber(0, wordCollection.length - 1)];
  }

  function reloadButtonHandler() {
    setHiddenWord(getRandomHiddenWord());
    setCurrentButtonLetter(null);
    changeLifesLeft((prevState) => prevState.map((life) => !life));
    setGameEndStatus((prevState) => !prevState);
    setFinalTime(null);
  }

  return (
    <section className="play-area">
      <h2 className="visually-hidden">Игровая зона</h2>
      <GameTimer gameEndStatus={gameEndStatus} setFinalTime={setFinalTime} />
      <div className="play-area__game-area">
        <HiddenWord currentButtonLetter={currentButtonLetter} word={hiddenWord} />
        <GallowArea lifes={lifesLeft} />
        <Attempts lifes={lifesLeft} />
      </div>
      <Letter allButtonsDisabled={gameEndStatus} setCurrentButtonLetter={setCurrentButtonLetter} />
      {gameEndStatus ? <EndGamePopup gameEndStatus={gameEndStatus} gameInfo={{ word: hiddenWord, time: finalTime }} reloadHandler={reloadButtonHandler} /> : null}
    </section>
  );
}
