import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class NavStatus extends Component {
  state = {
    message: 'Click Start to Play!',
    gameStarted: false
  };

  componentDidUpdate({ gameStarted, score, topScore }, prevState) {
    let message = '';
    if (!gameStarted) return;

    if (gameStarted && score === 0 && topScore > 0) {
      message = 'Incorrect Answer!';
    } else {
      message = 'Correct Answer!';
    }

    if (score !== this.props.score || this.state.message !== message) {
      this.setState({
        message: message
      });
    }
  }

  render() {
    const { gameStarted, score, topScore } = this.props;
    let message = this.state.message;
    if (!gameStarted && score < topScore) {
      message = "Glad you're back!";
    } else if (gameStarted && score === 0 && topScore == 0) {
      message = '';
    }
    return <div>{message}</div>;
  }
}

export default NavStatus;
