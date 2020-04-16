import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import React from 'react';

const useStyles = makeStyles({
    styledButton: {
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(113, 106, 106, .3)',
        backgroundColor: 'black',
        color: 'lightgrey',
        height: 24,
        padding: '0 30px'
      },
})

export default function CarouselNavButtons(props) {
    const classes = useStyles();
    return (
        <Box mt={2} display='flex' flexDirection='row' justifyContent='center'>
            <ButtonBack className={classes.styledButton}>Back</ButtonBack>
            <ButtonNext className={classes.styledButton}>Next</ButtonNext>
        </Box>
    )
}