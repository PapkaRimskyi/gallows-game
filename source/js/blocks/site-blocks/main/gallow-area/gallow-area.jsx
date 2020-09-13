import React from 'react';
import PropTypes from 'prop-types';

import Gallow from '../../../svg/gallow/gallow';
import HumanFigure from '../../../svg/human-figure/human-figure';

export default function GallowArea({ lifes }) {
  return (
    <div className="gallow-area">
      <HumanFigure lifes={lifes} />
      <Gallow />
    </div>
  );
}

GallowArea.propTypes = {
  lifes: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
