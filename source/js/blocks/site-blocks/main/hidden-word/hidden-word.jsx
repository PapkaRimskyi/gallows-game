/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import HiddenWordCell from './hidden-word-cell/hidden-word-cell';

export default function HiddenWord({ pushedButtonLetter, word, setLetterCells }) {
  return (
    <div className="hidden-word">
      <ul className="hidden-word__letter-list">
        {word.split('').map((item, index) => <HiddenWordCell key={index} setLetterCells={setLetterCells} correctLetter={item.toUpperCase()} pushedButtonLetter={pushedButtonLetter ? pushedButtonLetter.textContent.toUpperCase() : null} />)}
      </ul>
    </div>
  );
}

HiddenWord.propTypes = {
  pushedButtonLetter: PropTypes.objectOf(PropTypes.object),
  word: PropTypes.string.isRequired,
  setLetterCells: PropTypes.func.isRequired,
};

HiddenWord.defaultProps = {
  pushedButtonLetter: null,
};
