import React from 'react';
import './Trending.css';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setViewBook, setrandomMsg } from '../redux/actions/userActions';

const Card = ({
  key,
  number,
  id,
  title,
  author,
  department,
  condition,
  isbn,
  price,
  image,
  defaultImage,
}) => {
  const dispatch = useDispatch();

  const handleBookDetail = () => {
    dispatch(
      setViewBook({
        id,
        title,
        author,
        department,
        condition,
        isbn,
        image,
        price,
      })
    );

    // dispatch(setrandomMsg('landing'));

    return <Redirect to="/viewbook" />;
  };
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
