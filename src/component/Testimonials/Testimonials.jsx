import React, { PureComponent } from 'react';
import testi1 from '../../assets/images/testi-1.svg';
import testi2 from '../../assets/images/testi-2.svg';
import testi3 from '../../assets/images/testi-3.svg';

export default class Testimonials extends PureComponent {
    render() {
        return (
            <className id="testimonialss" className="testimonials-slider-section">
                <className className="owl-carousel owl-testimonials-slider owl-theme container">
                    <className className="item container testimonials-slider-container">
                        <className className="col-lg-4 testimonials-slider-header-img-section padding-0">
                            <img src={testi1} alt="testimonials" />
                        </className>
                        <className className="col-lg-6 offset-lg-1 testimonials-slider-title-section">
                            <p className="testimonials-slider-subtitle">Testimonials</p>
                            <h2 className="testimonials-slider-title">Best Software Company</h2>
                            <blockquote className="blockquote">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    fringilla consectetur interdum. Vestibulum vel sem malesuada,
                                    bibendum est at, luctus est. Mauris consequat tristique mi vel
                                    eleifend.
                                </p>
                                <footer className="blockquote-footer">
                                    <span className="ti-user" /> Someone famous
                                </footer>
                            </blockquote>
                        </className>
                    </className>
                    <className className="item container testimonials-slider-container">
                        <className className="col-lg-4 testimonials-slider-header-img-section padding-0">
                            <img src={testi2} alt="testimonials" />
                        </className>
                        <className className="col-lg-6 offset-lg-1 testimonials-slider-title-section">
                            <p className="testimonials-slider-subtitle">Testimonials</p>
                            <h2 className="testimonials-slider-title">Best Software Company</h2>
                            <blockquote className="blockquote">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    fringilla consectetur interdum. Vestibulum vel sem malesuada,
                                    bibendum est at, luctus est. Mauris consequat tristique mi vel
                                    eleifend.
                                </p>
                                <footer className="blockquote-footer">
                                    <span className="ti-user" /> Someone famous
                                </footer>
                            </blockquote>
                        </className>
                    </className>
                    <className className="item container testimonials-slider-container">
                        <className className="col-lg-4 testimonials-slider-header-img-section padding-0">
                            <img src={testi3} alt="testimonials" />
                        </className>
                        <className className="col-lg-6 offset-lg-1 testimonials-slider-title-section">
                            <p className="testimonials-slider-subtitle">Testimonials</p>
                            <h2 className="testimonials-slider-title">Best Software Company</h2>
                            <blockquote className="blockquote">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    fringilla consectetur interdum. Vestibulum vel sem malesuada,
                                    bibendum est at, luctus est. Mauris consequat tristique mi vel
                                    eleifend.
                                </p>
                                <footer className="blockquote-footer">
                                    <span className="ti-user" /> Someone famous
                                </footer>
                            </blockquote>
                        </className>
                    </className>
                </className>
            </className>
        );
    }
}
