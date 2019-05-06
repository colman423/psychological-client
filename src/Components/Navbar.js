import React, { Component } from 'react';
import { Navbar as BootNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../img/icon-white.png';

class NavBar extends Component {
    render() {
        var navLinks = this.props.children.filter(({ type }) => type === NavLink)
        return (
            <div>
                <BootNavbar bg="theme" variant="dark" expand="lg" fixed="top">
                    <BootNavbar.Brand>
                        <Link to="/" className="nav-link text-white">
                            <img alt="Website Name" src={icon} width="50px"></img>
                            <span className="pl-3">Website Name</span>
                        </Link> 
                    </BootNavbar.Brand>
                    <BootNavbar.Toggle aria-controls="nav" />
                    <BootNavbar.Collapse id="nav">
                        <Nav className="ml-auto pr-3 text-white">
                            {navLinks}
                        </Nav>
                    </BootNavbar.Collapse>
                </BootNavbar>
                
                <BootNavbar bg="theme" variant="dark" expand="lg">
                    <BootNavbar.Brand>
                        <Link to="/" className="nav-link text-white">
                            <img alt="Website Name" src={icon} width="50px"></img>
                            <span className="pl-3">Website Name</span>
                        </Link> 
                    </BootNavbar.Brand>
                    <BootNavbar.Toggle aria-controls="nav" />
                    <BootNavbar.Collapse id="nav">
                        <Nav className="ml-auto pr-3 text-white">
                            {navLinks}
                        </Nav>
                    </BootNavbar.Collapse>
                </BootNavbar>
            </div>
        );
    }
}

class NavLink extends Component {
    render() {
        let { to, children, ...props } = this.props;
        return (
            <Link to={to} {...props} >
                {children}
            </Link>
        );
    }
}

export default NavBar;
export { NavLink };
