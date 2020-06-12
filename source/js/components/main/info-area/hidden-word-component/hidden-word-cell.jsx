/* eslint-disable react/prop-types */
import React from 'react';

export default class HiddenWordCell extends React.Component {
  constructor(props) {
    super(props);

    this.correctLetter = props.correctLetter;

    this.answer = null;
  }

  checkButtonLetter() {
    const { buttonLetter } = this.props;
    if (buttonLetter === this.correctLetter) {
      this.answer = buttonLetter;
    }
  }

  render() {
    if (!this.answer) {
      this.checkButtonLetter();
    }
    return (
      <li className="play-area__hidden-word-list-item">{this.answer ? this.answer : null}</li>
    );
  }
}
