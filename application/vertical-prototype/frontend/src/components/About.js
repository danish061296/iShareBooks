import React, { useEffect } from 'react';
import './About.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from 'react-bootstrap';
import Video from './video.mp4';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchField,
  setImageBuffer,
  setPosts,
  setrandomMsg,
} from '../redux/actions/userActions';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
 
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
 
 //sending data to redux
  const dispatch = useDispatch();


  const searchField = useSelector((state) => state.userReducer.searchField);

  const handleKeyDown = (e) => {
    const search = {
      searchField: searchField,
    };

    if (e.key === 'Enter') {
      Axios.post('http://localhost:3001/search', search)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          if(response.data.msg ){
            //sending data to redux
            dispatch(setrandomMsg(response.data.msg))
            dispatch(setPosts(response.data.results))
          }
          else{
          console.log('Data coming from search click');
          dispatch(setPosts(response.data));
          dispatch(setrandomMsg='');
        }
        } else {
          dispatch(setPosts([]));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }

  };
  
  const handleClick = () => {
    const search = {
      searchField: searchField,
    };

    Axios.post('http://localhost:3001/search', search)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          if(response.data.msg ){
            //sending data to redux
            dispatch(setrandomMsg(response.data.msg))
            dispatch(setPosts(response.data.results))
          }
          else{
          console.log('Data coming from search click');
          dispatch(setPosts(response.data));
          dispatch(setrandomMsg='');
        }
        } else {
          dispatch(setPosts([]));
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log('Search clicked');
  };



  return (
    <div className="about" style={{ position: 'relative' }}>
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
          onKeyDown={handleKeyDown}
          onChange={(e) => dispatch(setSearchField(e.target.value))}
        />
        <button onClick={handleClick} className="search__btn">
          <SearchIcon className="search__icon" />
        </button>
      </div>
      <div className="about__message">
        <div className="about__title" id="about" data-aos="fade-up">
          iShare Book, weShare Knowledge!
        </div>
        <div className="about__content" data-aos="fade-up">
          <p>
            iShareBooks lets you buy, sell, and trade your books with your
            friends and classmates.
          </p>
        </div>
      </div>
      <Button variant="success explore__btn" data-aos="fade-up">
        Explore Now!{' '}
        <ArrowForwardIosIcon className="arrow__icon" fontSize="small" />
      </Button>
      <div class="custom-shape-divider-bottom-1616326519">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
