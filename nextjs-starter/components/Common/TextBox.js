import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import React from 'react';

export default function TextBox({ ...props }) {
  return (
    <Grid>
      <TextField fullWidth margin="dense" variant="outlined" {...props} />
    </Grid>
  );
}
