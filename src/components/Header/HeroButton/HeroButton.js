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
  const { classes } = props;
  return (
    <div className={classes.heroButtons}>
      <Grid container spacing={16} justify="center">
        <Grid item>
          <Button variant="contained" color="primary">
            Main call to action
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Secondary action
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(HeroButton);
