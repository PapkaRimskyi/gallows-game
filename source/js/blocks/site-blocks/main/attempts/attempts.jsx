/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import Attempt from './attempt/attempt';

export default function Attempts({ lifes }) {
  return (
    <div className="attempts-left">
      <ul className="attempts-left__list">
        {lifes.map((item, index) => <Attempt key={index} life={item} />)}
      </ul>
    </div>
  );
}

Attempts.propTypes = {
  lifes: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
