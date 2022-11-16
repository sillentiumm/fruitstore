import React from 'react';
import classes from './CategoriesItem.module.sass';

const CategoriesItem = (props) => {
   return (
       <div 
            className={classes.item} 
            style={{boxShadow: props.categories.border ? '0 0 10px rgba(127, 173, 57, .5) inset' : '0px 1px 5px rgba(0, 0, 0, 0.06)' }} 
            onClick={() => {props.changeType(props.categories.type); props.setBorder(props.categories)}}
        >
            <img src={props.categories.img} alt="alt" />
            <span>{props.categories.title}</span>
       </div>
   );
};

export default CategoriesItem