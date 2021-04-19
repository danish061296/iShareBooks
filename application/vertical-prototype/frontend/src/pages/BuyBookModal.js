import React, { useState } from 'react';
import './Modals.css';
import axios from 'axios';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';

const BuyBookModal = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [department, setDepartment] = useState('');
  const [isbn, setIsbn] = useState('');
  const [condition, setCondition] = useState('');
  const [cost, setCost] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const paidBook = {
      title: title,
      author: author,
      cost: cost,
      department: department,
      isbn: isbn,
      type: 'paid',
      condition: condition,
      image: image,
    };

    console.log(paidBook);

    setTitle('');
    setAuthor('');
    setCost('');
    setDepartment('');
    setIsbn('');
    setCondition('');
    setImage('');

    axios.post('http://localhost:3001/posts', paidBook).then((response) => {
      if (!response.data.bookPosted) {
        alert(response.data.msg);
      } else {
        store.addNotification({
          title: '',
          message: response.data.msg,
          type: 'success',
          insert: 'top',
          container: 'top-center',
          dismiss: {
            duration: 2000,
            showIcon: true,
          },
        });
      }
    });
  };
  return (
    <div>
      <ReactNotification />
      <div className="body">
        <div className="left-side">
          <h2 className="head-left">
            Sell Your Book To Help Your Friends For Easy Access
          </h2>
          <img
            src={image}
            alt="some-image"
            className="bookpic"
          />
        </div>
        <div className="box">
          <h1 className="head-right">Sell A Book</h1>
          <div className="form">
            <p>Title</p>
            <input
              type="text"
              name="title"
              placeholder="title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <p>Author</p>
            <input
              type="text"
              name="author"
              placeholder="author..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
            <p>Department</p>
            <input
              type="text"
              name="department"
              placeholder="department..."
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            ></input>
            <p>ISBN</p>
            <input
              type="text"
              name="isbn"
              placeholder="ISBN..."
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            ></input>
            <p>Condition</p>
            <input
              type="text"
              name="condition"
              placeholder="condition..."
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            ></input>
            <p>Cost</p>
            <input
              type="text"
              name="cost"
              placeholder="$"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            ></input>
            <p>Upload file</p>
            { <input
              id="input-image"
              type="file"
              name="image"
              accept=".jpg, .png, .jpeg"
              // value={image}
              className="form-control"
              // ref={ref}
              onChange={(e) =>  {
             	
             	if (e.target.files && e.target.files[0]) {
    				let reader = new FileReader();
    					reader.onload = (e) => {
      					setImage(e.target.result);
    				};
    			
    				reader.readAsDataURL(e.target.files[0]);

  				}
              	
              }
              
            }
              single="true"
            /> }
            {/* <button className="buttn" type="button">
              Upload Image
            </button> */}
            <button className="buttn" type="button" onClick={handleSubmit}>
              SELL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBookModal;
