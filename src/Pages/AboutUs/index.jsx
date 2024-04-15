import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutUs = () => {
    return (
        <>
            <>
                <Header />
                <div className="bg-light">
                    <div className="container py-5">
                        <div className="row h-100 align-items-center py-5">
                            <div className="col-lg-6">
                                <h1 className="display-4">About us page</h1>
                                <p className="lead text-muted mb-0">
                                    Create a minimal about us page using Bootstrap 4.
                                </p>
                                <p className="lead text-muted">
                                    Snippet by{" "}
                                    <a href="https://bootstrapious.com/snippets" className="text-muted">
                                        <u>Bootstrapious</u>
                                    </a>
                                </p>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <img
                                    src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-5">
                    <div className="container py-5">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <i className="fa fa-bar-chart fa-2x mb-3 text-primary" />
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                                    Learn More
                                </a>
                            </div>
                            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt=""
                                    className="img-fluid mb-4 mb-lg-0"
                                />
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-5 px-5 mx-auto">
                                <img
                                    src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                                    alt=""
                                    className="img-fluid mb-4 mb-lg-0"
                                />
                            </div>
                            <div className="col-lg-6">
                                <i className="fa fa-leaf fa-2x mb-3 text-primary" />
                                <h2 className="font-weight-light">Lorem ipsum dolor sit amet</h2>
                                <p className="font-italic text-muted mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <a href="#" className="btn btn-light px-5 rounded-pill shadow-sm">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light py-5">
                    <div className="container py-5">
                        <div className="row mb-4">
                            <div className="col-lg-5">
                                <h2 className="display-4 font-weight-light">Our team</h2>
                                <p className="font-italic text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                        <div className="row text-center">
                            {/* Team item*/}
                            <div className="col-xl-3 col-sm-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4">
                                    <img
                                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
                                        alt=""
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                    />
                                    <h5 className="mb-0">Manuella Nevoresky</h5>
                                    <span className="small text-uppercase text-muted">
                                        CEO - Founder
                                    </span>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End*/}
                            {/* Team item*/}
                            <div className="col-xl-3 col-sm-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4">
                                    <img
                                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                                        alt=""
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                    />
                                    <h5 className="mb-0">Samuel Hardy</h5>
                                    <span className="small text-uppercase text-muted">
                                        CEO - Founder
                                    </span>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End*/}
                            {/* Team item*/}
                            <div className="col-xl-3 col-sm-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4">
                                    <img
                                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                                        alt=""
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                    />
                                    <h5 className="mb-0">Tom Sunderland</h5>
                                    <span className="small text-uppercase text-muted">
                                        CEO - Founder
                                    </span>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End*/}
                            {/* Team item*/}
                            <div className="col-xl-3 col-sm-6 mb-5">
                                <div className="bg-white rounded shadow-sm py-5 px-4">
                                    <img
                                        src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                                        alt=""
                                        width={100}
                                        className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                                    />
                                    <h5 className="mb-0">John Tarly</h5>
                                    <span className="small text-uppercase text-muted">
                                        CEO - Founder
                                    </span>
                                    <ul className="social mb-0 list-inline mt-3">
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-instagram" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="#" className="social-link">
                                                <i className="fa fa-linkedin" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End*/}
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        </>
    )
}
export default AboutUs;