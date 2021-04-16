import React from 'react';
import './Modals.css';

const FreeBookModal = () => {
  return (
    <div>
      <div className="body">
        <div className="left-side">
          <h2 className="head-left">
            Donate Your Book To Help Your Friends For Easy Access
          </h2>
          <img
            src="https://via.placeholder.com/150"
            alt="some-image"
            className="bookpic"
          />
        </div>
        <div className="box">
          <h1 className="head-right">Donate A Book</h1>
          <div className="form">
            <p>Title</p>
            <input type="text" name="title" placeholder="title..."></input>
            <p>Author</p>
            <input type="text" name="author" placeholder="author..."></input>
            <p>Department</p>
            <input
              type="text"
              name="department"
              placeholder="department..."
            ></input>
            <p>ISBN</p>
            <input type="text" name="isbn" placeholder="ISBN..."></input>
            <p>Condition</p>
            <input type="text" name="" placeholder="Condition"></input>
            <button className="buttn" type="button">
              Upload Image
            </button>
            {/* <button className="buttn" type="button">
              DONATE
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeBookModal;
