import './Menu.css';
import React from 'react';

const Menu = () => (
  <aside className='Menu'>
    <nav>
      <ul>
        <li><a href=""><i className="bi bi-house-door"></i>Home</a></li>
        <li><a href=""><i className="bi bi-info-circle"></i>About</a></li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
