import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
    <nav className="bg-dark p-3 rounded">
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to="/" className="nav-link text-white">🏠 Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/about" className="nav-link text-white">ℹ️ Sobre</Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
