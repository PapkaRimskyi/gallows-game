import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import usePrevious from '../../../../../custom-hooks/use-previous';

export default function HiddenWordCell({ correctLetter, pushedLetter }) {
  const [rightAnswer, setRightAnswer] = useState(null);
  const prevPushedLetter = usePrevious(pushedLetter);

  // Проверяет букву нажатой кнопки. Если правильного ответа не было и correctLetter равен pushedLetter, то идет запись в стейт и в клетку добавляется буква.

  useEffect(() => {
    if (!rightAnswer && correctLetter.toUpperCase() === pushedLetter) {
      setRightAnswer(pushedLetter);
    }
  }, [pushedLetter]);

  //

  // Если предыдущая буква присутствует, а нынешняя нет - это значит, что игра была начата заново. Значит происходит стирание старых значений полей.

  useEffect(() => {
    if (prevPushedLetter && !pushedLetter) {
      setRightAnswer(null);
    }
  }, [pushedLetter]);

  //

  return (
    <li className="hidden-word__letter-item">{rightAnswer || null}</li>
  );
}

HiddenWordCell.propTypes = {
  correctLetter: PropTypes.string.isRequired,
  pushedLetter: PropTypes.string,
};

HiddenWordCell.defaultProps = {
  pushedLetter: null,
};
