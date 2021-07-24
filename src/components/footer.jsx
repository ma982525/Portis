import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section id="footer" className="d-flex align-items-center justify-content-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-lg-0 order-1 foot-text-center text-sm-left">
                                    <h1>
                                        <strong className="brand-name foot">Portis</strong>
                                    </h1>
                                    <h5 className="my-3 w4">
                                        I am a talented developer who loves designs...
                                    </h5>
                                </div>
                                <div className="col-md-6 order-lg-2 foot-text-center text-sm-right order-2 d-flex justify-content-center flex-column footer-menu">
                                    <div className="row">
                                        <h3 className="w7 mb-4 mt-4 mt-md-0">Road Map</h3>
                                    </div>
                                    <div className="row">
                                        <h5><NavLink to="/" className="foot-link">Home</NavLink></h5>
                                    </div>
                                    <div className="row">
                                        <h5><NavLink to="/about" className="foot-link">About</NavLink></h5>
                                    </div>
                                    <div className="row">
                                        <h5><NavLink to="/service" className="foot-link">Services</NavLink></h5>
                                    </div>
                                    <div className="row">
                                        <h5><NavLink to="/contact" className="foot-link">Contact</NavLink></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row social d-flex justify-content-center">
                        <div className="col-6 col-sm-3 mx-auto">
                            <div className="row">
                                <div className="col social-icon">
                                    <a href="https://www.facebook.com/ProgrammingGeeks.YouTube/">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    </a>
                                </div>
                                <div className="col social-icon">
                                    <a href="https://www.instagram.com/codekings_/">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                                <div className="col social-icon">
                                    <a href="https://www.linkedin.com/in/manish-parmar-codekings">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row copyright">
                        <p>Copyright © 2021 | Portis, Developed By <a href="https://www.linkedin.com/in/manish-parmar-codekings">Manish Parmar</a></p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Footer;