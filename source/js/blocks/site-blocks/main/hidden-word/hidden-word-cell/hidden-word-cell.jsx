import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../../../custom-hooks/use-previous';

export default function HiddenWordCell({ correctLetter, pushedButtonLetter, setLetterCells }) {
  const [answer, setAnswer] = useState(null);
  const prevCurrentButtonLetter = usePrevious(pushedButtonLetter);

  // Очистка полей угаданных букв, когда происходит инициализация следующей игры

  useEffect(() => {
    if (prevCurrentButtonLetter && !pushedButtonLetter) {
      setAnswer(null);
    }
  }, [pushedButtonLetter]);

  //

  // Если буква клетки равна букве нажатой кнопки - записывается ответ в стейт.

  useEffect(() => {
    if (correctLetter === pushedButtonLetter && Boolean(!answer)) {
      setAnswer(pushedButtonLetter);
    }
  }, [pushedButtonLetter]);

  //

  useEffect(() => {
    if (answer) {
      setLetterCells(Array.from(document.querySelectorAll('.hidden-word__letter-item')));
    }
  }, [answer]);

  return (
    <li className="hidden-word__letter-item">{answer || null}</li>
  );
}

HiddenWordCell.propTypes = {
  correctLetter: PropTypes.string.isRequired,
  pushedButtonLetter: PropTypes.string,
  setLetterCells: PropTypes.func.isRequired,
};

HiddenWordCell.defaultProps = {
  pushedButtonLetter: null,
};
