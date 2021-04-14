import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>Welcome to our shop! Choose the product you like =)</h1>
      <Link to={`/shop`} id="shopLink"><h2>Shop List</h2></Link>
    </div>
  );
}

export default About;
