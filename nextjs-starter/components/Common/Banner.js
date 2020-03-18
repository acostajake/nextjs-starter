import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

export default function Banner({ text }) {
  return (
    <Box mt={1} mb={1}>
      <Typography align="center" variant="h4">
        {text}
      </Typography>
    </Box>
  );
}

Banner.propTypes = {
  text: PropTypes.string.isRequired
};
