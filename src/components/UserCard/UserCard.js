import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: '50%',
    objectFit: 'cover',
  },
  cardContainer: {
    padding: 100,
    maxHeight: 300,
  },
  userCardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  userCard: {
    width: '60%',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    padding: 30,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 30,
  },
}));

const UserCard = ({ img, name, description, reverse }) => {
  const classes = useStyles();

  const renderImg = () => (
    <Grid item xs={3} className={classes.userCardContainer}>
      <img
        src={img}
        alt="Foto do Victor"
        height={200}
        width={200}
        className={classes.img}
      />
    </Grid>
  );

  const renderCard = () => (
    <Grid item xs={9} className={classes.userCardContainer}>
      <Paper className={classes.userCard} elevation={2}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="p">{description}</Typography>
      </Paper>
    </Grid>
  );

  return (
    <Grid
      container
      className={classes.cardContainer}
      justify="center"
      alignItems="center"
    >
      {reverse ? (
        <>
          {renderCard()}
          {renderImg()}
        </>
      ) : (
        <>
          {renderImg()}
          {renderCard()}
        </>
      )}
    </Grid>
  );
};

export default UserCard;
