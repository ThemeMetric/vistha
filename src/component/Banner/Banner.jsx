import React from 'react';
import banner from '../../assets/images/banner-2.svg';

const Banner = () => {
    return (
        <div id="tops" className="header">
            <div className="container header-container">
                <div className="col-lg-6 header-img-section">
                    <img src={banner} alt="banner" />
                </div>
                <div className="col-lg-6 header-title-section">
                    <h1 className="header-title">Vistha Software Development Company.</h1>
                    <p className="header-title-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliquas.
                    </p>
                    <div className="learn-more-btn-section">
                        <a className="nav-link learn-more-btn" href="#services">
                            <span className="ti ti-settings" /> Our Services
                        </a>
                        <a className="nav-link learn-extra-btn" href="#contact">
                            <span className="ti ti-arrow-right" /> Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
