import React from 'react';
import { Link } from 'react-scroll';
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
                            <Link
                                activeClass="active"
                                to="tops"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="abouts"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="servicess"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="pricings"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="blogs"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                Blog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="testimonialss"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="contacts"
                                spy
                                smooth
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
