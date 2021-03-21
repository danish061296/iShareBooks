import React from 'react';
import './Faq.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Book from './book1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 180,
    minWidth: 100,
    height: 250,
    width: 150,
    margin: 30,
    cursor: 'pointer',
    '&:hover': {
      transformY: 20,
    },
  },
  media: {
    height: 100,
    padding: '100%',
  },
}));

const Faq = () => {
  const classes = useStyles();

  return (
    <div className="faq">
      <div className="trending__title">
        <h1 className="trending">Now Trending!!!</h1>
      </div>
      <div className="cards">
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Book}
            title="Paella dish"
          />
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Book}
            title="Paella dish"
          />
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Book}
            title="Paella dish"
          />
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Book}
            title="Paella dish"
          />
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Book}
            title="Paella dish"
          />
        </Card>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={Book}
            title="Paella dish"
          />
        </Card>
      </div>
    </div>
  );
};

export default Faq;
