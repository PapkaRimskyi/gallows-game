/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

import timerDisplay from '../../support-methods/time';

export default class GameTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: 0 };

    this.timeCache = null;

    this.timerID = null;
    this.getTimeGameHandler = this.props.getTimeGame;
  }

  componentDidMount() {
    this.setTimer();
  }

  componentDidUpdate(prevProps) {
    const { stopTimer } = this.props;
    if (stopTimer !== prevProps.stopTimer) {
      this.setState(() => ({ time: 0 }));
      this.setTimer();
    }
  }

  setTimer() {
    this.timerID = setInterval(() => this.setState((prevState) => ({ time: prevState.time + 1 })), 1000);
  }

  rewriteTime(stopTimer, time) {
    if (!stopTimer) {
      this.timeCache = time;
    }
  }

  clearTimer(stopTimer) {
    if (stopTimer) {
      clearInterval(this.timerID);
      this.getTimeGameHandler(this.timeCache);
    }
  }

  render() {
    const { stopTimer } = this.props;
    const { time } = this.state;
    this.rewriteTime(stopTimer, time);
    this.clearTimer(stopTimer);
    return (
      <span className="game-timer">{timerDisplay(this.timeCache)}</span>
    );
  }
}
