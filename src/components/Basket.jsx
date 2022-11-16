import React, { useMemo } from 'react';
import classes from './Basket.module.sass';
import BasketElement from './BasketElement';

const Basket = ({active, Activate, products, increment, decrement, visibleBasket}) => {

    const fullPrice = products.reduce(function(sum, obj) {
        return sum + obj.price * obj.count
    }, 0)

   return (
    <div className={active?classes.basket:classes.notActive}>
        {products.length
            ? <div className={classes.basketFlex}>
                {products.map((product) => 
                    <BasketElement product={product} increment={increment} decrement={decrement} visibleBasket={visibleBasket} key={product.id} />
                )}
                <div className={classes.basketFullPrice}>
                    <span>Full price: </span>
                    <div>{fullPrice}$</div>
                </div>
            </div>
            : <div className={classes.basketEmpty} >Cart is empty</div>
        }
        <div className={classes.basketClose} onClick={()=> {Activate(active)}}>×</div>
    </div>
   );
};

export default Basket
