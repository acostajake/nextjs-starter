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
      <Button onClick={() => Router.push('/search')}>
        Look for something.
      </Button>
      <Box mt={8} display="flex" justifyContent="center">
        <img className={classes.image} src="https://media1.giphy.com/media/zthJViY229AMU/giphy.gif?cid=790b76115ce918ac585a7b6490eb7f603cd4e06b0e2a1022&rid=giphy.gif" alt="He-Man welcomes you."/>
      </Box>
    </Box>
  );
}
