/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import HiddenWordCell from './hidden-word-cell/hidden-word-cell';

export default function HiddenWord({ currentButtonLetter, word }) {
  return (
    <div className="hidden-word">
      <ul className="hidden-word__letter-list">
        {word.split('').map((item, index) => <HiddenWordCell key={index} correctLetter={item.toUpperCase()} currentButtonLetter={currentButtonLetter ? currentButtonLetter.toUpperCase() : null} />)}
      </ul>
    </div>
  );
}

HiddenWord.propTypes = {
  currentButtonLetter: PropTypes.string,
  word: PropTypes.string.isRequired,
};

HiddenWord.defaultProps = {
  currentButtonLetter: null,
};
