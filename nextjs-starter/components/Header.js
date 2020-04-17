import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';
import React from 'react';

export default function Header(props) {
  const { avatarUrl } = props;
  return (
    <Box mt={1} mx={2}>
        <Grid container justify="space-between">
          <Avatar sizes='large' src={avatarUrl} alt='gif for show' />
          <Box pb={2} display='flex' direction='row'>
            <Grid item>
              <Button onClick={() => Router.push('/main')}>One</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => Router.push('/search')}>Two</Button>
            </Grid>
            <Grid item>
              <Button onClick={() => Router.push('/fetch')}>Three</Button>
            </Grid>
          </Box>
        </Grid>
        <Divider light />
    </Box>
  );
}
