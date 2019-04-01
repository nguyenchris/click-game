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
    teams: data,
    score: 0,
    topScore: null
  };

  componentDidMount() {
    let localTopScore = localStorage.getItem('topScore');
    if (!localTopScore) {
      localTopScore = 0;
    }
    this.setState({
      teams: this.shuffleArr(this.state.teams),
      topScore: localTopScore
    });
  }

  shuffleArr = arr => {
    return arr.sort(() => Math.random() - 0.5);
  };

  handleCorrectClick = teamsArr => {
    const { score, topScore } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);
    localStorage.setItem('topScore', newTopScore);
    this.setState({
      teams: this.shuffleArr(teamsArr),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectClick = arr => {
    const newTeamsArr = this.resetData(arr);
    this.setState({
      teams: newTeamsArr,
      score: 0
    });
  };

  resetData = arr => {
    const newTeamsArr = arr.map(team => {
      return { ...team, clicked: false };
    });
    return this.shuffleArr(newTeamsArr);
  };

  teamClickHandler = id => {
    const clickedTeamIndex = this.state.teams.findIndex(team => {
      return team.id === id;
    });
    const clickedTeam = { ...this.state.teams[clickedTeamIndex] };
    const newTeams = [...this.state.teams];
    if (clickedTeam.clicked) {
      return this.handleIncorrectClick(newTeams);
    }
    clickedTeam.clicked = true;
    newTeams[clickedTeamIndex] = clickedTeam;
    this.handleCorrectClick(newTeams);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Navigation score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <div className={`${classes.layout} ${classes.cardGrid} gameContainer`}>
          <Grid container spacing={40}>
            {this.state.teams.map(team => {
              return (
                <GameItem
                  key={team.id}
                  id={team.id}
                  image={team.image}
                  handleClick={this.teamClickHandler}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Game);
