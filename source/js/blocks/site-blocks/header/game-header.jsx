import React, { useState } from 'react';

import RulesPopup from '../../universal-items/universal-blocks/rules-popup/rules-popup';

export default function Header() {
  const [rulesPopupStatus, setRulesPopupStatus] = useState(false);

  function rulesPopupHandler(e) {
    e.preventDefault();
    setRulesPopupStatus((prevState) => !prevState);
  }

  return (
    <header className="game-header">
      <div className="game-header__container">
        <h1 className="game-header__game-name">Виселица</h1>
        <button className="game-header__game-rules-button" type="button" onClick={rulesPopupHandler}>Правила игры</button>
        {rulesPopupStatus && <RulesPopup />}
      </div>
    </header>
  );
}
