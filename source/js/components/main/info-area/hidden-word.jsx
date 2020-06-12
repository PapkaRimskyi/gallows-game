/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from 'react';

import HiddenWordCell from './hidden-word-component/hidden-word-cell';

export default class HiddenWord extends React.Component {
  constructor(props) {
    super(props);

    this.word = props.word;
  }

  render() {
    const { buttonLetter } = this.props;
    return (
      <div className="play-area__hidden-word">
        <ul className="play-area__hidden-word-list">
          {this.word.split('').map((item, index) => <HiddenWordCell key={index} correctLetter={item.toUpperCase()} buttonLetter={buttonLetter ? buttonLetter.toUpperCase() : null} />)}
        </ul>
      </div>
    );
  }
}
