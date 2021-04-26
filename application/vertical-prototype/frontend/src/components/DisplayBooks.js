import React from 'react';
import './DisplayBooks.css';
import Carousel from 'react-elastic-carousel';
import DetailedCard from './DetailedCard';
import defaultImage from './book1.jpg';
import Aos from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchField,
  setPosts,
  setrandomMsg,
  setSearchType,
  setViewBook,
} from '../redux/actions/userActions';
import BookGrid from '../pages/BookGrid';
import { Link, Redirect } from 'react-router-dom';
import ViewBook from '../pages/ViewBook';


const DisplayBooks = (department) => {
  var title;
 

  React.useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  const dispatch = useDispatch();

  const posts = useSelector((state) => state.userReducer.posts);
  const randomMsg = useSelector((state) => state.userReducer.randomMsg);



  const breakPoints = [
    { width: 500, itemsTo0how: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 4 },
  ];
  var result = posts.filter(function(e, i) {

    return posts[i].department == department.department;
  })  

  return (
    <div className="trending__container"  data-aos="fade-right" id="trending">
      {randomMsg && posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">ds
            <h3 className="trending"> {randomMsg}</h3>
          </div>


        </div>
      )}
      {!randomMsg && posts.length > 0 && (
        <div className="trending__container">
        
          <h2 className="title"> {department.department} </h2>

          <div className="trending__title">
          </div>

          <Carousel breakPoints={breakPoints} showEmptySlots={true} className="carousel">
            {result.map((post, index) => {
              return (
                
                <DetailedCard
                  key={index}
                  number={index}
                  image={post.image}
                  defaultImage={defaultImage}
                  title={post.title}
                  author={post.author}
                  department={post.department}
                  isbn={post.isbn}
                  condition={post.condition}
                  cost={post.cost}
                />

              );
            })}
          </Carousel>
        </div>
      )}

      {posts.length === 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending">Loading catalog...</h3>
          </div>
          <div className="default__image">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayBooks;
