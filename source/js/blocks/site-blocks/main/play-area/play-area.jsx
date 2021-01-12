import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import GameTimer from '../game-timer/game-timer';
import HiddenWord from '../hidden-word/hidden-word';
import GallowArea from '../gallow-area/gallow-area';
import Attempts from '../attempts/attempts';
import Letter from '../letter/letter';
import EndGamePopup from '../../../universal-items/universal-blocks/end-game-popup/end-game-popup';

import randomNumber from '../../../../utils/random-number';

import wordCollection from '../../../../mock/word-collection/word-collection';

export default function PlayArea({ hiddenWord, setHiddenWord, lifes, changeLifesLeft, restoreAllLife, finalTime, setFinalTime, pressedLetterID, setPressedLetter, countWords, setCountWords }) {
  const LETTER_BUTTON_CLASS = 'letter__button';
  const [endGame, setEndGame] = useState(false);

  // Считаю количество угаданных букв. Для этого использую match, чтобы найти все похожие буквы в слове. Если совпадений нет, то запускаю функцию вычета жизни.

  useEffect(() => {
    if (pressedLetterID) {
      const regExp = new RegExp(pressedLetterID, 'gi');
      const matchResult = hiddenWord.match(regExp);
      if (!matchResult) {
        lifeStatus();
      } else {
        setCountWords(matchResult.length);
      }
      setButtonBackgroundColor(matchResult || false, pressedLetterID);
    }
  }, [pressedLetterID]);

  //

  // Если жизней не осталось - конец игры.

  useEffect(() => {
    if (!lifes.find((item) => (item === true ? item : false))) {
      setEndGame(true);
    }
  }, [lifes]);

  //

  // Проверяю, все ли буквы были отгаданы. Сравнивает число отгаданных букв и длинну загаданного слова.

  useEffect(() => {
    if (pressedLetterID && countWords === hiddenWord.length) {
      setEndGame(true);
    }
  }, [countWords]);

  //

  // Функция, которая вычитает жизни, если они остались.

  function lifeStatus() {
    if (lifes.find((item) => (item === true ? item : false))) {
      changeLifesLeft();
    }
  }

  // Задаю цвет кнопке в зависимости от правильности ответа.

  function setButtonBackgroundColor(bool, buttonID) {
    document.getElementById(buttonID).classList.add(bool ? `${LETTER_BUTTON_CLASS}--correct` : `${LETTER_BUTTON_CLASS}--wrong`);
  }

  //

  // Сброс backgroundColor у кнопок при начале новой игры.

  function clearButtonBackgroundColor() {
    const pushedButtons = Array.from(document.querySelectorAll(`.${LETTER_BUTTON_CLASS}`))
      .filter((button) => button.classList.contains(`${LETTER_BUTTON_CLASS}--correct`) || button.classList.contains(`${LETTER_BUTTON_CLASS}--wrong`));
    pushedButtons.forEach((button) => (button.classList.contains(`${LETTER_BUTTON_CLASS}--correct`)
      ? button.classList.remove(`${LETTER_BUTTON_CLASS}--correct`)
      : button.classList.remove(`${LETTER_BUTTON_CLASS}--wrong`)));
  }

  //

  // Сброс всех значений для начала новой игры.
  // Чтобы не создавать лишний экшн, я использую setCountWords для сбрасывания, отправляя туда отрицательное значение, чтобы в экшене посчиталось до 0.

  function reloadGameHandler() {
    setEndGame(false);
    setHiddenWord(wordCollection[randomNumber(0, wordCollection.length - 1)]);
    restoreAllLife();
    setPressedLetter(null);
    setCountWords(countWords * (-1));
    setFinalTime(0);
    clearButtonBackgroundColor();
  }

  //

  return (
    <section className="play-area">
      <h2 className="visually-hidden">Игровая зона</h2>
      <GameTimer endGame={endGame} setFinalTime={setFinalTime} />
      <div className="play-area__game-area">
        <HiddenWord hiddenWord={hiddenWord} pushedLetter={pressedLetterID} />
        <GallowArea lifes={lifes} />
        <Attempts lifes={lifes} />
      </div>
      <Letter setPressedLetter={setPressedLetter} endGame={endGame} LETTER_BUTTON_CLASS={LETTER_BUTTON_CLASS} />
      {endGame ? <EndGamePopup gameInfo={{ gameStatus: countWords === hiddenWord.length, time: finalTime, word: hiddenWord }} reloadGameHandler={reloadGameHandler} /> : null}
    </section>
  );
}

PlayArea.propTypes = {
  hiddenWord: PropTypes.string.isRequired,
  setHiddenWord: PropTypes.func.isRequired,
  lifes: PropTypes.arrayOf(PropTypes.bool).isRequired,
  changeLifesLeft: PropTypes.func.isRequired,
  restoreAllLife: PropTypes.func.isRequired,
  finalTime: PropTypes.number.isRequired,
  setFinalTime: PropTypes.func.isRequired,
  pressedLetterID: PropTypes.string,
  setPressedLetter: PropTypes.func.isRequired,
  countWords: PropTypes.number.isRequired,
  setCountWords: PropTypes.func.isRequired,
};

PlayArea.defaultProps = {
  pressedLetterID: null,
};
