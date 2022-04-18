import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<nav className='nav-container'>
			<div className="nav-links">
				<Link to="/" className='nav-link'>Home</Link>
				<Link to="/services" className='nav-link'>Services</Link>
				<Link to="/checkout" className='nav-link'> Checkout </Link>
				<Link to="/login" className='nav-link'>Login</Link>
				<Link to="/about" className='nav-link'>About Us </Link>
			</div>
		</nav>
	);
};

export default Header;