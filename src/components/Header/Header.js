import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import bgImage from '../assets/header.svg';
import HeroText from './HeroText/HeroText';
import HeroButton from './HeroButton/HeroButton';

const styles = theme => ({
  heroUnit: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

const Header = props => {
  const { classes } = props;

  return (
    <div className={classes.heroUnit}>
      <div className={classes.heroContent}>
        <HeroText />
        <HeroButton />
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
