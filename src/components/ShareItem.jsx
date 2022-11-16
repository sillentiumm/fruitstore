import React from 'react';
import classes from './ShareItem.module.sass';

const ShareItem = (props) => {
   return (
       <div className={classes.shareItem}>
        <div className={classes.img}>
            <img src={props.img} alt="s" />
        </div>
        <div className={classes.text}>
            <span>{props.sale}</span>
            <span>Buy More & Save More</span>
            <span>{props.title}</span>
        </div>
        <div className={classes.shop}>shop now </div>
       </div>
   );
};

export default ShareItem