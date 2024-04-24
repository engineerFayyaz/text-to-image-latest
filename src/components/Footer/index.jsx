import React from "react";
import { Link } from "react-router-dom";
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
                            <Link to="/">
                                <img
                                    src="/images/logo-3.png"
                                    alt=""
                                    className="img-fluid logo-footer"
                                />
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <div className="useful-link">
                                <h2>Useful Links</h2>
                               
                                <div className="use-links">
                                    <li>
                                        <Link to="/">
                                        <FontAwesomeIcon icon={faAngleRight } /> Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/About-us">
                                        <FontAwesomeIcon icon={faAngleRight } /> About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="gallery.html">
                                        <FontAwesomeIcon icon={faAngleRight } /> Gallery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact-us">
                                        <FontAwesomeIcon icon={faAngleRight } /> Contact
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="social-links">
                                <h2>Follow Us</h2>
                                <div className="social-icons">
                                    <li>
                                        <Link to="">
                                        <FontAwesomeIcon icon={faFacebook} /> Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <FontAwesomeIcon icon={faInstagram}/> Instagram
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                            <FontAwesomeIcon icon={faLinkedin}/> Linkedin
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="address">
                                <h2>Address</h2>
                                <div className="address-links">
                                    <li className="address1">
                                    <FontAwesomeIcon icon={faMapMarkerAlt}/> Kolathur ramankulam-
                                        Malappuram Dt Kerala 679338
                                    </li>
                                    <li>
                                        <Link to="">
                                           <FontAwesomeIcon icon={faPhone }/> +91 90904500112
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="">
                                           <FontAwesomeIcon icon={faEnvelope}/> mail@1234567.com
                                        </Link>
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
            <div className="copy-right-sec animated">
    <div>
        <i className="fa-solid fa-copyright me-2" /> 
        2024 by <Link to="#">AI-Image Generator developed by  <Link to="https://codes-inc.com/" target="_blank">Codes Inc</Link> </Link>
    </div>

</div>

                
            </section>
        </>


    );

};
export default Footer;