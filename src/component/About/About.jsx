import React from 'react';
import aboutimage from '../../assets/images/about-2.svg';

const About = () => {
    return (
        <div id="abouts" className="about-section">
            <div className="container about-container">
                <div className="col-lg-5 col-md-12 about-header-img">
                    <img src={aboutimage} alt="aboutus banner" />
                </div>
                <div className="col-lg-6 offset-lg-1 col-md-12 about-title-section">
                    <p className="about-subtitle">About Vistha</p>
                    <h2 className="about-title">Software Development Company</h2>
                    <p className="about-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci est,
                        accumsan eu gravida sed, euismod eget erat. Donec a consequat felis, in
                        tristique nisl. Proin justo est, semper at maximus a, pharetra et ligula.
                        Mauris quis sem erat. Sed pulvinar, lectus in ultricies elementum, eros arcu
                        congue dolor, sed fermentum ex arcu a ante.
                    </p>
                    <div className="learn-more-btn-section">
                        <a className="nav-link learn-more-btn" href="#services">
                            <span className="ti ti-support" /> Services
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
