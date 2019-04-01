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
  const { classes, key, image, handleClick, id } = props;
  return (
    <Grid item key={key} sm={6} md={4} lg={3}>
      <Card
        className={`${classes.card} gameImage`}
        onClick={() => handleClick(id)}
      >
        <CardMedia className={classes.cardMedia} image={image} />
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(GameItem);
