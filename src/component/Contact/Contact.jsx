import React from 'react';
import contact from '../../assets/images/contact.svg';

const Contact = () => {
    return (
        <div className="contact-section">
            <div className="container contact-container">
                <div className="col-md-6 col-sm-12">
                    <form className="contact-form">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea className="form-control" rows="3" />
                        </div>
                        <div className="form-group mb-0">
                            <button type="submit" className="btn learn-more-btn">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-5 offset-md-1 col-sm-12 contact-header-img">
                    <div className="pricing-title">
                        <h2>Contact Us</h2>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                            pellentesque ac lectus et semper. Nullam in nunc tortor.
                        </p>
                    </div>
                    <img src={contact} alt="contact banner" />
                </div>
            </div>
        </div>
    );
};

export default Contact;
