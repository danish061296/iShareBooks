import React from 'react';
import './ViewBook.css';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';


const ViewBook = ({
    id,
    title,
    author,
    department,
    isbn,
    condition,
    price,
    image,
  }) => {
      
    // add to cart
    const addToCart = () => {};

    return(
        <div className ="viewbook_container">
            <Navigation />
            <div className="viewbook">
            <div className="viewbook__left">
                <img src={image} alt="book"/>
            </div>
            <div className = "viewbook__information" id="info">
                <h1 className="viewbook_title">{title}</h1>
                <p className="viewbook__author">by {author}</p>
                <p className="viewbook__department">{department}</p>
                <p className="viewbook__condition">{condition}</p>
                <p className="viewbook__isbn">ISBN:{isbn}</p>
                <p className="viewbook__price">${price}</p>
                <Button onClick={addToCart} className="viewbook__button">Add to cart</Button>
            </div>
            </div>
      <Footer />
      
      </div>
    );
};

export default ViewBook;