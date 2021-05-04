import React, { useEffect } from 'react';
import './About.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Video from './video.mp4';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Tippy, { tippy } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
  setSearchField,
  setPosts,
  setrandomMsg,
  setSearchType,
} from '../redux/actions/userActions';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  //sending data to redux
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.userReducer.posts);

  const searchField = useSelector((state) => state.userReducer.searchField);
  const searchType = useSelector((state) => state.userReducer.searchType);

  // useEffect(() => {
  //   const search = {
  //     searchField: 'default',
  //   };
  //   Axios.post('http://localhost:3001/search', search)
  //     .then((response) => {
  //       if (response.data) {
  //         console.log(response.data);
  //         if (posts.length === 0) {
  //           //sending data to redux
  //           // dispatch(setrandomMsg(response.data));
  //           dispatch(setPosts(response.data));
  //         } else {
  //           console.log('Data coming from default');
  //           dispatch(setPosts(response.data));
  //           dispatch(setrandomMsg(''));
  //         }
  //       } else {
  //         dispatch(setPosts([]));
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const search = {
        searchField: searchField,
        searchType: 'All',
        searchTable: 'paidbooks',
      };

      console.log(searchField);
      Axios.post(`http://${window.location.hostname}:3001/search`, search)
        .then((response) => {
          if (response.data) {
            console.log(response.data);
            if (response.data.msg) {
              //sending data to redux
              dispatch(setrandomMsg(response.data.msg));
              dispatch(setPosts(response.data.results));
              window.scrollBy({
                top: 500,
                behavior: 'smooth',
              });
            } else {
              console.log('Data coming from search click');
              dispatch(setPosts(response.data));
              dispatch(setrandomMsg(''));
              window.scrollBy({
                top: 500,
                behavior: 'smooth',
              });
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

  const handleSelect = (e) => {
    console.log(`The selected is ${e}`);

    // const object = {
    //   menuitem: e,
    //   message: 'exlpore',
    // };

    // axios.post('', object);
    dispatch(setSearchType(e));
  };

  const handleClick = () => {
    const search = {
      searchField: searchField,
      searchType: 'All',
      searchTable: 'paidbooks',
    };


    Axios.post('http://' + window.location.hostname + '/search', search)
      .then((response) => {
        if (response.data) {
          if (response.data.msg) {
            //sending data to redux
            dispatch(setrandomMsg(response.data.msg));
            dispatch(setPosts(response.data.results));
            window.scrollBy({
              top: 500,
              behavior: 'smooth',
            });
          } else {
            console.log('Data coming from search click');
            dispatch(setPosts(response.data));
            dispatch((setrandomMsg = ''));
            window.scrollBy({
              top: 500,
              behavior: 'smooth',
            });
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
        <Link className="links" to="/buybooks">
          <span className="services__link">Buy</span>
        </Link>
        <Link className="links" to="/tradebooks">
          <span className="services__link">Trade</span>
        </Link>
        <Link className="links" to="/freebooks">
          <span className="services__link">Free</span>
        </Link>
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
      <div className="filter__btn">
        <DropdownButton
          // className="dropdown__btn"
          variant=" dropdown__btn"
          alignRight
          title="Filter By"
          id="dropdown-menu-align-right"
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="title">Title</Dropdown.Item>
          <Dropdown.Item eventKey="department">Department</Dropdown.Item>
        </DropdownButton>
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
      <Link className="explore__link" to="/explore">
        <Button variant="success explore__btn" data-aos="fade-up">
          Explore Now!
          <ArrowForwardIosIcon className="arrow__icon" fontSize="small" />
        </Button>
      </Link>

      <div className="custom-shape-divider-bottom-1616326519">
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
