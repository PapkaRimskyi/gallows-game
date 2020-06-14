/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/prop-types */
import React from 'react';

export default class HiddenWordCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = { answer: null };
  }

  componentDidUpdate(prevProps) {
    const { buttonLetter, correctLetter } = this.props;
    if (buttonLetter !== prevProps.buttonLetter) {
      if (buttonLetter === correctLetter) {
        this.setState(() => ({ answer: buttonLetter }));
      } else if (!buttonLetter) {
        this.setState(() => ({ answer: null }));
      }
    }
  }

  render() {
    const { answer } = this.state;
    return (
      <li className="play-area__hidden-word-list-item">{answer || null}</li>
    );
  }
}
