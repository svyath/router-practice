import React, {useState, useEffect} from 'react';

function Shop() {
  useEffect(() => {
  fetchItems();
}, []);

const fetchItems = async() => {
    const data = await fetch('https://fakestoreapi.com/products')
    const item = await data.json();
    console.log(item);
}
  
  return (
    <div>
      <h1>Shop page</h1>
    </div>
  );
}

export default Shop;
