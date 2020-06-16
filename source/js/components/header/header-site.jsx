/* eslint-disable react/prop-types */
import React from 'react';

import RulesPopup from '../custom/rules-popup';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.rulesPopupClass = 'game-header__game-rules-popup';
    this.rulesPopupHandler = this.rulesPopupHandler.bind(this);
  }

  rulesPopupHandler(e) {
    e.preventDefault();
    document.querySelector(`.${this.rulesPopupClass}`).classList.toggle(`${this.rulesPopupClass}--opened`);
  }

  render() {
    return (
      <div className="game-header__container">
        <h1 className="game-header__game-name">Виселица</h1>
        <button className="game-header__game-rules-button" type="button" onClick={this.rulesPopupHandler}>Правила игры</button>
        <RulesPopup />
      </div>
    );
  }
}
