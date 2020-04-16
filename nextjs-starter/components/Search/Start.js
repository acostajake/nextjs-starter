import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Router from 'next/router';

import { Banner, Button, SubBanner, TextBox } from '../Common';

export default function Start() {
  const [queryItem, setState] = useState({
    one: '',
    two: '',
    three: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    Router.push('/fetch');
  };

  const handleChange = e => {
    e.preventDefault();
    const {
      target: { name, value }
    } = e;
    setState({ ...queryItem, [name]: value });
  };

  const { one, two, three } = queryItem;

  return (
    <Grid container direction="column">
      <Banner text="Search for things" />
      <SubBanner text="Get hungry..." />
      <form onSubmit={e => handleSubmit(e)}>
        <TextBox
          autoFocus
          id="one"
          label="One"
          name="one"
          onChange={e => handleChange(e)}
          value={one}
        />
        <TextBox
          id="two"
          label="Two"
          name="two"
          onChange={e => handleChange(e)}
          value={two}
        />
        <TextBox
          id="three"
          label="Three"
          name="three"
          onChange={e => handleChange(e)}
          value={three}
        />
        <Button type="submit">Go fetch (not linked to search atm)</Button>
      </form>
    </Grid>
  );
}
