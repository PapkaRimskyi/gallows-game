import React from 'react';
import randomNumber from '../../randomNumber';

import StartGameButton from './buttons-area/start-game';

import HiddenWord from './info-area/hidden-word';
import GallowArea from './info-area/gallow-area';
import Attempts from './info-area/attempts';

export default class PlayArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGameStarted: false };

    this.wordsForGame = ['дружба', 'пляж', 'солнце', 'луна', 'спутник', 'механизм', 'человек'];

    this.startGameButtonHandler = this.startGameButtonHandler.bind(this);
  }

  getRandomWord() {
    return this.wordsForGame[randomNumber(0, this.wordsForGame.length - 1)];
  }

  startGameButtonHandler(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isGameStarted: !prevState.isGameStarted }));
  }

  render() {
    const { isGameStarted } = this.state;

    if (isGameStarted) {
      return (
        <section className="play-area">
          <h2 className="visually-hidden">Игровая зона</h2>
          <div className="play-area__game-area">
            <HiddenWord word={this.getRandomWord()} />
            <GallowArea />
            <Attempts />
          </div>
        </section>
      );
    }
    return (
      <StartGameButton buttonHandler={this.startGameButtonHandler} />
    );
  }
}
