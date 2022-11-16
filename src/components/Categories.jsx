import React, {useState} from 'react';
import classes from './Categories.module.sass';
import CategoriesItem from './CategoriesItem';

const Categories = ({changeType, setBorder}) => {
    const [categories, setCategories] = useState ([
        {id: 1, title:'Vegetables & Fruits', img:'./img/categories/apple.png', type: 'fruit', border: 0 },
        {id: 2, title:'Grocery & Staples', img:'./img/categories/cart.png', type: 'grocery', border: 0},
        {id: 3, title:'Dairy & Eggs', img:'./img/categories/milk.png', type: 'egg', border: 0},
        {id: 4, title:'Beverages', img:'./img/categories/groceries.png', type: 'beverages', border: 0},
        {id: 5, title:'Snacks', img:'./img/categories/burger.png', type: 'snacks', border: 0},
        {id: 6, title:'All', img:'./img/categories/house.png', type: '', border: 1}
      ])

    function setBorder(arr) {
        setCategories(categories.map(el =>
          el.id === arr.id ? {...el, ['border'] : '1'} : {...el, ['border']: 0} ))
    }

   return (
       <div>
        <div className={classes.categoriesTitle}>
        Search by category
        </div>
        <div className={classes.categories}>
            {categories.map((categories, index) => 
                <CategoriesItem categories={categories} changeType={changeType} setBorder={setBorder} key={categories.id} />
            )}
        </div>
       </div>
   );
};

export default Categories