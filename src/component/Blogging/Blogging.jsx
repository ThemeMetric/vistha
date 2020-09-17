import React from 'react';
import blogimg1 from '../../assets/images/blog/blog-1.jpg';
import blogimg2 from '../../assets/images/blog/blog-2.jpg';
import blogimg3 from '../../assets/images/blog/blog-3.jpg';

const Blogging = () => {
    return (
        <div id="blogs" className="blog-section">
            <div className="container blog-container">
                <div className="col-lg-12 col-sm-12">
                    <p className="about-subtitle">Vistha Blog</p>
                    <h2 className="about-title">Our Latest Blog</h2>
                    <p className="about-text mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam orci est,
                        accumsan eu gravida sed, euismod eget erat.
                    </p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="blog-details">
                        <div className="blog-img">
                            <img src={blogimg1} className="img-fluid" alt="blog" />
                        </div>
                        <div className="blog-text">
                            <h5>Mauris consequat tristique mi vel eleifend.</h5>
                            <p>
                                <span className="ti-calendar" /> 12 Mar 2020
                            </p>
                            <p>Software</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="blog-details">
                        <div className="blog-img">
                            <img src={blogimg2} className="img-fluid" alt="blog" />
                        </div>
                        <div className="blog-text">
                            <h5>Mauris consequat tristique mi vel eleifend.</h5>
                            <p>
                                <span className="ti-calendar" /> 12 Mar 2020
                            </p>
                            <p>News</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="blog-details mb-0">
                        <div className="blog-img">
                            <img src={blogimg3} className="img-fluid" alt="blog" />
                        </div>
                        <div className="blog-text">
                            <h5>Mauris consequat tristique mi vel eleifend.</h5>
                            <p>
                                <span className="ti-calendar" /> 12 Mar 2020
                            </p>
                            <p>Tech</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogging;
