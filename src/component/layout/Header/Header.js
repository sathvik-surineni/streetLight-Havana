import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TbLayoutBottombarCollapseFilled } from 'react-icons/tb'; // Importing the icon
import logo from '../../../images/Watt.png';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid className='ps-3 pe-3'>
                <Navbar.Brand href="#home" className='ps-3 w-0'>
                    <img src={logo} alt="Logo" width="100px" height="100px" />
                </Navbar.Brand>
                <div className='NavBarCollapse'>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className='ToggleButton'>
                        <TbLayoutBottombarCollapseFilled className='text-primary Togglebutton' /> {/* Using TbLayoutBottombarCollapseFilled icon */}
                    </Navbar.Toggle>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> {/* Align items to the right */}
                    <div className='NavItems'>
                        <Nav className="navItems">
                            <Link to="/">About</Link> {/* Use Link for internal navigation */}
                            <Link to="/contolpanel">ContolPanel</Link>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
