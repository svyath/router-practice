import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  const navStyles = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav>
        <h3>Nav Logo</h3>
        <ul className="navLinks">
            <Link to='/about' style={navStyles}>
              <li>About</li>
            </Link>
            <Link to='/shop' style={navStyles}>
              <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
