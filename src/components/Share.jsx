import React, {useState} from 'react';
import classes from './Share.module.sass';
import ShareItem from './ShareItem';

const Share = () => {
   const [shares, setShares] = useState ([
      {id: 1, title:'Beverage', sale:'6%Off', img:'./img/beverages.png'},
      {id: 2, title:'Nuts & Snacks', sale:'10%Off', img:'./img/nuts.png'},
      {id: 3, title:'Fresh Vegetables', sale:'6%Off', img:'./img/vegetables.png'},
      {id: 4, title:'Fresh Fruits', sale:'25%Off', img:'./img/fruits.png'},
  ])
   return (
      <div className={classes.share}>
         {shares.map((shares, index) => 
            <ShareItem title={shares.title} img={shares.img} sale={shares.sale} number={index + 1}  key={shares.id} />
      )}
       </div>
   );
};

export default Share