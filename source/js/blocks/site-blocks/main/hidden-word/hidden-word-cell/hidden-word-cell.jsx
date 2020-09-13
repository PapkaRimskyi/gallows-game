import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../../../custom-hooks/use-previous';

export default function HiddenWordCell({ correctLetter, currentButtonLetter }) {
  const [answer, setAnswer] = useState(null);
  const prevCurrentButtonLetter = usePrevious(currentButtonLetter);

  // Очистка полей угаданных букв, когда происходит инициализация следующей игры

  useEffect(() => {
    if (prevCurrentButtonLetter && !currentButtonLetter) {
      setAnswer(null);
    }
  }, [currentButtonLetter]);

  //

  // Если буква клетки равна букве нажатой кнопки - записывается ответ в стейт.

  useEffect(() => {
    if (correctLetter === currentButtonLetter && Boolean(!answer)) {
      setAnswer(currentButtonLetter);
    }
  }, [currentButtonLetter]);

  //

  return (
    <li className="hidden-word__letter-item">{answer || null}</li>
  );
}

HiddenWordCell.propTypes = {
  correctLetter: PropTypes.string.isRequired,
  currentButtonLetter: PropTypes.string,
};

HiddenWordCell.defaultProps = {
  currentButtonLetter: null,
};
