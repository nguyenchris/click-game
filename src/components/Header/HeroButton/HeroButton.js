import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});

const HeroButton = props => {
  const { classes, gameStarted } = props;
  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Button onClick={props.clicked} variant="contained" color="primary">
            {gameStarted ? 'Restart Game' : 'Start Game'}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HeroButton);
