import React from 'react';
import PropTypes from 'prop-types';

import Life from '../../../../svg/life/life';

export default function Attempt({ life }) {
  return (
    <li className="attempts-left__item">
      <Life life={life} />
    </li>
  );
}

Attempt.propTypes = {
  life: PropTypes.bool.isRequired,
};
