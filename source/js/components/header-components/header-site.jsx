/* eslint-disable react/prop-types */
import React from 'react';

import RulesPopup from './popup-components/rules-component';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { popupStatus: false };

    this.rulesPopupHandler = this.rulesPopupHandler.bind(this);
  }

  rulesPopupHandler(e) {
    e.preventDefault();
    this.setState((prevState) => ({ popupStatus: !prevState.popupStatus }));
  }

  render() {
    const { popupStatus } = this.state;
    return (
      <div className="game-header__container">
        <h1 className="game-header__game-name">Виселица</h1>
        <button className="game-header__game-rules-button" type="button" onClick={this.rulesPopupHandler}>Правила игры</button>
        {popupStatus === true ? <RulesPopup /> : ''}
      </div>
    );
  }
}
