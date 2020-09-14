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
  const LETTER_BUTTON_CLASS = 'letter__button';
  const [hiddenWord, setHiddenWord] = useState('');
  const [pushedButtonLetter, setPushedButtonLetter] = useState(null);
  const [lifesLeft, changeLifesLeft] = useState([true, true, true, true, true, true]);
  const [gameEndStatus, setGameEndStatus] = useState(false);
  const [finalTime, setFinalTime] = useState(null);
  const [letterCells, setLetterCells] = useState(null);
  const [winOrLose, setWinOrLose] = useState(null);

  useEffect(() => {
    setHiddenWord(getRandomHiddenWord());
  }, []);

  // Проверка на совпадение между буквой у нажатой кнопки со всеми буквами в слове. Нет совпадений - минус жизнь.

  useEffect(() => {
    if (pushedButtonLetter) {
      lifeControl(compareAnswer());
    }
  }, [pushedButtonLetter]);

  //

  // Если не осталось жизней - конец игры. Если все ячейки заполнены буквами - победа.

  useEffect(() => {
    if (!lifesLeft.find((item) => item !== false)) {
      setGameEndStatus(true);
      setWinOrLose(false);
    } else if (letterCells && letterCells.filter((cell) => cell.textContent).length === hiddenWord.split('').length) {
      setGameEndStatus(true);
      setWinOrLose(true);
    }
  }, [lifesLeft, letterCells]);

  //

  function lifeControl(similarLetter) {
    if (similarLetter.length === 0) {
      const lifesCopy = lifesLeft.slice();
      lifesCopy.splice(lifesCopy.findIndex((item) => (item === true ? item : false)), 1, false);
      changeLifesLeft(lifesCopy);
      addColorToButton(false);
    } else {
      addColorToButton();
    }
  }

  function compareAnswer() {
    return hiddenWord.split('').filter((item) => item.toUpperCase() === pushedButtonLetter.textContent);
  }

  function getRandomHiddenWord() {
    return wordCollection[randomNumber(0, wordCollection.length - 1)];
  }

  function reloadButtonHandler() {
    setHiddenWord(getRandomHiddenWord());
    setPushedButtonLetter(null);
    changeLifesLeft((prevState) => prevState.map((life) => (life === true ? life : true)));
    setGameEndStatus((prevState) => !prevState);
    setLetterCells(null);
    setFinalTime(null);
    setWinOrLose(null);
  }

  // Добавление BGC нажатой кнопке. Верный ответ - зеленый цвет. Или красный. Очищение BGC у нажатых кнопок происходит в Letter компоненте.

  function addColorToButton(answer = true) {
    pushedButtonLetter.classList.add(answer ? `${LETTER_BUTTON_CLASS}--correct` : `${LETTER_BUTTON_CLASS}--wrong`);
  }

  //

  return (
    <section className="play-area">
      <h2 className="visually-hidden">Игровая зона</h2>
      <GameTimer gameEndStatus={gameEndStatus} setFinalTime={setFinalTime} />
      <div className="play-area__game-area">
        <HiddenWord pushedButtonLetter={pushedButtonLetter} word={hiddenWord} setLetterCells={setLetterCells} />
        <GallowArea lifes={lifesLeft} />
        <Attempts lifes={lifesLeft} />
      </div>
      <Letter gameEndStatus={gameEndStatus} setPushedButtonLetter={setPushedButtonLetter} LETTER_BUTTON_CLASS={LETTER_BUTTON_CLASS} />
      {gameEndStatus ? <EndGamePopup gameInfo={{ word: hiddenWord, time: finalTime, gameStatus: winOrLose }} reloadHandler={reloadButtonHandler} /> : null}
    </section>
  );
}
