import React, { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import NavLocation from '../../Components/Header/Location/NavLocation';

import { fetchProductById } from '../../Services/productsService';

import AuthContext from '../../Store/auth-context';

import arrow from '../../Assets/arrowRight.svg';
import testImg from '../../Assets/test-img.png';

import classes from './ProductOverviewPage.module.css';

const ProductOverviewPage = () => {
  const params = useParams();
  const userContext = useContext(AuthContext);

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchProductById(params.productId)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setProduct(() => data);
      });
  }, [params.productId]);

  console.log(product);

  return (
    <React.Fragment>
      <NavLocation
        location={product.title}
        path={{ main: 'Shop', page: 'Single product' }}
      />
      <div className={classes.about_product_container}>
        <div className={classes.about_product_pictures_container}>
          <div className={classes.about_product_main_picture}>
            <img src={testImg} alt="product main" />
          </div>
          <div className={classes.about_product_pictures_row}>
            <img src={testImg} alt="product main" />
            <img src={testImg} alt="product main" />
            <img src={testImg} alt="product main" />
            <img src={testImg} alt="product main" />
            <img src={testImg} alt="product main" />
          </div>
        </div>
        <div className={classes.about_product_information}>
          <p className={classes.about_product_main_title}>{product.title}</p>
          <p className={classes.about_product_starting_price}>
            Starts from &nbsp;
            <span className={classes.product_emphasize}>
              ${product.start_price}.00
            </span>
          </p>
          <div className={classes.about_product_auction}>
            <p>
              Highest bid:&nbsp;
              <span className={classes.product_emphasize}>$55</span>
            </p>
            <p>
              Number of bids:&nbsp;
              <span className={classes.product_emphasize}>1</span>
            </p>
            <p>
              Time left:&nbsp;
              <span className={classes.product_emphasize}>10 Weeks 6 Days</span>
            </p>
          </div>
          {userContext.userDataState ? (
            <div className={classes.product_bid_container}>
              <input
                className={classes.bid_input}
                type="number"
                placeholder="Enter $56 or higher"
              />
              <a href="/#" className={classes.btn}>
                Place bid
                <div className={classes.arrow}>
                  <img src={arrow} alt="arrow on a button" />
                </div>
              </a>
            </div>
          ) : (
            ''
          )}

          <div className={classes.products_tabs}>
            <p className={classes.products_tab_active} onClick={() => {}}>
              Details
            </p>
          </div>
          <div className={classes.products_container}>
            <p className={classes.paragraph}>{product.description}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductOverviewPage;
