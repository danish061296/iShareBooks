import React from 'react';
import './Trending.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setViewBook } from '../redux/actions/userActions';

const Card = ({
  key,
  number,
  id,
  title,
  author,
  department,
  isbn,
  condition,
  image,
  price,
  name,
  sellerid,
  sellerEmail,
}) => {
  const dispatch = useDispatch();

  const handleBookDetail = () => {
    dispatch(
      setViewBook({
        id,
        title,
        author,
        department,
        isbn,
        condition,
        image,
        price,
        name,
        sellerid,
        sellerEmail,
      })
    );

    return <Redirect to="/viewbook" />;
  };

  // dispatch(setSellerEmail(sellerEmail));

  return (
    <div>
      {image && (
        <div className="card">
          <Link to="/viewbook" onClick={handleBookDetail}>
            <img
              src={`data:image/jpeg;base64,${image}`}
              alt="card_image"
              className="card__image"
              style={{ height: '300px', width: '100%' }}
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
