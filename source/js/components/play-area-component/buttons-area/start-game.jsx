import React from 'react';

export default function StartGameButton(props) {
  // eslint-disable-next-line react/prop-types
  const { buttonHandler } = props;
  return (
    <button className="game-main__start-game-button" type="button" onClick={buttonHandler}>Играть</button>
  );
}
