import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';
import React from 'react';

const useStyles = makeStyles({
  pointer: {
    cursor: 'pointer'
  }
});

export default function goBack() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <Grid
      alignItems="center"
      container
      justify="space-between"
      className={classes.pointer}
      onClick={() => Router.back()}
    >
      <i className="material-icons">arrow_back</i>
      <Typography>Back</Typography>
    </Grid>
  );
}
