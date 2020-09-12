import React from 'react';
import PropTypes from 'prop-types';

export default function GallowArea({ lifes }) {
  return (
    <div className="gallow-area">
      <svg className="gallow-area__human-figure" xmlns="http://www.w3.org/2000/svg" width="70" height="85" viewBox="0 0 70 85" fill="#ffffff">
        <g className="gallow-head" strokeWidth="2" stroke="#000" fill="transparent" style={lifes[0] ? { display: 'none' } : { display: 'block' }}>
          <circle r="12" cx="35" cy="17" />
          <line x1="28" y1="14" x2="32" y2="14" />
          <line x1="37" y1="14" x2="41" y2="14" />
          <line x1="30" y1="20" x2="39" y2="20" />
        </g>
        <g className="gallow-torso" strokeWidth="3" stroke="#000" style={lifes[1] ? { display: 'none' } : { display: 'block' }}>
          <line x1="35" y1="30" x2="35" y2="70" />
        </g>
        <g className="gallow-left-arm" strokeWidth="3" stroke="#000" style={lifes[2] ? { display: 'none' } : { display: 'block' }}>
          <line x1="36" y1="32" x2="20" y2="50" />
        </g>
        <g className="gallow-right-arm" strokeWidth="3" stroke="#000" style={lifes[3] ? { display: 'none' } : { display: 'block' }}>
          <line x1="35" y1="32" x2="50" y2="50" />
        </g>
        <g className="gallow-left-leg" strokeWidth="3" stroke="#000" style={lifes[4] ? { display: 'none' } : { display: 'block' }}>
          <line x1="36" y1="67" x2="20" y2="80" />
        </g>
        <g className="gallow-right-leg" strokeWidth="3" stroke="#000" style={lifes[5] ? { display: 'none' } : { display: 'block' }}>
          <line x1="35" y1="67" x2="50" y2="80" />
        </g>
      </svg>
      <svg className="gallow-area__gallow" width="150" height="150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref="#gallow" />
      </svg>
    </div>
  );
}

GallowArea.propTypes = {
  lifes: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
