/**
 * Filename: ViewBook.js
 * Description: This file displays the details of eacn book whenever it is
 * click by the user.
 */

import React from 'react';
import './ViewBook.css';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCartItem,
  setSeller,
  setSellerEmail,
  setSellerId,
} from '../redux/actions/userActions';

const ViewBook = () => {
  // get array object from redux store
  const viewBooks = useSelector((state) => state.userReducer.viewBooks);
  const loggedIn = useSelector((state) => state.userReducer.isLoggedIn);

  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const [commentDivStyle, setCommentDivStyle] = React.useState({display: '',});
  // to dispatch value to redux store
  const dispatch = useDispatch();

  // auto scroll down whenever a new comment is added
  const ScrollMessages = ({ messages }) => {
    const lastMessageRef = React.useRef(null);
    const scrolltoBottom = () => {
      lastMessageRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
        duration: 1000,
      });
    };
    React.useEffect(scrolltoBottom, [messages]);
    return <div ref={lastMessageRef} />;
  };

  const handleComment = () => {
    console.log(comment);
    setComments([...comments, comment]);
    setComment('');
  };

  // Function to add books posts to cart
  const handleAddCart = () => {
    // console.log(itemsArray.title);
    dispatch(
      setCartItem({
        id: viewBooks[viewBooks.length - 1].id,
        title: viewBooks[viewBooks.length - 1].title,
        author: viewBooks[viewBooks.length - 1].author,
        department: viewBooks[viewBooks.length - 1].department,
        isbn: viewBooks[viewBooks.length - 1].isbn,
        price: viewBooks[viewBooks.length - 1].price,
        image: viewBooks[viewBooks.length - 1].image,
        name: viewBooks[viewBooks.length - 1].name,
        condition: viewBooks[viewBooks.length - 1].condition,
        type: '',
      })
    );
  };


  // make first letter of username to uppercase
  const viewBooksUsername = viewBooks[viewBooks.length - 1].name;
  const sellerid = viewBooks[viewBooks.length - 1].sellerid;
  const name =
    viewBooksUsername.charAt(0).toUpperCase() + viewBooksUsername.slice(1);
  // dispatch values to redux store
  dispatch(setSeller(name));
  dispatch(setSellerId(sellerid));
  dispatch(setSellerEmail(viewBooks[viewBooks.length - 1].sellerEmail));



  React.useEffect(() => {
    if (viewBooks[viewBooks.length - 1].type != 'tradebooks') {
      setCommentDivStyle({display: 'none'});
    }
  }, [viewBooks, 1]);
    

  return (
    <div className="viewbook_container">
      {/** Navigation Bar */}
      <Navigation />
      <div className="viewbook">
        <div className="viewbook_box">
          <div className="viewbook_left">
            <img
              className="viewbook_image"
              style={{ height: 400, width: 300 }}
              src={`data:image/jpeg;base64,${
                viewBooks[viewBooks.length - 1].image
              }`}
              alt="book"
            />
          </div>
          <div className="viewbook_information" id="info">
            <h1 className="viewbook_title">
              {viewBooks[viewBooks.length - 1].title}
            </h1>
            <p className="viewbook_author">
              by {viewBooks[viewBooks.length - 1].author}
            </p>
            <p className="viewbook_department">
              <strong>Department:</strong>{' '}
              {viewBooks[viewBooks.length - 1].department}
            </p>
            <p className="viewbook_condition">
              <strong>Condition:</strong>{' '}
              {viewBooks[viewBooks.length - 1].condition
                .charAt(0)
                .toUpperCase() +
                viewBooks[viewBooks.length - 1].condition.slice(1)}
            </p>
            <p className="viewbook_isbn">
              <strong>ISBN: </strong>
              {viewBooks[0].isbn}
            </p>

            {/** View seller's profile */}
            <p className="viewbook_username">
              Posted by
              <Link to="./profile">
                <strong> {name}</strong>
              </Link>
            </p>

            <p className="viewbook_price">
              ${viewBooks[viewBooks.length - 1].price}
            </p>

            <Button onClick={handleAddCart} className="viewbook__button">
              Add to cart
            </Button>




            <div key="" className="comment-box" id="comment_box" style={commentDivStyle}> 
              <div
                id="comments-box"
                className="each__comment__div"
                style={{ overflowY: 'scroll' }}>

                <h4 className="leave__comment">{loggedIn ? "Leave a Comment" : "Comments"}</h4>
                    
                  {comments.map((message) => {
                      return (
                        <div>
                          <span className="each__comment">{message}</span>
                          <ScrollMessages messages={message} />
                        </div>
                      );
                    })}
                </div>

                {loggedIn ?
                  <div>
                    <input
                      id="comment"
                      placeholder="Add a comment here"
                      type="text"
                      value={comment}
                      name="comment"
                      className="comment__box"
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div classname="commentbox-buttons">
                      <Button
                        onClick={handleComment}
                        id="addcomment"
                        classname="comment-button"
                      >
                        {' '}
                        send
                      </Button>
                    </div> 
                  </div> 
                : 1 }
         
            </div>
          </div>
        </div>
      </div>

      {/** Footer */}
      <Footer />
    </div>
  );
};

export default ViewBook;
