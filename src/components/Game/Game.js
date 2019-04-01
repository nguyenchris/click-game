import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GameItem from '../GameItem/GameItem';
import data from '../../data.json';
import { ninvoke } from 'q';

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
    topScore: null,
    gameStart: false
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

  correctClickHandler = teamsArr => {
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

  incorrectClickHandler = arr => {
    const newTeamsArr = this.resetData(arr);
    this.setState({
      teams: newTeamsArr,
      score: 0
    });
  };

  startGameHandler = () => {
    const teamsArr = [...this.state.teams];
    let newTeamsArr = teamsArr;
    if (this.state.gameStart) {
      newTeamsArr = this.resetData(teamsArr);
    }
    this.setState({
      gameStart: true,
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
      return this.incorrectClickHandler(newTeams);
    }
    clickedTeam.clicked = true;
    newTeams[clickedTeamIndex] = clickedTeam;
    this.correctClickHandler(newTeams);
  };

  render() {
    const { classes } = this.props;
    const isStarted = this.state.gameStart;

    return (
      <div>
        <Navigation score={this.state.score} topScore={this.state.topScore} />
        <Header gameStarted={isStarted} clicked={this.startGameHandler} />
        <div className={`${classes.layout} ${classes.cardGrid} gameContainer`}>
          <Grid container spacing={40}>
            {isStarted
              ? this.state.teams.map(team => {
                  return (
                    <GameItem
                      key={team.id}
                      id={team.id}
                      image={team.image}
                      handleClick={this.teamClickHandler}
                    />
                  );
                })
              : null}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Game);
