import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Router from 'next/router';
import React from 'react';

const myStyles = makeStyles({
  image: {
    width: '70%',
    minWidth: '200px'
  }
})

export default function FrontPage() {
  const classes = myStyles()
  return (
    <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
      <Box mt={8} display="flex" justifyContent="center">
        <img className={classes.image} src="https://lh3.googleusercontent.com/proxy/btNo-xGym64NpMXL8IIfoFFo-EjMQSHPmgY9UPr9kDptTxs5muW-jOQrZstVpkrliecLpt2VcbJ4BDUNNJwp5r4gSQfgwFx8xjecyz6KS-U_SiqgU9CtbXF2At0RDw" alt="Family Tree"/>
      </Box>
    </Box>
  );
}