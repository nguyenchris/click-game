import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';

class Game extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Grid container spacing={40} />
      </div>
    );
  }
}

export default Game;
