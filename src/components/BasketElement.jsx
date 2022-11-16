import React from 'react';
import classes from './BasketElement.module.sass';

const BasketElement = (props) => {
   return (
       <div className={classes.element}>
        <div className={classes.elementImg}>
            <img src={props.product.img} alt="alt" />
        </div>
        <div className={classes.elementText}>
            <div className={classes.elementTitle}>{props.product.title}</div>
            <div className={classes.elementPrice}>
                {props.product.price}$ 
                <span>{props.product.pastPrice}$</span>
            </div>
        </div>
        <div className={classes.elementBtns}>
                <button className={classes.elementBtn} onClick={() => {props.decrement(props.product)}}>-</button>
                <div>{props.product.count}</div>
                <button className={classes.elementBtn} onClick={() => {props.increment(props.product)}} >+</button>
        </div>
        <div className={classes.elementFinalPrice}> {props.product.price * props.product.count}$ </div>
        <button className={classes.elementBtnDel} onClick={() => {props.visibleBasket(props.product, '0')}} >×</button>
       </div>
   );
};

export default BasketElement