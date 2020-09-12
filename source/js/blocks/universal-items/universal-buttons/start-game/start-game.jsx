import React from 'react';
import PropTypes from 'prop-types';

export default function StartGameButton({ buttonHandler }) {
  return (
    <button className="game-main__start-game-button" type="button" onClick={buttonHandler}>Играть</button>
  );
}

StartGameButton.propTypes = {
  buttonHandler: PropTypes.func.isRequired,
};
