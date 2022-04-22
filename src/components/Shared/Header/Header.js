import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
	const [user] = useAuthState(auth);
	const handleSignOut = () => {
		signOut(auth);
	}
	return (
		<nav className='nav-container'>
			<div className ="nav-links">
				<Link to="/" className ='nav-link text-light'>Home</Link>
				<Link to="/services" className ='nav-link text-light'>Services</Link>
				<Link to="/checkout" className ='nav-link text-light'> Checkout </Link>
				<Link to="/blog" className='nav-link text-light'>
					Blog 
				</Link>
				<Link to="/about" className ='nav-link text-light'>About Me </Link>
				{ user ? <Link className='nav-link text-light' onClick={handleSignOut} to = "/login"> Log Out </Link>
					
				:	<Link to="/login" className='nav-link text-light'>Login</Link>
				}
				
			</div>
		</nav>
	);
};

export default Header;