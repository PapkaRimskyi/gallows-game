/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';

import Attempt from './attempt-component/attempt';

export default function Attempts(props) {
  const { lives } = props;
  return (
    <div className="play-area__attempts-left">
      <ul className="play-area__attempts-left-list">
        {lives.map((item, index) => <Attempt key={index} live={item} />)}
      </ul>
    </div>
  );
}
