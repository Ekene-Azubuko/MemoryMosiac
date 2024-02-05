import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1><Link to="/">
      <i class="fa-solid fa-puzzle-piece"></i>
        MemoryMosiac
        </Link>
      </h1>
      <p><Link to="/about">How to use?</Link></p>
    </header>
  );
}

export default Header;
