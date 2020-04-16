import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';
import React from 'react';

export default function Header({ ...props }) {
  return (
    <Box m={3}>
        <Grid container justify="space-between" alignItems="center">
          <Grid>
            <Typography>CheapEats!</Typography>
          </Grid>
          <Grid style={{ display: 'flex' }}>
            <Grid item>
              <Button onClick={() => Router.push('/main')}>One</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => Router.push('/search')}>Two</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => Router.push('/fetch')}>Three</Button>
            </Grid>
          </Grid>
        </Grid>
    </Box>
  );
}
