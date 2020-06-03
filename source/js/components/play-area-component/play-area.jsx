/* eslint-disable react/destructuring-assignment */
import React from 'react';
import randomNumber from '../../randomNumber';

import StartGameButton from './buttons-area/start-game';

import HiddenWord from './info-area/hidden-word';
import GallowArea from './info-area/gallow-area';
import Attempts from './info-area/attempts';

import LetterButtons from './buttons-area/letter-buttons';

export default class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameStarted: false, livesLeft: [true, true, true, true, true, true], currentButtonLetter: null, allButtonsDisabled: false,
    };

    this.wordsForGame = ['дружба', 'пляж', 'солнце', 'луна', 'спутник', 'механизм', 'человек'];
    this.hiddenWord = null;
    this.alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

    this.startGameButtonHandler = this.startGameButtonHandler.bind(this);
    this.buttonLettersDelegationHandler = this.buttonLettersDelegationHandler.bind(this);
  }

  componentDidMount() {
    this.getRandomHiddenWord();
  }

  componentDidUpdate(prevProps, prevState) {
    const { gameStatus } = this.state;
    if (gameStatus !== prevState.isGameStarted) {
      document.querySelector('.play-area__letter-list-container').addEventListener('click', this.buttonLettersDelegationHandler);
    }
  }

  getRandomHiddenWord() {
    this.hiddenWord = this.wordsForGame[randomNumber(0, this.wordsForGame.length - 1)];
  }

  endOfGame(letterCellCollection) {
    if (letterCellCollection.filter((item) => item.textContent).length === letterCellCollection.length) {
      this.setState((prevState) => ({ allButtonsDisabled: !prevState.allButtonsDisabled }));
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
    this.setState((prevState) => ({ isGameStarted: !prevState.isGameStarted }));
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

  render() {
    const { isGameStarted } = this.state;
    if (isGameStarted) {
      const { livesLeft, currentButtonLetter, allButtonsDisabled } = this.state;
      return (
        <section className="play-area">
          <h2 className="visually-hidden">Игровая зона</h2>
          <div className="play-area__game-area">
            <HiddenWord word={this.hiddenWord} buttonLetter={currentButtonLetter} />
            <GallowArea lives={livesLeft} />
            <Attempts lives={livesLeft} />
          </div>
          <div className="play-area__letter-list-container">
            <ul className="play-area__letter-list">
              {this.alphabet.split('').map((letter) => <LetterButtons key={letter} letter={letter.toUpperCase()} disabledStatus={allButtonsDisabled} />)}
            </ul>
          </div>
        </section>
      );
    }
    return (
      <StartGameButton buttonHandler={this.startGameButtonHandler} />
    );
  }
}
