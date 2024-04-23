import React, { useState } from "react";
import "../../Pages/ContactUs/Contactus.css";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import Footer from "../../components/Footer";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if any field is empty
        for (const key in formData) {
            if (formData[key] === "") {
                toast.error(`${key} field is required`);
                return;
            }
        }
        // Your form submission logic goes here
        toast.success("Thanks for contacting! We will respond to you soon.");
        window.location.reload();
    };

    return (
        <>
            <Header />
            <div
                className="contact2"
                style={{
                    backgroundImage:
                        "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/map.jpg)"
                }}
                id="contact"
            >
                <div className="container">
                    <div className="row contact-container">
                        <div className="col-lg-12">
                            <div className="card card-shadow border-0 mb-4">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="contact-box p-4">
                                            <h4 className="title">Contact Us</h4>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group mt-3">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Name"
                                                                name="name"
                                                                value={formData.name}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group mt-3">
                                                            <input
                                                                className="form-control"
                                                                type="email"
                                                                placeholder="Email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group mt-3">
                                                            <input
                                                                className="form-control"
                                                                type="tel"
                                                                placeholder="Phone"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="form-group mt-3">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Location"
                                                                name="location"
                                                                value={formData.location}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group mt-3">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Message"
                                                                name="message"
                                                                value={formData.message}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger-gradiant mt-3 mb-3 text-white border-0 py-2 px-3"
                                                        >
                                                            <span>
                                                                {" "}
                                                                SUBMIT NOW <i className="ti-arrow-right" />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div
                                        className="col-lg-4 bg-image"
                                        style={{
                                            backgroundImage:
                                                "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/1.jpg)"
                                        }}
                                    >
                                        <div className="detail-box p-4">
                                            <h5 className="text-white font-weight-light mb-3">ADDRESS</h5>
                                            <p className="text-white op-7">
                                                601 Sherwood Ave.
                                                <br /> San Bernandino
                                            </p>
                                            <h5 className="text-white font-weight-light mb-3 mt-4">
                                                CALL US
                                            </h5>
                                            <p className="text-white op-7">
                                                251 546 9442
                                                <br /> 630 446 8851
                                            </p>
                                            <div className="round-social light">
                                                <a
                                                    href="#"
                                                    className="ml-0 text-decoration-none text-white border border-white rounded-circle"
                                                >
                                                    <i className="icon-social-facebook" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="text-decoration-none text-white border border-white rounded-circle"
                                                >
                                                    <i className="icon-social-twitter" />
                                                </a>
                                                <a
                                                    href="#"
                                                    className="text-decoration-none text-white border border-white rounded-circle"
                                                >
                                                    <i className="icon-social-youtube" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ContactUs;
