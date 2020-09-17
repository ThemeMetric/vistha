import React from 'react';
import logoWhite from '../../assets/images/logo-white.png';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container footer-container">
                <div className="col-lg-3 col-md-6 footer-logo">
                    <img src={logoWhite} alt="footer logo" />
                    <p className="footer-susection-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-subsection">
                    <div className="footer-subsection-2-1">
                        <h3 className="footer-subsection-title">Quick Links</h3>
                        <ul className="footer-subsection-list">
                            <li>
                                <a href="https://facebook.com">
                                    <span className="ti-angle-right" /> About Us
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com">
                                    <span className="ti-angle-right" /> Our Services
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com">
                                    <span className="ti-angle-right" /> Our Pricing
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com">
                                    <span className="ti-angle-right" /> Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 footer-subsection">
                    <h3 className="footer-subsection-title">Contact</h3>
                    <ul className="footer-subsection-list">
                        <li>
                            street 10, 3rd cross
                            <br />
                            Koramagala
                        </li>
                        <li>0123456789</li>
                        <li>
                            <a href="https://facebook.com">yourmail@yourdomain.com</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-subsection">
                    <div className="footer-subsection-2-2">
                        <h3 className="footer-subsection-title">Follow Us</h3>
                        <div className="footer-social-media-icons-section">
                            <a href="https://facebook.com" className="footer-social-media-icon">
                                <span className="ti-twitter" />
                            </a>
                            <a href="https://facebook.com" className="footer-social-media-icon">
                                <span className="ti-instagram" />
                            </a>
                            <a href="https://facebook.com" className="footer-social-media-icon">
                                <span className="ti-facebook" />
                            </a>
                            <a href="https://facebook.com" className="footer-social-media-icon">
                                <span className="ti-linkedin" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container footer-credits">
                <p>&copy; 2020 All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
