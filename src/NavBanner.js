import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import icon from './img/icon-white.png';

class NavBanner extends Component {
    render() {
        var navLinks = this.props.children.filter(({ type }) => type === NavLink)
        var backgrounImg = this.props.img;
        var bannerTitle = this.props.children.find(({ type }) => type === BannerTitle)
        var bannerText = this.props.children.find(({ type }) => type === BannerText)
        console.log(navLinks);
        return (
            <div>
                <Navbar bg="theme" variant="dark" expand="lg" fixed="top">
                    <Navbar.Brand>
                        <Link to="/" className="nav-link text-white">
                            <img alt="Website Name" src={icon} width="50px"></img>
                            <span className="pl-3">Website Name</span>
                        </Link> 
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="nav" />
                    <Navbar.Collapse id="nav">
                        <Nav className="ml-auto pr-3 text-white">
                            {navLinks}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ 'position': "relative", 'marginTop': '0.100px' }}>
                    <Image src={backgrounImg} fluid style={{ 'zIndex': 2 }}></Image>
                    <div style={{ 'zIndex': "3", 'top': "50%", 'position': "absolute", 'transform': "translateY(-50%)" }}>
                        <div className="text-white pl-3">
                            {bannerTitle}
                        </div>
                    </div>
                </div>
                <div className="text-white p-3">
                    {bannerText}
                </div>
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

class BannerTitle extends Component {
    render() {
        let { children, ...props } = this.props;
        return (
            <div {...props}>
                {children}
            </div>
        )
    }
}

class BannerText extends Component {
    render() {
        let { children, ...props } = this.props;
        return (
            <div {...props}>
                {children}
            </div>
        )
    }
}


export default NavBanner;
export { NavLink, BannerTitle, BannerText };
