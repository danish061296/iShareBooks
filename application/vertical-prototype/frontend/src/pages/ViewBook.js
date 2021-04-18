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
            <div className="viewbook_left">
                <img src={image} alt="book"/>
                <p className="viewbook_description">Summary/Description of Book</p>
            </div>
            <div className = "viewbook_information" id="info">
                <h1 className="viewbook_title">TITLE{title}</h1>
                <p className="viewbook_author">by {author}</p>
                <p className="viewbook_department">Department: {department}</p>
                <p className="viewbook_condition">Condition: {condition}</p>
                <p className="viewbook_isbn">ISBN:{isbn}</p>
                <p className="viewbook_price">${price}</p>
                <Button onClick={addToCart} className="viewbook__button">Add to cart</Button>
            </div>
            </div>
      <Footer />
      
      </div>
    );
};

export default ViewBook;