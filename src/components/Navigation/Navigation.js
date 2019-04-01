import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';

// const styles = theme

class Navigation extends Component {
  state = {
    message: '',
    inProgress: false
  };

  render() {
    return <AppBar position="sticky">hi</AppBar>;
  }
}

export default Navigation;
