import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import NavStatus from '../NavStatus/NavStatus';
import './navigation.css';

const styles = theme => ({
  appBar: {
    padding: theme.spacing.unit * 1.1
  },
  navItems: {
    width: '33.3%',
    textAlign: 'center',
    display: 'inline-block',
    fontWeight: '500',
    color: 'white'
  }
});

const Navigation = props => {
  const { classes, score, topScore, gameStarted } = props;
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h4" className={classes.navItems}>
          <Link color="inherit" href="/" className="link">
            NBA Click Game
          </Link>
        </Typography>
        <Typography variant="h4" className={classes.navItems}>
          <NavStatus
            gameStarted={gameStarted}
            topScore={topScore}
            score={score}
          />
        </Typography>
        <Typography variant="h4" className={classes.navItems}>
          Score: {score} | Top Score: {topScore}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Navigation);
