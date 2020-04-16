import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';
import React, { useState, useEffect } from 'react';

import {
  filterApi,
  sortByRating,
  sortByRelease
} from '../../helpers/filterData';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles({
  styledButton: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(113, 106, 106, .3)',
    backgroundColor: 'black',
    color: 'lightgrey',
    height: 24,
    margin: '0 10px',
    padding: '0 30px'
  },
  slideWrapper: {
    padding: '8px',
    border: '1px solid black',
    width: '100%'
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '8px 0'
  }
});

const FetchPage = props => {
  const [data, setData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        'https://api.tvmaze.com/search/shows?q=batman'
      );
      const myJson = await response.json();
      const filteredRes = filterApi(myJson);
      return setData({ data: filteredRes });
    }
    getData();
  }, []);

  const getRatings = e => {
    e.preventDefault();
    const newData = sortByRating(data);
    props.updateLeftPanel('test')
    console.log(props)
    setFilteredData(newData);
  };

  const getReleaseDates = e => {
    e.preventDefault();
    const newData = sortByRelease(data);
    console.log(newData);
  };

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Typography>
          <Button onClick={e => getRatings(e)}>Sort by ratings</Button>
        </Typography>
        <Typography>
          <Button onClick={e => getReleaseDates(e)}>See release dates</Button>
        </Typography>
      </Grid>
      <Typography>Swipable view...</Typography>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={(data.data && data.data.length) || 0}
        visibleSlides={1.5}
      >
        <Slider className={classes.slideWrapper}>
          {data.data &&
            data.data.map(each => (
              <Slide
                key={each.id}
                index={each.id}
                href="/p/[id]"
                as={`/p/${each.id}`}
              >
                <a>{each.name}</a>
                <p>Summary: <i>{each.sum}</i></p>
              </Slide>
            ))}
        </Slider>
        <Grid container className={classes.gridContainer}>
          <ButtonBack className={classes.styledButton}>Back</ButtonBack>
          <ButtonNext className={classes.styledButton}>Next</ButtonNext>
        </Grid>
      </CarouselProvider>
    </>
  );
}

export default FetchPage;
