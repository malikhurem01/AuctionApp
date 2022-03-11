import React from 'react';

import productPhoto from '../../Assets/product.png';

import classes from './ProductsGrid.module.css';

const ProductsGrid = ({ products }) => {
  return (
    <div className={classes.products_grid}>
      {products.map(product => {
        return (
          <a
            key={product.product_id}
            href={'/shop/product/' + product.product_id}
          >
            <div className={classes.grid_product}>
              <img src={productPhoto} alt="product on home page" />
              <p>{product.title}</p>
              <p className={classes.paragraph}>
                Start From <span>${product.start_price}.00</span>
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
