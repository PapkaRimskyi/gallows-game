/* eslint-disable react/prop-types */
import React from 'react';

export default function LetterButton(props) {
  const { letter, disabledStatus } = props;
  return (
    <li className="play-area__letter-list-item">
      <button className="play-area__letter-list-button" type="button" disabled={disabledStatus}>{letter}</button>
    </li>
  );
}
