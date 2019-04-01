import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './GameItem.css';

const styles = theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '70.25%'
  }
});

const GameItem = props => {
  const { classes } = props;
  return (
    <Grid item key={1} sm={6} md={4} lg={3} className="gameImage">
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image="/assets/img/ATL.svg" />
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(GameItem);
