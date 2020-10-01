import React from 'react';
import PropTypes from 'prop-types';

export default function LetterButton({ letter }) {
  return (
    <li className="letter__item">
      <button className="letter__button" id={letter} type="button">{letter}</button>
    </li>
  );
}

LetterButton.propTypes = {
  letter: PropTypes.string.isRequired,
};
