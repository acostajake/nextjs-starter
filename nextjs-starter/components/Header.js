import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function Header({ ...props }) {
  return (
    <Box m={3}>
        <Grid container justify="space-between">
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
