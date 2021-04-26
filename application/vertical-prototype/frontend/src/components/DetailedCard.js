import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setViewBook } from '../redux/actions/userActions';
import './DetailedCard.css';

const Card = ({ key, number, image, defaultImage, title, author, department, condition, isbn, cost }) => {
  const dispatch = useDispatch();

  const handleBookDetail = (e) => {
    dispatch(
      setViewBook({
        title,    
        image,
        author, 
        department,
        condition,
        isbn,
        cost,
      })
    );
  };

  return (
    <div>
      <Link onClick={handleBookDetail} to="/viewbook">
      {image && (
        <div className="card">
          <img
            src={`data:image/*;base64,${image}`}
            alt="card_image"
            className="card__image"
          />
          <div className="book_info">{title}<br/>by {author}<br/>Condition: {condition}<br/>${cost}</div>
          <div className="add_to_cart"><div className="atc_text">Add to Cart</div></div>
        </div>
      )}
      </Link>
    </div>
    
  );
};

export default Card;
