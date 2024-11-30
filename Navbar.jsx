// src/Components/Navbar.jsx

import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add-blog">Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
