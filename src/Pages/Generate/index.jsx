import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "./generate.css"
import Footer from '../../components/Footer';

function Generate() {
    const [activeLabel, setActiveLabel] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const changeColor = (label) => {
        setActiveLabel(label);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };


    return (


        <>
            <header>
                {/* Nav tabs */}
                <ul className="nav nav-tabs conteiner" id="navId" role="tablist">
                    <li className="nav-item">
                        <img className="ms-1" src="/images/newlogo.png" alt="" />
                    </li>
                    <li className="nav-item">
                        <h4 className="text-light mt-3 ms-4">AI Image Generator</h4>
                    </li>
                </ul>
            </header>
            <main>
                <div className="conteiner ">
                    <div className="row m-0">
                        <div className="col-lg-3 textbox  flex-column justify-content-center ">
                            <textarea name="" id="" cols={35} rows={5} defaultValue={""} />
                            <div className=" col-12 overflow-y-scroll">
                                {/*Choose Model  */}
                                <label
                                    className="text-light justify-content-start d-flex ms-2 py-3"
                                    htmlFor="#"
                                >
                                    Choose Model
                                </label>
                                <div className="radio-container">
                                    <input type="radio" hidden="radio-label" id="radio1" name="radio-group" />
                                    <label
                                        htmlFor="radio1"
                                        className={activeLabel === 'Realistic' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('Realistic')}
                                    >
                                        Realistic
                                    </label>
                                    <input type="radio" hidden="radio-label" id="radio2" name="radio-group" />
                                    <label
                                        htmlFor="radio2"
                                        className={activeLabel === 'Super Anime' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('Super Anime')}
                                    >
                                        Super Anime
                                    </label>
                                </div>
                                <div className="radio-container">
                                    <input type="radio" hidden="radio-label" id="radio1" name="radio-group" />
                                    <label
                                        htmlFor="radio1"
                                        className={activeLabel === 'Tamarin' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('Tamarin')}
                                    >
                                        Tamarin
                                    </label>
                                    <input type="radio" hidden="radio-label" id="radio2" name="radio-group" />
                                    <label
                                        htmlFor="radio2"
                                        className={activeLabel === 'visiCanvas' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('visiCanvas')}
                                    >
                                        visiCanvas
                                    </label>
                                </div>
                                <div>
                                    <div className="center_dropdown_btn">
                                        <button className="btn btn-secondary" onClick={toggleDropdown}>
                                            <FontAwesomeIcon icon={faAngleDown} className={dropdownVisible ? 'icon-rotate' : ''} />
                                        </button>
                                    </div>
                                    {dropdownVisible && (
                                        <div>
                                            <div className="radio-container">
                                                <input type="radio" hidden="radio-label" id="radio1" name="radio-group" />
                                                <label
                                                    htmlFor="radio1"
                                                    className={activeLabel === 'Realistic(old version)' ? 'radio-label active' : 'radio-label'}
                                                    onClick={() => changeColor('Realistic(old version)')}
                                                >
                                                    Realistic(old version)
                                                </label>
                                                <input type="radio" hidden="radio-label" id="radio2" name="radio-group" />
                                                <label
                                                    htmlFor="radio2"
                                                    className={activeLabel === 'Anime' ? 'radio-label active' : 'radio-label'}
                                                    onClick={() => changeColor('Anime')}
                                                >
                                                    Anime
                                                </label>
                                            </div>

                                            <div className="radio-container">
                                                <input type="radio" hidden="radio-label" id="radio3" name="radio-group" />
                                                <label
                                                    htmlFor="radio3"
                                                    className={activeLabel === '3D Animation' ? 'radio-label active' : 'radio-label'}
                                                    onClick={() => changeColor('3D Animation')}
                                                >
                                                    3D Animation
                                                </label>
                                                <input type="radio" hidden="radio-label" id="radio4" name="radio-group" />
                                                <label
                                                    htmlFor="radio4"
                                                    className={activeLabel === 'Normal' ? 'radio-label active' : 'radio-label'}
                                                    onClick={() => changeColor('Normal')}
                                                >
                                                    Normal
                                                </label>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Choose Size */}
                                <label
                                    className="text-light justify-content-start d-flex ms-2 py-3"
                                    htmlFor="#"
                                >
                                    Aspect Ratio
                                </label>
                                <div className="radio-container1">
                                    <input type="radio" hidden="radio-label" id="radio1" name="radio-group" />
                                    <label
                                        htmlFor="radio1"
                                        className={activeLabel === '1:1' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('1:1')}
                                    >
                                        1:1
                                    </label>
                                    <input type="radio" hidden="radio-label" id="radio2" name="radio-group" />
                                    <label
                                        htmlFor="radio2"
                                        className={activeLabel === '3:4' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('3:4')}
                                    >
                                        3:4
                                    </label>
                                    <input type="radio" hidden="radio-label" id="radio3" name="radio-group" />
                                    <label
                                        htmlFor="radio3"
                                        className={activeLabel === '4:3' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('4:3')}
                                    >
                                        4:3
                                    </label>
                                </div>
                                {/* Number of Images */}
                                <label
                                    className="text-light justify-content-start d-flex ms-2 py-3"
                                    htmlFor="#"
                                >
                                    Number of images
                                </label>
                                <div className="radio-container1">
                                    <input type="radio" hidden="radio-label" id="radio1" name="radio-group" />
                                    <label
                                        htmlFor="radio1"
                                        className={activeLabel === 'radio1' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('radio1')}
                                    >
                                        1
                                    </label>
                                    <input type="radio" hidden="radio-label" id="radio2" name="radio-group" />
                                    <label
                                        htmlFor="radio2"
                                        className={activeLabel === 'radio2' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('radio2')}
                                    >
                                        2
                                    </label>
                                    <input type="radio" hidden="radio-label" id="radio3" name="radio-group" />
                                    <label
                                        htmlFor="radio3"
                                        className={activeLabel === 'radio3' ? 'radio-label active' : 'radio-label'}
                                        onClick={() => changeColor('radio3')}
                                    >
                                        4
                                    </label>
                                </div>
                            </div>
                            <button className="mt-4" type="button">
                                Generate
                            </button>
                        </div>
                        <div className="col-lg-6 side_image">
                            <img
                                src="/images/blank_image.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-lg-3 side_text  d-flex justify-content-center ">
                            <p style={{ color: "#a36e0b" }}>
                                Image available for 7 days. Download soon
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </>
    );
};
export default Generate;