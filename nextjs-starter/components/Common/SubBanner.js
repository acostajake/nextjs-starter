import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export default function SubBanner({ text }) {
  return (
    <Box mt={1} mb={2}>
      <Typography align="center" variant="body1">
        {text}
      </Typography>
    </Box>
  );
}

SubBanner.propTypes = {
  text: PropTypes.string.isRequired
};
