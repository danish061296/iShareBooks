import React, { useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchField,
  setPosts,
  setrandomMsg,
  setSearchType,
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
  const posts = useSelector((state) => state.userReducer.posts);
  const searchType = useSelector((state) => state.userReducer.searchType);

  const handleKeyDown = (e) => {
    const search = {
      searchField: searchField,
      searchType: searchType,
    };

    if (e.key === 'Enter') {
      Axios.get(`http://${window.location.hostname}:3001/search`, search)
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
    dispatch(setSearchType(e));
  };

  const handleClick = () => {
    const search = {
      searchField: searchField,
      searchType: searchType,
    };

    Axios.get('http://localhost:3001/search', search)
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
    <div className="content" style={{ position: 'relative' }}>
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
    </div>
  );
};

export default About;
