/* eslint-disable react/prop-types */
import React from 'react';

export default function Attempts(props) {
  const { live } = props;
  return (
    <li className="play-area__attempts-left-item">
      <svg className="play-area__attempts-left-health" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="#d75a4a" style={live ? { fill: 'rgb(215, 90, 74)' } : { fill: 'rgb(0, 0, 0)' }}>
        <use xlinkHref="#health" />
      </svg>
    </li>
  );
}
