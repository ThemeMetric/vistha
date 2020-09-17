import React from 'react';
import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

const Header = () => {
    return (
        <nav
            id="navbar"
            className={[
                'navbar',
                'fixed-top',
                'navbar-expand-lg',
                'navbar-header',
                'navbar-mobile',
                classes.navbar,
            ].join(' ')}
        >
            <div className="navbar-container container">
                <div className="navbar-brand">
                    <a className="navbar-brand-logo" href="#tops">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="ti-layout-grid2" />
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav menu-navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#tops">
                                <p className="nav-link-menu">Home</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#abouts">
                                <p className="nav-link-menu">About Us</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicess">
                                <p className="nav-link-menu">Services</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricings">
                                <p className="nav-link-menu">Pricing</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blogs">
                                <p className="nav-link-menu">Blog</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonialss">
                                <p className="nav-link-menu">Testimonials</p>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link learn-more-btn btn-invert" href="#contacts">
                                <span className="ti ti-arrow-right" /> Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
