import React, {useState, useMemo} from 'react';
import './App.sass';
import Header from './components/Header.jsx';
import Share from './components/Share';
import Categories from './components/Categories';
import Products from './components/Products';
import Basket from './components/Basket';

function App() {
  const [products, setProducts] = useState ([
    {id: 1, title:'Fresh organic apricot', img:"./img/products/apricot.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 2, title:'Cucumber', img:"./img/products/Cucumber.png", price: 10, pastPrice: 13, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 3, title:'Hazelnuts filbert nut', img:"./img/products/HazelnutsFilbertNut.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'grocery'},
    {id: 4, title:'Raw Broccoli', img:"./img/products/RawBroccoli.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 5, title:'Organic quince', img:"./img/products/OrganicQuince.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 6, title:'Red apple', img:"./img/products/RedApple.png", price: 10, pastPrice: 15, sale:'30%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 7, title:'Capsicum-green', img:"./img/products/CapsicumGreen.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 8, title:'Pear fruit', img:"./img/products/PearFruit.png", price: 10, pastPrice: 15, sale:'30%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 9, title:'Blueberry', img:"./img/products/Blueberry.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 10, title:'Fresh raspberry', img:"./img/products/FreshRaspberry.png", price: 9, pastPrice: 10, sale:'10%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 11, title:'Ginger', img:"./img/products/Ginger.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'grocery'},
    {id: 12, title:'Two fresh figs', img:"./img/products/TwoFreshFigs.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 13, title:'Stawberry', img:"./img/products/Stawberry.png", price: 7, pastPrice: 14, sale:'50%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 14, title:'Eggplant', img:"./img/products/Eggplant.png", price: 12, pastPrice: 15, sale:'15%Off', count: 1, visible: '0', type: 'fruit'},
    {id: 15, title:'Egg', img:"./img/products/Egg.png", price: 5, pastPrice: 10, sale:'50%Off', count: 1, visible: '0', type: 'egg'},
])

const [active, setActive] = useState(false); 
const [productType, setProductType] = useState('')
const [filter, setFilter] = useState({sort:'', query:''})

const Activate = () => {
  setActive(prev => !prev);
 }

  function increment(product){
    setProducts(products.map(el =>
      el.id === product.id ? {...el, ['count'] : product.count+1} : el))
  } 

  function decrement(product){
    if(product.count> 1) {
    setProducts(products.map(el =>
      el.id === product.id ? {...el, ['count'] : product.count-1} : el))
    }  
  }

  function visibleBasket(product, value) {
    setProducts(products.map(el =>
      el.id === product.id ? {...el, ['visible'] : value} : el))
  }

  function changeType(value) {
    setProductType(value)
  }
  
  const onBasket = useMemo( () => {
    return products.filter(product => product.visible.includes('1'))
  }, [products])
  
  const sortAndSearch = useMemo( () => {
    return products.filter(product => product.type.includes(productType)).filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase()))
  })

  return (
    <div className="App">
      <Basket active={active} Activate={Activate} products={onBasket} increment={increment} decrement={decrement} visibleBasket={visibleBasket}/>
        <Header active={active} Activate={Activate} filter={filter} setFilter={setFilter} />
        <hr />
        <Share setProducts={setProducts} products={products} />
        <div className="wraper">
          <Categories changeType={changeType}/>
          <Products products={sortAndSearch} increment={increment} decrement={decrement} visibleBasket={visibleBasket}/>
        </div>
    </div>
  );
}

export default App;
