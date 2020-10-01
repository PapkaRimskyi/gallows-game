/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import HiddenWordCell from './hidden-word-cell/hidden-word-cell';

export default function HiddenWord({ hiddenWord, pushedLetter }) {
  return (
    <div className="hidden-word">
      <ul className="hidden-word__letter-list">
        {hiddenWord.split('').map((item, index) => <HiddenWordCell key={index} correctLetter={item.toUpperCase()} pushedLetter={pushedLetter} />)}
      </ul>
    </div>
  );
}

HiddenWord.propTypes = {
  hiddenWord: PropTypes.string.isRequired,
  pushedLetter: PropTypes.string,
};

HiddenWord.defaultProps = {
  pushedLetter: null,
};
