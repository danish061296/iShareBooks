import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tachyons';

const Services = () => {
  return (
    <div id="services">
      {/* // <div className="rowC"> */}
      <div className="services__title">
        <h1 className="service">Services</h1>
      </div>

      {/* <div className="f3 fw4 pa3 mv0 row"> */}
      <div className="services__pages">
        <div className="top__services">
          <div>
            <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-3 card__shrink">
              <div>
                <img
                  alt="books"
                  src="https://apprecs.org/ios/images/app-icons/256/e3/1147112163.jpg"
                ></img>
                <h1 className="service__heading">Buy Books! </h1>
                <p> -buy any books you like </p>
                <Link to="/buybooks">
                  <button className="buy" type="button">
                    Buy Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-3 card__shrink">
              <div>
                <img
                  alt="books"
                  src="https://i.pinimg.com/originals/2b/f9/81/2bf981a86dbb839548305457d5cbf9df.png"
                ></img>
                <h1 className="service__heading">Auction Books! </h1>
                <p>-Auction any books you like</p>
                <Tippy
                  content="Will be implemented in the future"
                  placement="bottom"
                >
                  <Link to="/">
                    <button className="sell" type="button">
                      Auction Here
                    </button>
                  </Link>
                </Tippy>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom__services">
          <div>
            <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-3 card__shrink">
              <div>
                <img
                  alt="books"
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trade-1689731-1435793.png"
                ></img>
                <h1 className="service__heading">Trade Books! </h1>
                <p> -Trade any books you like </p>
                <Link to="/tradebooks">
                  <button className="trade" type="button">
                    Trade Here
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-3 card__shrink">
              <div>
                <img
                  alt="books"
                  src="https://www.freeiconspng.com/uploads/open-book-icon-free-books-and-education-13.png"
                ></img>
                <h1 className="service__heading">Free Books! </h1>
                <p> -Donate any books you like</p>
                <Link to="/freebooks">
                  <button class="free" type="button">
                    Free Books
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
