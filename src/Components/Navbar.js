import React, { Component } from 'react';
import { Navbar as BootNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from '../Images/logo/logo@2x.png';

class NavBar extends Component {
    render() {
        var navLinks = this.props.children.filter(({ type }) => type === NavLink)
        return (
            <div>
                <BootNavbar bg="navbar" variant="dark" expand="lg" fixed="top" className="shadow bg-lg-theme">
                    <BootNavbar.Brand>
                        <Link to="/" className="nav-link text-white">
                            <img alt="Website Name" src={icon} width="50px"></img>
                            <span className="pl-3">EAPick</span>
                        </Link>
                    </BootNavbar.Brand>
                    <BootNavbar.Toggle aria-controls="nav" id="nav-btn" />
                    <BootNavbar.Collapse id="nav">
                        <Nav className="ml-auto pr-3 text-white">
                            {navLinks}
                        </Nav>
                    </BootNavbar.Collapse>
                </BootNavbar>


                <BootNavbar bg="theme" expand="lg">
                    <BootNavbar.Brand>
                        <Link to="/" className="nav-link">
                            <div style={{ height: 50 }} />
                        </Link>
                    </BootNavbar.Brand>
                </BootNavbar>

            </div>
        );
    }
}

class NavLink extends Component {
    onClick = () => {
        if (window.innerWidth <= 992) {
            let navBtn = document.getElementById('nav-btn');
            navBtn.click();
        }
    }

    render() {
        let { to, children, ...props } = this.props;
        return (
            <Link to={to} {...props} onClick={this.onClick}>
                {children}
            </Link>
        );
    }
}

export default NavBar;
export { NavLink };
