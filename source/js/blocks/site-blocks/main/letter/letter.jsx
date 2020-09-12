/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import LetterButton from './letter-button/letter-button';

export default function Letter({ allButtonsDisabled, setCurrentButtonLetter }) {
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

  function lettersHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      setCurrentButtonLetter(e.target.textContent);
      e.target.disabled = true;
    }
  }

  return (
    <div className="letter">
      <ul className="letter__list" onClick={lettersHandler}>
        {alphabet.split('').map((letter) => <LetterButton key={letter} letter={letter.toUpperCase()} disabledStatus={allButtonsDisabled} />)}
      </ul>
    </div>
  );
}

Letter.propTypes = {
  allButtonsDisabled: PropTypes.bool.isRequired,
  setCurrentButtonLetter: PropTypes.func.isRequired,
};
