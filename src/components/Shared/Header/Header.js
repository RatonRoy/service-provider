import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import auth from '../../firebase.init';
import './Header.css';

//  const Header = () => {
// 	const [user] = useAuthState(auth);
// 	const handleSignOut = () => {
// 		signOut(auth);
// 	}
// 	return (
// 		<nav className='nav-container'>
// 			<div className ="nav-links">
// 				<Link to="/" className ='nav-link text-light'>Home</Link>
// 				<Link to="/services" className ='nav-link text-light'>Services</Link>
// 				<Link to="/checkout" className ='nav-link text-light'> Checkout </Link>
// 				<Link to="/blog" className='nav-link text-light'>
// 					Blog
// 				</Link>
// 				<Link to="/about" className ='nav-link text-light'>About Me </Link>
// 				{ user ? <Link className='nav-link text-light' onClick={handleSignOut} to = "/login"> Log Out </Link>
					
// 				:	<Link to="/login" className='nav-link text-light'>Login</Link>
// 				}
				
// 			</div>
// 		</nav>
// 	);
// };
const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                       Science Tutor 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as = {Link} to = "/" >Home</Nav.Link>
                            <Nav.Link as = {Link} to = '/services'>Services</Nav.Link>
                            <Nav.Link as = {Link} to = '/checkout'>Checkout</Nav.Link>
                            <Nav.Link as = {Link} to = '/checkout'></Nav.Link>
                            
                            <Nav.Link as = {Link} to = '/blog'>Blog</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    
									<Nav.Link as={ Link} to = "login" onClick={handleSignOut}>sign out</Nav.Link>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
									</Nav.Link>
							}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};
 

export default Header;