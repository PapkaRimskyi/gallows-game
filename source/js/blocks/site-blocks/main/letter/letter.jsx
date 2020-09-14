/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../../custom-hooks/use-previous';

import LetterButton from './letter-button/letter-button';

export default function Letter({ gameEndStatus, setPushedButtonLetter, LETTER_BUTTON_CLASS }) {
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const [letterCollection, setLetterCollection] = useState(null);
  const prevGameEndStatus = usePrevious(gameEndStatus);

  useEffect(() => {
    setLetterCollection(Array.from(document.querySelectorAll(`.${LETTER_BUTTON_CLASS}`)));
  }, []);

  // Удаление BGC у нажатых кнопок

  useEffect(() => {
    if (!gameEndStatus && prevGameEndStatus) {
      clearAllLetterBGC();
    }
  }, [gameEndStatus]);

  //

  function clearAllLetterBGC() {
    const pushedButtons = letterCollection.filter((button) => button.classList.contains(`${LETTER_BUTTON_CLASS}--correct`) || button.classList.contains(`${LETTER_BUTTON_CLASS}--wrong`));
    pushedButtons.forEach((button) => (button.classList.contains(`${LETTER_BUTTON_CLASS}--correct`)
      ? button.classList.remove(`${LETTER_BUTTON_CLASS}--correct`)
      : button.classList.remove(`${LETTER_BUTTON_CLASS}--wrong`)));
  }

  function lettersHandler(e) {
    if (e.target.tagName === 'BUTTON') {
      setPushedButtonLetter(e.target);
      e.target.disabled = true;
    }
  }

  return (
    <div className="letter">
      <ul className="letter__list" onClick={lettersHandler}>
        {alphabet.split('').map((letter) => <LetterButton key={letter} letter={letter.toUpperCase()} disabledStatus={gameEndStatus} />)}
      </ul>
    </div>
  );
}

Letter.propTypes = {
  gameEndStatus: PropTypes.bool.isRequired,
  setPushedButtonLetter: PropTypes.func.isRequired,
  LETTER_BUTTON_CLASS: PropTypes.string.isRequired,
};
