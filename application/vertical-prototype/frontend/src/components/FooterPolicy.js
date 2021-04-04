import React from 'react';
import './Services.css';
import 'tachyons';

const FooterPolicy = () => {
  return (
    <div id="services">
      {/* // <div className="rowC"> */}
      <div className="services__title">
        <h1 className='service'>Services</h1>
      </div>

      {/* <div className="f3 fw4 pa3 mv0 row"> */}
      <div className="services__pages">
        <div>
          <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-5">
            <div>
              <img
                alt="books"
                src="https://apprecs.org/ios/images/app-icons/256/e3/1147112163.jpg"
              ></img>
              <h1>Buy Books! </h1>
              <p> -buy anybooks you like </p>
              <button className="buy" type="button">
                Buy Here{' '}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-5">
            <div>
              <img
                alt="books"
                src="https://i.pinimg.com/originals/2b/f9/81/2bf981a86dbb839548305457d5cbf9df.png"
              ></img>
              <h1>Sell Your Books! </h1>
              <p>-Sell anybooks you like</p>
              <button className="sell" type="button">
                {' '}
                Sell Here{' '}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-5">
            <div>
              <img
                alt="books"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/trade-1689731-1435793.png"
              ></img>
              <h1>Trade Books! </h1>
              <p> -Trade anybooks you like </p>
              <button className="trade" type="button">
                Trade Here{' '}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-light-white dib br3 pa ma2 grow bw2 shadow-5">
            <div>
              <img
                alt="books"
                src="https://www.freeiconspng.com/uploads/open-book-icon-free-books-and-education-13.png"
              ></img>
              <h1>Free Books! </h1>
              <p> -Charity books</p>
              <button class="free" type="button">
                Free Books{' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterPolicy;
