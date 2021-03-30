import React from 'react';
import './Trending.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';
// import Image from './book1.jpg';
import { useSelector } from 'react-redux';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Trending = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  const imageBuffer = useSelector((state) => state.userReducer.imageBuffer);
  const posts = useSelector((state) => state.userReducer.posts);

  console.log(imageBuffer);

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 2 },
    { width: 1500, itemsToShow: 2 },
  ];

  return (
    <div className="trending__container" data-aos="fade-right">
      {posts.length > 0 && (
        <div className="trending__container">
          <div className="trending__title">
            <h1 className="trending">Now Trending!!!</h1>
          </div>
          <Carousel breakPoints={breakPoints}>
            {posts.map((post, index) => {
              return <Card key={index} number={index} image={post.image} />;
            })}
          </Carousel>
        </div>
      )}
      {posts.length === 0 && (
        <div className="no__card">
          <h3>Sorry we couldn't find any results....</h3>
        </div>
      )}
    </div>
  );
};

export default Trending;
