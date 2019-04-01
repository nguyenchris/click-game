import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing.unit * 6
  }
});

const Footer = props => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        NBA Click Memory Game
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Made By:{' '}
        <Link color="inherit" href="https://github.com/nguyenchris">
          Chris Nguyen
        </Link>
      </Typography>
    </footer>
  );
};

export default withStyles(styles)(Footer);
