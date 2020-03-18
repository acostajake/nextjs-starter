import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import Router from 'next/router';
import React, { useState, useEffect } from 'react';

function FetchPage() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      // lookup some data on component mounting
      const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=batman'
      );
      const myJson = await response.json();
      return setData({ data: myJson });
    }
    getData();
  }, []);

  return (
    <Grid>
      <Grid>
        <Button onClick={() => Router.push('/main')}>Back to Main Page</Button>
      </Grid>
      <h1>Fetched data...</h1>
      <ul>
        {data.data &&
          data.data.map(show => (
            <li key={show.show.id}>
              <Link href="/p/[id]" as={`/p/${show.show.id}`}>
                <a>{show.show.name}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Grid>
  );
}

export default FetchPage;
