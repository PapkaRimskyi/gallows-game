/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function HumanFigure({ lifes }) {
  const [humanFigureElements, sethumanFigureElements] = useState(null);

  useEffect(() => {
    sethumanFigureElements(document.querySelector('.gallow-area__human-figure').children);
  }, []);

  useEffect(() => {
    const goneLifes = lifes.filter((life) => life === false);
    if (goneLifes.length !== 0) {
      humanFigureElements[goneLifes.length - 1].style.display = 'block';
    } else if (humanFigureElements) {
      Array.from(humanFigureElements).forEach((element) => {
        element.style.display = '';
      });
    }
  }, [lifes]);

  return (
    <svg className="gallow-area__human-figure" xmlns="http://www.w3.org/2000/svg" width="70" height="85" viewBox="0 0 70 85" fill="#ffffff">
      <g className="gallow-head gallow-area__human-element" strokeWidth="2" stroke="#000" fill="transparent">
        <circle r="12" cx="35" cy="17" />
        <line x1="28" y1="14" x2="32" y2="14" />
        <line x1="37" y1="14" x2="41" y2="14" />
        <line x1="30" y1="20" x2="39" y2="20" />
      </g>
      <g className="gallow-torso gallow-area__human-element" strokeWidth="3" stroke="#000">
        <line x1="35" y1="30" x2="35" y2="70" />
      </g>
      <g className="gallow-left-arm gallow-area__human-element" strokeWidth="3" stroke="#000">
        <line x1="36" y1="32" x2="20" y2="50" />
      </g>
      <g className="gallow-right-arm gallow-area__human-element" strokeWidth="3" stroke="#000">
        <line x1="35" y1="32" x2="50" y2="50" />
      </g>
      <g className="gallow-left-leg gallow-area__human-element" strokeWidth="3" stroke="#000">
        <line x1="36" y1="67" x2="20" y2="80" />
      </g>
      <g className="gallow-right-leg gallow-area__human-element" strokeWidth="3" stroke="#000">
        <line x1="35" y1="67" x2="50" y2="80" />
      </g>
    </svg>
  );
}

HumanFigure.propTypes = {
  lifes: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

// return (
//   <svg className="gallow-area__human-figure" xmlns="http://www.w3.org/2000/svg" width="70" height="85" viewBox="0 0 70 85" fill="#ffffff">
//     <g className="gallow-head" strokeWidth="2" stroke="#000" fill="transparent" style={lifes[0] ? { display: 'none' } : { display: 'block' }}>
//       <circle r="12" cx="35" cy="17" />
//       <line x1="28" y1="14" x2="32" y2="14" />
//       <line x1="37" y1="14" x2="41" y2="14" />
//       <line x1="30" y1="20" x2="39" y2="20" />
//     </g>
//     <g className="gallow-torso" strokeWidth="3" stroke="#000" style={lifes[1] ? { display: 'none' } : { display: 'block' }}>
//       <line x1="35" y1="30" x2="35" y2="70" />
//     </g>
//     <g className="gallow-left-arm" strokeWidth="3" stroke="#000" style={lifes[2] ? { display: 'none' } : { display: 'block' }}>
//       <line x1="36" y1="32" x2="20" y2="50" />
//     </g>
//     <g className="gallow-right-arm" strokeWidth="3" stroke="#000" style={lifes[3] ? { display: 'none' } : { display: 'block' }}>
//       <line x1="35" y1="32" x2="50" y2="50" />
//     </g>
//     <g className="gallow-left-leg" strokeWidth="3" stroke="#000" style={lifes[4] ? { display: 'none' } : { display: 'block' }}>
//       <line x1="36" y1="67" x2="20" y2="80" />
//     </g>
//     <g className="gallow-right-leg" strokeWidth="3" stroke="#000" style={lifes[5] ? { display: 'none' } : { display: 'block' }}>
//       <line x1="35" y1="67" x2="50" y2="80" />
//     </g>
//   </svg>
// );
