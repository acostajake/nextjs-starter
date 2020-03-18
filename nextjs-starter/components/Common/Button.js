import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';

export default function MainButton({ ...props }) {
  return (
    <Grid item xs={12}>
      <Box my={2}>
        <Button
          color="secondary"
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          {...props}
        />
      </Box>
    </Grid>
  );
}
