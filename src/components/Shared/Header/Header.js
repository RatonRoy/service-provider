import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<nav className='nav-container'>
			<div className ="nav-links">
				<Link to="/" className ='nav-link text-light'>Home</Link>
				<Link to="/services" className ='nav-link text-light'>Services</Link>
				<Link to="/checkout" className ='nav-link text-light'> Checkout </Link>
				<Link to="/login" className ='nav-link text-light'>Login</Link>
				<Link to="/about" className ='nav-link text-light'>About Us </Link>
			</div>
		</nav>
	);
};

export default Header;