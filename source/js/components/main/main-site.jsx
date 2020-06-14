/* eslint-disable react/destructuring-assignment */
import React from 'react';
import randomNumber from '../../support-methods/randomNumber';

import StartGameButton from './buttons-area/start-game';

import HiddenWord from './info-area/hidden-word';
import GallowArea from './info-area/gallow-area';
import Attempts from './info-area/attempts';
import GameTimer from '../custom/game-timer';
import EndGamePopup from './buttons-area/end-game';

import LetterButtons from './buttons-area/letter-buttons';

export default class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameStarted: false,
      hiddenWord: null,
      livesLeft: [true, true, true, true, true, true],
      currentButtonLetter: false,
      allButtonsDisabled: false,
      stopTimer: false,
      gameEndStatus: null,
    };

    this.wordsForGame = ['дружба', 'пляж', 'солнце', 'луна', 'спутник', 'механизм', 'человек'];
    this.timeGame = null;
    this.alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

    this.startGameButtonHandler = this.startGameButtonHandler.bind(this);
    this.buttonLettersDelegationHandler = this.buttonLettersDelegationHandler.bind(this);
    this.getTimeGame = this.getTimeGame.bind(this);
    this.reloadButtonHandler = this.reloadButtonHandler.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const { gameStatus } = this.state;
    if (gameStatus !== prevState.isGameStarted) {
      document.querySelector('.play-area__letter-list-container').addEventListener('click', this.buttonLettersDelegationHandler);
    }
  }

  getTimeGame(time) {
    this.timeGame = time;
  }

  endOfGame(letterCellCollection) {
    const { livesLeft } = this.state;
    if (letterCellCollection.filter((item) => item.textContent).length === letterCellCollection.length || livesLeft.filter((live) => live).length === 0) {
      this.setState((prevState) => ({ allButtonsDisabled: !prevState.allButtonsDisabled, stopTimer: !prevState.stopTimer }));
      if (livesLeft.filter((live) => live).length === 0) {
        this.setState(() => ({ gameEndStatus: false }));
      } else {
        this.setState(() => ({ gameEndStatus: true }));
      }
    }
  }

  checkCells(buttonLetter) {
    const letterCellCollection = Array.from(document.querySelectorAll('.play-area__hidden-word-list-item'));
    const cellWithLetter = letterCellCollection.filter((item) => (item.textContent === buttonLetter ? item : false));
    if (cellWithLetter.length === 0) {
      const lives = this.state.livesLeft.slice();
      lives.splice(lives.findIndex((item) => (item === true ? item : false)), 1, false);
      this.setState(() => ({ livesLeft: lives }));
    }
    this.endOfGame(letterCellCollection);
  }

  startGameButtonHandler(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isGameStarted: !prevState.isGameStarted, hiddenWord: this.wordsForGame[randomNumber(0, this.wordsForGame.length - 1)] }));
  }

  compareWord(buttonLetter) {
    this.setState(() => ({ currentButtonLetter: buttonLetter }));
    this.checkCells(buttonLetter);
  }

  buttonLettersDelegationHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      e.target.disabled = true;
      this.compareWord(e.target.textContent);
    }
  }

  reloadButtonHandler(e) {
    e.preventDefault();
    this.setState((prevState) => (
      {
        hiddenWord: this.wordsForGame[randomNumber(0, this.wordsForGame.length - 1)],
        currentButtonLetter: !prevState.currentButtonLetter,
        livesLeft: [...prevState.livesLeft.map((live) => (live === true ? live : !live))],
        allButtonsDisabled: !prevState.allButtonsDisabled,
        stopTimer: !prevState.stopTimer,
        gameEndStatus: null,
      }
    ));
  }

  render() {
    const {
      isGameStarted, stopTimer, gameEndStatus, hiddenWord,
    } = this.state;
    if (isGameStarted) {
      const { livesLeft, currentButtonLetter, allButtonsDisabled } = this.state;
      return (
        <section className="play-area">
          <h2 className="visually-hidden">Игровая зона</h2>
          <GameTimer stopTimer={stopTimer} getTimeGame={this.getTimeGame} />
          <div className="play-area__game-area">
            <HiddenWord word={hiddenWord} buttonLetter={currentButtonLetter} />
            <GallowArea lives={livesLeft} />
            <Attempts lives={livesLeft} />
          </div>
          <div className="play-area__letter-list-container">
            <ul className="play-area__letter-list">
              {this.alphabet.split('').map((letter) => <LetterButtons key={letter} letter={letter.toUpperCase()} disabledStatus={allButtonsDisabled} />)}
            </ul>
          </div>
          {stopTimer ? <EndGamePopup gameEndStatus={gameEndStatus} gameInfo={{ word: hiddenWord, time: this.timeGame }} reloadHandler={this.reloadButtonHandler} /> : null}
        </section>
      );
    }
    return (
      <StartGameButton buttonHandler={this.startGameButtonHandler} />
    );
  }
}
