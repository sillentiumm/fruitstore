import React,{useState} from 'react';
import classes from './Header.module.sass';


const Header = ({active, Activate, filter, setFilter}) => {
    
    const [searchVisible, setSearchVisible]=useState(1)
    const [width, setWidth]=useState(document.body.clientWidth)

   return (
    
    <header>
        
      <div className={classes.headerWraper}>
        <div className={classes.headerLeft}>
            {searchVisible || width >768
                ?<div className={classes.headerLogo} >
                    <img src="./img/logo.png" alt="logo" />
                </div>
                : null
            }
                <input 
                    className={classes.headerInput} 
                    value={filter.query}
                    type="text" 
                    placeholder='search'
                    onChange={e => setFilter({...filter, query: e.target.value})}
                />
        </div>
        <div className={classes.headerRight}>
            <div className={classes.headerPhone}>
                <img src="./img/phone.jpg" alt="phone" />
                <div className= {classes.headerPhoneNumber}>1800-000-000</div>
            </div>
                <div className={classes.headerSearch} >
                    <img src="./img/search.png" alt="" />
                </div>
            <div className={classes.headerCart} onClick={()=> {Activate(active)}}>
                <img src="./img/cart.svg" alt="phone" />
                <span>CART</span>
            </div>
        </div>
      </div>
  </header>
   );
};

export default Header