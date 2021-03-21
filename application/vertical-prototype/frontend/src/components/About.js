import React from 'react';
import './About.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import Video from './video.mp4';

const About = () => {
  return (
    <div className="about">
      <div className="video__bg">
        <video
          className="video__cover"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </div>
      <div className="about__services">
        <p className="services__link">Buy</p>
        <p className="services__link">Trade</p>
        <p className="services__link">Free</p>
      </div>
      <div className="search__content">
        <input
          className="searchBar"
          type="text"
          placeholder="Search by textbook name, department..."
          required
        />
        <SearchIcon className="search__icon" />
      </div>
      <div className="about__message">
        <div className="about__title" id="about">
          iShare Book, weShare Knowledge!
        </div>
        <div className="about__content">
          <p>
            Buy, sell, and trade your books with your friends and classmates.
          </p>
        </div>
      </div>

      <Button variant="success explore__btn">
        Explore Now! <ArrowForwardIosIcon fontSize="small" />
      </Button>
    </div>
  );
};

export default About;
