import React from 'react';
import './modals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const Freebookmodal = () => {
    return (
      <div>
        <div> <Navigation /></div>
        <div className = "body">
          <div className = "left-side">
            <h1 className = "head">Sell Your Book To Help Your Friends For Easy Access</h1>
            <div className ="bookpic"></div>
            </div>
            <div className = "box">
              <h1 className = "head">Sell A Book</h1>
              <div className = "form">
              <p>Title</p>
              <input type = "text" name="" placeholder = "title"></input>
              <p>Author</p>
              <input type = "text" name="" placeholder = "Author"></input>
              <p>Department</p>
              <input type = "text" name="" placeholder = "Department"></input>
              <p>ISBN</p>
              <input type = "text" name="" placeholder = "ISBN"></input>
              <p>Condition</p>
              <input type = "text" name="" placeholder = "Condition"></input>
              <p>Cost</p>
              <input type = "text" name="" placeholder = "Cost"></input>
              <button className = "buttn" type = "button">Upload Image</button>
              <button className = "buttn" type = "button">sell</button>
              </div>
          </div>
          </div>
        <div><Footer /></div>
      </div>
      
    );
  };
  
  export default Freebookmodal;