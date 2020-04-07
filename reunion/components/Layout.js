import Box from '@material-ui/core/Box';
import React from 'react';

import Header from './Header';

const withLayout = Page => {
  return (
    <Box m={4}>
      <Header />
      <Page />
    </Box>
  );
};

export default withLayout;