import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedin ,faInstagram  } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone,faAngleRight  } from '@fortawesome/free-solid-svg-icons';

import "./footer.css";

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-3 logo">
                            <a href="index.html">
                                <img
                                    src="/images/logo-3.png"
                                    alt=""
                                    className="img-fluid logo-footer"
                                />
                            </a>
                        </div>
                        <div className="col-md-3">
                            <div className="useful-link">
                                <h2>Useful Links</h2>
                                <img
                                    src="./assets/images/about/home_line.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="use-links">
                                    <li>
                                        <a href="index.html">
                                        <FontAwesomeIcon icon={faAngleRight } /> Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                        <FontAwesomeIcon icon={faAngleRight } /> About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                        <FontAwesomeIcon icon={faAngleRight } /> Gallery
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                        <FontAwesomeIcon icon={faAngleRight } /> Contact
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-links">
                                <h2>Follow Us</h2>
                                <img src="/images/about/home_line.png" alt="" />
                                <div className="social-icons">
                                    <li>
                                        <a href="">
                                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon icon={faInstagram}/> Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <FontAwesomeIcon icon={faLinkedin}/> Linkedin
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="address">
                                <h2>Address</h2>
                                <img
                                    src="/images/about/home_line.png"
                                    alt=""
                                    className="img-fluid"
                                />
                                <div className="address-links">
                                    <li className="address1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/> Kolathur ramankulam-
                                        Malappuram Dt Kerala 679338
                                    </li>
                                    <li>
                                        <a href="">
                                           <FontAwesomeIcon icon={faPhone }/> +91 90904500112
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                           <FontAwesomeIcon icon={faEnvelope}/> mail@1234567.com
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer section end */}
            {/* footer copy right section start */}
            <section id="copy-right">
                <div className="copy-right-sec">
                    <i className="fa-solid fa-copyright" /> lorem ispum lorem ispum 2022
                    Powerd By <a href="#">lorem ispum</a>
                </div>
            </section>
        </>


    );

};
export default Footer;