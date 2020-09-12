import React from 'react';
import PropTypes from 'prop-types';

export default function LetterButton({ letter, disabledStatus }) {
  return (
    <li className="letter__item">
      <button className="letter__button" type="button" disabled={disabledStatus}>{letter}</button>
    </li>
  );
}

LetterButton.propTypes = {
  letter: PropTypes.string.isRequired,
  disabledStatus: PropTypes.bool.isRequired,
};
