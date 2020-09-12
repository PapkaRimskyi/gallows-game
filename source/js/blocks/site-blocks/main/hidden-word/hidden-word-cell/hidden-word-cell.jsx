import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function HiddenWordCell({ correctLetter, currentButtonLetter }) {
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    if (correctLetter === currentButtonLetter && Boolean(!answer)) {
      setAnswer(currentButtonLetter);
    }
  }, [currentButtonLetter]);

  return (
    <li className="hidden-word__letter-item">{answer || null}</li>
  );
}

HiddenWordCell.propTypes = {
  correctLetter: PropTypes.string.isRequired,
  currentButtonLetter: PropTypes.string,
};

HiddenWordCell.defaultProps = {
  currentButtonLetter: null,
};
