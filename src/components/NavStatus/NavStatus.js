import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

class NavStatus extends Component {
  state = {
    message: '',
    inProgress: false
  };

  render() {
    console.log(this.props.classes);
    return (
      <div>
        <div>Welcome</div>
      </div>
    );
  }
}

export default NavStatus;
