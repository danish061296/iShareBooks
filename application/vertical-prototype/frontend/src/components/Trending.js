import React, { useState } from 'react';
import './Trending.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
import { useSelector } from 'react-redux';
import defaultImage from './book1.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const Trending = () => {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [carStyle, setCarStyle] = useState({
    width: '99.9%',
  });

  React.useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `http://${window.location.hostname}:3001/fire`
      );
      console.log(res.data);
      setTrendingBooks(res.data.results);
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setCarStyle({
        width: '100%',
      });
    }, 1000);
  }, []);

  const searchField = useSelector((state) => state.userReducer.searchField);
  const posts = useSelector((state) => state.userReducer.posts);
  const randomMsg = useSelector((state) => state.userReducer.randomMsg);

  // console.log(trendingBooks);
  const breakPoints = [
    { width: 500, itemsTo0how: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
    { width: 1500, itemsToShow: 6 },
  ];

  return (
    <div className="trending__container" data-aos="fade-right" id="trending">
      {randomMsg && posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending"> {randomMsg}</h3>
          </div>

          <Carousel style={carStyle} breakPoints={breakPoints}>
            {posts.map((book, index) => {
              return (
                <Card
                key={index}
                // number={index}
                key={index}
                  id={book.book_id}
                  title={book.title}
                  author={book.author}
                  department={book.department}
                  isbn={book.isbn}
                  condition={book.condition}
                  image={book.image}
                  price={book.cost}
                  type="paid"
                  name={book.name}
                  sellerid={book.user_id}
                  sellerEmail={book.email}
                  defaultImage="default"
                />
              );
            })}
          </Carousel>
        </div>
      )}
      {!randomMsg && posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending"> Showing Results for {searchField}</h3>
          </div>

          <Carousel
            className="caro"
            style={carStyle}
            breakPoints={breakPoints}
            className="car"
          >
            {posts.map((book, index) => {
              return (
                <Card
                key={index}
                  id={book.book_id}
                  title={book.title}
                  author={book.author}
                  department={book.department}
                  isbn={book.isbn}
                  condition={book.condition}
                  image={book.image}
                  price={book.cost}
                  type="paid"
                  name={book.name}
                  sellerid={book.user_id}
                  sellerEmail={book.email}
                  defaultImage="default"
                />
              );
            })}
          </Carousel>
        </div>
      )}

      {posts.length === 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h3 className="trending">Trending Books!</h3>
          </div>
          <Carousel className="caro" style={carStyle} breakPoints={breakPoints}>
            {trendingBooks.map((book, index) => {
              return (
                <Card
                  key={index}
                  id={book.book_id}
                  title={book.title}
                  author={book.author}
                  department={book.department}
                  isbn={book.isbn}
                  condition={book.condition}
                  image={book.image}
                  price={book.cost}
                  type="paid"
                  name={book.name}
                  sellerid={book.user_id}
                  sellerEmail={book.email}
                  defaultImage="default"
                />
              );
            })}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default Trending;
