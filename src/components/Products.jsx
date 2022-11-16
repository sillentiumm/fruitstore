import React from 'react';
import classes from './Products.module.sass';
import Product from './Product';

const Products = ({products, increment, decrement, visibleBasket}) => {
   return (
       <div>
        <div className={classes.productTitle}>Products</div>
        {products.length
            ? <div className={classes.products}>
                {products.map((products) => 
                    <Product increment={increment} decrement={decrement} visibleBasket={visibleBasket} products={products} key={products.id}/>
                )}
            </div>
            : <div className={classes.productNone}>No products matching search</div>
        }
       </div>
   );
};

export default Products