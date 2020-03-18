import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import React from 'react';

import Header from './Header';

function Page({ Component }) {
  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row" justify="space-around" wrap="nowrap">
        <Hidden>
          <Box m={8}>Left</Box>
        </Hidden>
        <Box mt={4} maxWidth="600px" >
          <Component />
        </Box>
        <Hidden>
          <Box m={8}>Right</Box>
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default Page;
