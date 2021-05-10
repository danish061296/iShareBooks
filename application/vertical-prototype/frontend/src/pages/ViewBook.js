import React from 'react';
import './ViewBook.css';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import Footer from '../components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCartItem,
  setSeller,
  setSellerEmail,
  setSellerId,
} from '../redux/actions/userActions';
import { $CombinedState } from 'redux';
import { TiCode } from 'react-icons/ti';

const ViewBook = () => {
  const viewBooks = useSelector((state) => state.userReducer.viewBooks);
  const [comment, setComment] = React.useState('');
  const [comments, setComments] = React.useState([]);

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

  // add to cart
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
        type: '',
      })
    );
  };

  // make first letter of username to uppercase
  const viewBooksUsername = viewBooks[viewBooks.length - 1].name;
  const sellerid = viewBooks[viewBooks.length - 1].sellerid;
  const name =
    viewBooksUsername.charAt(0).toUpperCase() + viewBooksUsername.slice(1);
  dispatch(setSeller(name));
  dispatch(setSellerId(sellerid));
  dispatch(setSellerEmail(viewBooks[viewBooks.length - 1].sellerEmail));

  return (
    <div className="viewbook_container">
      <Navigation />

      <div className="viewbook">
        <div className="viewbook_box">
          <div className="viewbook_left">
            <img
              className="viewbook_image"
              // style={{ height: 400, width: 300 }}
              src={`data:image/jpeg;base64,${
                viewBooks[viewBooks.length - 1].image
              }`}
              alt="book"
            />

            {/* <p className="viewbook_description">Summary/Description of Book</p> */}
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
              {viewBooks[viewBooks.length - 1].condition}
            </p>
            <p className="viewbook_isbn">
              <strong>ISBN: </strong>
              {viewBooks[0].isbn}
            </p>

            <p className="viewbook_username">
              Posted by
              <Link to="./profile">
                <strong> {name}</strong>
              </Link>
              {/* Posted by <strong>{viewBooksUsername}</strong> */}
            </p>

            <p className="viewbook_price">
              ${viewBooks[viewBooks.length - 1].price}
            </p>

            <Button onClick={handleAddCart} className="viewbook__button">
              Add to cart
            </Button>

            <div className="comment-box" id="comment_box">
              <h4 className="leave__comment">Leave a Comment</h4>
              <div
                id="comments-box"
                className="each__comment__div"
                style={{ overflowY: 'scroll' }}
              >
                {comments.map((message) => {
                  return (
                    <div>
                      <span className="each__comment">{message}</span>
                      <ScrollMessages messages={message} />
                    </div>
                  );
                })}
              </div>

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
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewBook;
