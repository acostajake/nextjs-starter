import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

import Header from './Header';

function Page({ Component }) {
  const [data, setData] = useState({
    filterName: 'Select a Filter',
    list: []
  });
  const [selection, setSelection] = useState({
    id: '',
    name: '',
    img: ''
  });
  const [avatarUrl, setAvatarUrl] = useState('');

  const updateLeftPanel = (filterName, newData) => {
    setSelection({});
    setData({ filterName, list: newData });
  };

  const updateSelection = (selection, avatar) => {
    const { id, name, img } = selection;
    setAvatarUrl(avatar);
    setData({ filterName: '', list: [] });
    setSelection({ id, name, img });
  };

  return (
    <Grid container direction='column'>
      <Header avatarUrl={avatarUrl} />
      <Grid container direction='row' justify='space-around' wrap='nowrap'>
        <Box mt={3} width='auto%' maxWidth='250px' display='flex' flexDirection='column' justifyContent='flex-start' >
          <Typography align='center'>{data.filterName}</Typography>
          {selection && selection.id ? (
            <Grid container display='flex' direction='column'>
              <Typography align='center'>{selection.name}</Typography>
              <Box my={3}>
                {selection.img ? 
                <img src={selection.img} alt='Image for Show' />
                : <img src='https://media.giphy.com/media/IHOOMIiw5v9VS/giphy.gif' alt='Image not found' />
              }
              </Box>
            </Grid>
          )
          : <ul>
            <Box>
              {data.list && data.list.map(each => 
                <Typography key={each.id}>
                  <li>
                    {each.name}, <i>{data.filterName.includes('Rated') ? each.rating : each.firstAired}</i>
                  </li>
                </Typography>
              )}
            </Box>
          </ul>
          }
        </Box>
        <Box mt={2} maxWidth='500px' width='100%' >
          <Component updateLeftPanel={updateLeftPanel} updateSelection={updateSelection} />
        </Box>
        <Hidden mdDown>
          <Box m={8}>Right</Box>
        </Hidden>
      </Grid>
    </Grid>
  );
}

export default Page;
