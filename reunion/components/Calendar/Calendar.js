import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import DayContainer from '../common/DayContainer';

const activities = [
    [
        { time: '9:00am', activity: 'Breakfast' },
        { time: '1:00pm', activity: 'Meet at park for BBQ and volleyball' },
        { time: '7:00pm', activity: 'Movie night' }
    ],
    [
        { time: '9:00am', activity: 'Breakfast' },
        { time: '12:00pm', activity: 'Go Kart Races!' },
        { time: '5:00pm', activity: 'BBQ' }
    ],
    [
        { time: '10:00am', activity: 'Beach Day' },
        { time: '6:00pm', activity: 'Dinner Dance' }
    ]
];

export default function CalendarPage() {
    return (
      <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
        <Typography variant='h3'>Schedule</Typography>
          {activities.map(activity => (
                <Box my={1} width='80%' key={activities.indexOf(activity)}>
                    <DayContainer activity={activity} />
                </Box>
          ))}
      </Box>
    );
  }