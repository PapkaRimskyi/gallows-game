/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import timerDisplay from '../../support-methods/time';

export default class GameTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: 0 };

    this.timerID = null;
    this.getTimeGameHandler = this.props.getTimeGame;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.setState((prevState) => ({ time: prevState.time + 1 })), 1000);
  }

  render() {
    const { time } = this.state;
    const { stopTimer } = this.props;
    if (stopTimer) {
      clearInterval(this.timerID);
      this.getTimeGameHandler(time);
    }
    return (
      <span className="game-timer">{timerDisplay(time)}</span>
    );
  }
}
