/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LetterButton from './letter-button/letter-button';

export default function Letter({ setPressedLetter, endGame }) {
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';

  // Так как во время первого запуска endGame === false - происходит возвращение функции размонтирования.
  // Возвращенная функция сработает перед следующим запуском useEffect (когда поменяется стейт endGame). Потом сработает useEffect(по условию) и опять вернется функция размонтирования.
  // Когда будет нажата кнопка "Сыграть еще?" запустится возвращенная функция, потом, так как endGame === false, условие не сработает и опять вернется функция размонтирования.

  useEffect(() => {
    if (endGame) {
      disableButtons(true);
    }
    return () => {
      disableButtons(false);
    };
  }, [endGame]);

  // Делегирование кнопок с буквами. Запись нажатой кнопки в стейт. Блокировка кнопки.

  function listButtonHandler(e) {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
      setPressedLetter(e.target.id);
      e.target.disabled = true;
    }
  }

  //

  function disableButtons(status) {
    Array.from(document.querySelectorAll('.letter__button')).forEach((button) => {
      // eslint-disable-next-line no-param-reassign
      button.disabled = status;
    });
  }

  return (
    <div className="letter">
      <ul className="letter__list" onClick={listButtonHandler}>
        {alphabet.split('').map((letter) => <LetterButton key={letter} letter={letter.toUpperCase()} />)}
      </ul>
    </div>
  );
}

Letter.propTypes = {
  setPressedLetter: PropTypes.func.isRequired,
  endGame: PropTypes.bool.isRequired,
};
