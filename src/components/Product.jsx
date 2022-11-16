import React, { useState } from 'react';
import classes from './Product.module.sass';

const Product = (props) => {
   return (
       <div className={classes.product}>
        <div className={classes.sale}>{props.products.sale}</div>
        <div className={classes.favourite}>
            <img src="./img/favourite.svg" alt="like" />
        </div>
        <div className={classes.img}>
            <img src={props.products.img} alt="fruit" />
        </div>
        <div className={classes.title}>{props.products.title} </div>
        <div className={classes.price}>
            ${props.products.price}
            <span> ${props.products.pastPrice}</span>
        </div>
            <div className={classes.buttons}>
                <button className={classes.btn} onClick={() => {props.decrement(props.products)}}>-</button>
                <div>{props.products.count}</div>
                <button className={classes.btn} onClick={() => {props.increment(props.products)}} >+</button>
            </div>
            <div className={classes.cart} onClick={() => {props.visibleBasket(props.products, '1')}}>
                <img src="./img/cart2.svg" alt="cart" />
            </div>
       </div>
   );
};

export default Product