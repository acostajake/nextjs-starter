import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

import Header from './Header';

function Page({ Component }) {
  const [data, setData] = useState({
    filterName: '',
    list: []
  });

  const updateLeftPanel = (filterName, newData) => {
    setData({ filterName })
  };

  return (
    <Grid container direction='column'>
      <Header />
      <Grid container direction='row' justify='space-around' wrap='nowrap'>
        <Hidden>
          <Typography>{data.filterName}</Typography>
          <Box m={8}>{data.list && data.list.map(each => <Typography>{each.name}</Typography>)}</Box>
        </Hidden>
        <Box mt={4} maxWidth='500px' width='100%' >
          <Component updateLeftPanel={updateLeftPanel} />
        </Box>
        <Hidden mdDown>
          <Box m={8}>Right</Box>
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default Page;
