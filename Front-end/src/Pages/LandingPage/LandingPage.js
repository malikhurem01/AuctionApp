import React, { useEffect, useState } from 'react';

import ProductsGrid from '../../Components/Products/ProductsGrid';

import { fetchAllProducts } from '../../Services/productsService';

import arrow from '../../Assets/arrowRight.svg';
import advertImg from '../../Assets/product_advert_img.png';

import classes from './LandingPage.module.css';

// DUMMY CATEGORIES FOR NOW
const categories = [
  { name: 'Fashion', url: '/categories?category=Fashion' },
  { name: 'Accesories', url: '/categories?category=Accesories' },
  { name: 'Jewlery', url: '/categories?category=Jewlery' },
  { name: 'Shoes', url: '/categories?category=Shoes' },
  { name: 'Sportware', url: '/categories?category=Sportware' },
  { name: 'Home', url: '/categories?category=Home' },
  { name: 'Electronics', url: '/categories?category=Electronics' },
  { name: 'Mobile', url: '/categories?category=Mobile' },
  { name: 'Computer', url: '/categories?category=Computer' },
  { name: 'All Categories', url: '/categories?category=All' }
];

const LandingPage = () => {
  const [newArrivalsActive, setNewArrivalsActive] = useState(true);
  const [lastChanceActive, setLastChanceActive] = useState(false);
  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    fetchAllProducts().then(response => {
      setProductsState(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.categories_container}>
          <p>Categories</p>
          <ul className={classes.categoriesList}>
            {categories.map(el => {
              return (
                <li key={el.name}>
                  <a href={el.url}>{el.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.product}>
          <div className={classes.advertisement_product_about}>
            <h3>Running Shoes</h3>
            <h3>Start From $59.00</h3>
            <p className={classes.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum hendrerit odio a erat lobortis auctor. Curabitur
              sodales pharetra placerat. Aenean auctor luctus tempus. Cras
              laoreet et magna in dignissim. Nam et tincidunt augue. Vivamus
              quis malesuada velit. In hac habitasse platea dictumst.
            </p>
            <a href="/#" className={classes.btn}>
              BID NOW
              <div className={classes.arrow}>
                <img src={arrow} alt="arrow on a button" />
              </div>
            </a>
          </div>
          <div className={classes.advertisement_product_image}>
            <img src={advertImg} alt="highlighted product" />
          </div>
        </div>
      </div>
      <div>
        <div className={classes.products_tabs}>
          <p
            onClick={() => {
              setNewArrivalsActive(true);
              setLastChanceActive(false);
            }}
            className={newArrivalsActive ? classes.products_tab_active : ' '}
          >
            New Arrivals
          </p>
          <p
            onClick={() => {
              setNewArrivalsActive(false);
              setLastChanceActive(true);
            }}
            className={lastChanceActive ? classes.products_tab_active : ' '}
          >
            Last Chance
          </p>
        </div>
        <div className={classes.products_container}>
          <ProductsGrid products={productsState} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
