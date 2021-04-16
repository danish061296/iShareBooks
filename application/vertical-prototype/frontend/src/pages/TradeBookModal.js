import React from 'react';
import './Modals.css';

const TradeBookModal = () => {
  return (
    <div>
      <div className="body">
        <div className="left-side">
          <h2 className="head-left">
            Trade Your Book To Help Your Friends For Easy Access
          </h2>
          <img
            src="https://via.placeholder.com/150"
            alt="some-image"
            className="bookpic"
          />
        </div>
        <div className="box">
          <h2 className="head-right">Trade A Book</h2>
          <div className="form">
            <p>Title</p>
            <input type="text" name="" placeholder="title..."></input>
            <p>Author</p>
            <input type="text" name="" placeholder="author..."></input>
            <p>Department</p>
            <input type="text" name="" placeholder="department..."></input>
            <p>ISBN</p>
            <input type="text" name="" placeholder="ISBN..."></input>
            <p>Condition</p>
            <input type="text" name="" placeholder="condition..."></input>
            <button className="buttn" type="button">
              Upload Image
            </button>
            {/* <button className="buttn" type="button">
              TRADE
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeBookModal;
