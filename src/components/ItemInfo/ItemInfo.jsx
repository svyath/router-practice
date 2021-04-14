import React, {useState, useEffect} from 'react';

function ItemInfo({match}) {
  useEffect(() => {
  fetchItem();
  console.log(match);
}, []);

const [item, setItem] = useState({
    
});

const fetchItem = async() => {
    const fetchedItem = await fetch(`https://fakestoreapi.com/products/${match.params.id}`);
    const item = await fetchedItem.json();
    console.log(item);
    setItem(item);
}

const imageStyle = {
    height: '20%',
    width: '20%'
}

const itemText = {
    color: 'grey',
    textDecoration: 'italic'
}

const itemContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    margin: '0 auto',
    marginTop: '30px',
    border: '1px solid grey',
    borderRadius: '5px',
    maxWidth: '800px'
}
  return (
    <div style={itemContainer}>
      <h3><span style={itemText}>Category: </span>{item.category}</h3>
      <h2><span style={itemText}>Name: </span>{item.title}</h2>
      <img src={item.image} alt="Item image" style={imageStyle} />
      <h4><span style={itemText}>Description: </span>{item.description}</h4>
    </div>
  );
}

export default ItemInfo;
