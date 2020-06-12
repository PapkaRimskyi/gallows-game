/* eslint-disable react/prop-types */
import React from 'react';

export default function StartGameButton(props) {
  const { buttonHandler } = props;
  return (
    <button className="game-main__start-game-button" type="button" onClick={buttonHandler}>Играть</button>
  );
}
