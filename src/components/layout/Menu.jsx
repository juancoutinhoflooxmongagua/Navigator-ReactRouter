import './Menu.css';
import React from 'react';

const Menu = () => (
  <aside className='Menu'>
    <nav>
      <ul>
        <li><a href=""><i className="bi bi-house-door p-2"></i>Home</a></li>
        <li><a href=""><i className="bi bi-info-circle p-2"></i>About</a></li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
