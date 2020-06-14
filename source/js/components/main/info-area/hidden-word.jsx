/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

import HiddenWordCell from './hidden-word-component/hidden-word-cell';

export default function HiddenWord(props) {
  const { buttonLetter, word } = props;
  return (
    <div className="play-area__hidden-word">
      <ul className="play-area__hidden-word-list">
        {word.split('').map((item, index) => <HiddenWordCell key={index} correctLetter={item.toUpperCase()} buttonLetter={buttonLetter ? buttonLetter.toUpperCase() : null} />)}
      </ul>
    </div>
  );
}
