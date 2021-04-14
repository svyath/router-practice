import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../App/App.css';

function Shop() {
  useEffect(() => {
  fetchItems();
}, []);

const [items, setItems] = useState([]);

const fetchItems = async() => {
    const data = await fetch('https://fakestoreapi.com/products')
    const items = await data.json();
    console.log(items);
    setItems(items);
}

const shopItem = {
  listStyle: 'none',
  textDecoration: 'none',
  color: 'black'
}

  return (
    <div>
      {items.map(item => (
        <Link to={`/shop/${item.id}`} id='itemId' style={shopItem}><h2>{item.id} {item.title}</h2></Link>
      ))}
      
    </div>
  );
}

export default Shop;
