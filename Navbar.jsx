import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-blog">Add Blog</Link></li>
        <Link></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
