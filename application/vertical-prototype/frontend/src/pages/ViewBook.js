import React from 'react';
import './ViewBook.css';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import BookGrid from './BookGrid';
import userReducer from '../redux/reducers/userReducer';

const ViewBook = () => {
  // add to cart
  const addToCart = () => {
    // dispatch(
    //     setCartItem({
    //       id,
    //       title,
    //       author,
    //       department,
    //       isbn,
    //       price,
    //       image,
    //     })
    //   );
  };
  const viewBooks = useSelector((state) => state.userReducer.viewBooks);

  //console.log(viewBooks);

  return (
    <div className="viewbook_container">
      <Navigation />
      <div className="viewbook">
        <div className="viewbook_box">
          {/* <div className="viewbook_details">  */}
          <div className="viewbook_left">
            <img
              style={{ height: 400, width: 300 }}
              src={viewBooks[viewBooks.length-1].image}
              alt="book"
            />
            {/* <p className="viewbook_description">Summary/Description of Book</p> */}
          </div>
          <div className="viewbook_information" id="info">
            <h1 className="viewbook_title">{viewBooks[viewBooks.length-1].title}</h1>
            <p className="viewbook_author">by {viewBooks[viewBooks.length-1].author}</p>
            <p className="viewbook_department">
              <strong>Department:</strong> {viewBooks[viewBooks.length-1].department}
            </p>
            <p className="viewbook_condition">
              <strong>Condition:</strong> {viewBooks[viewBooks.length-1].condition}
            </p>
            <p className="viewbook_isbn">
              <strong>ISBN:</strong>
              {viewBooks[0].isbn}
            </p>
            <p className="viewbook_price">${viewBooks[viewBooks.length-1].price}</p>
            <Button onClick={addToCart} className="viewbook__button">
              Add to cart
            </Button>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default ViewBook;
