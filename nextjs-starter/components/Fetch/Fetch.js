import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import React, { useState, useEffect } from 'react';

import { filterApi, sortByRating, sortByRelease } from '../../helpers/filterData';
import CarouselNavButtons from './CarouselNavButtons';

import 'pure-react-carousel/dist/react-carousel.es.css';

const useStyles = makeStyles({
  slideWrapper: {
    padding: '8px',
    border: '1px solid black',
    width: '100%'
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: '8px 0'
  },
  carouselStyles: {
    margin: '8px 24px'
  }
});

const FetchPage = props => {
  const [data, setData] = useState({});

  const { updateLeftPanel, updateSelection } = props;

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
    updateLeftPanel('Highest Rated', newData);
  };

  const getReleaseDates = e => {
    e.preventDefault();
    const newData = sortByRelease(data);
    updateLeftPanel('Release Dates', newData);
  };

  const selectSlide = each => {
    updateSelection(each)
  };

  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.gridContainer}>
        <Button onClick={e => getRatings(e)}>Sort by ratings</Button>
        <Button onClick={e => getReleaseDates(e)}>See release dates</Button>
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
                onClick={() => selectSlide(each)}
              >
                <a>{each.name}</a>
                <p className={classes.carouselStyles}>Summary: <i>{each.sum}</i></p>
              </Slide>
            ))}
        </Slider>
        <CarouselNavButtons />
      </CarouselProvider>
    </>
  );
};

export default FetchPage;
