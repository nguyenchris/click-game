import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GameItem from '../GameItem/GameItem';
import data from '../../data.json';

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
  state = {
    teams: data
  };

  componentDidMount() {
    this.setState({ teams: this.shuffleArr(this.state.teams) });
  }

  shuffleArr = arr => {
    return arr.sort(() => Math.random() - 0.5);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navigation />
        <Header />
        <div className={`${classes.layout} ${classes.cardGrid} gameContainer`}>
          <Grid container spacing={40}>
            {this.state.teams.map(team => {
              return <GameItem key={team.id} id={team.id} image={team.image} />;
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Game);
