import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GameItem from '../GameItem/GameItem';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  }
});

class Game extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navigation />
        <Header />
        <div className={`${classes.layout} ${classes.cardGrid} gameContainer`}>
          <Grid container spacing={40}>
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
            <GameItem />
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Game);
