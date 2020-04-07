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
          <Grid container justify="space-between" alignItems='flex-start'>
            <Box mt={1}>
              <Typography variant='body2' align='center'>_NAME_ _YEAR_</Typography>
              <Typography variant='body2' align='center'>Reunion</Typography>
            </Box>
            <Box display='flex'>
              <Grid item>
                <Button onClick={() => Router.push('/home')}>Home</Button>
              </Grid>
              <Grid item>
                <Button onClick={() => Router.push('/calendar')}>Calendar</Button>
              </Grid>
              <Grid item>
                <Button onClick={() => Router.push('/family-tree')}>Tree</Button>
              </Grid>
            </Box>
          </Grid>
      </Box>
    );
  }