import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
// import bgImage from '../../assets/header.svg';

const styles = theme => ({
  heroTitle: {
    fontWeight: 500
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});

const HeroText = props => {
  const { classes } = props;
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        className={classes.heroTitle}
        gutterBottom
      >
        NBA CLICK GAME
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        CLICK ON AN IMAGE TO EARN POINTS, BUT DON'T CLICK ANY MORE THAN ONCE
      </Typography>
    </div>
  );
};

export default withStyles(styles)(HeroText);
