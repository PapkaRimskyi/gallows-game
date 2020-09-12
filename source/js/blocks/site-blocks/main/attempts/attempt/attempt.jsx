import React from 'react';
import PropTypes from 'prop-types';

export default function Attempt({ live }) {
  return (
    <li className="attempts-left__item">
      <svg className="attempts-left__health" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="#d75a4a" style={live ? { fill: 'rgb(215, 90, 74)' } : { fill: 'rgb(0, 0, 0)' }}>
        <use xlinkHref="#health" />
      </svg>
    </li>
  );
}

Attempt.propTypes = {
  live: PropTypes.bool.isRequired,
};
