import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Header from "../../components/Header";
import { ArrowLeft } from "react-bootstrap-icons"; // Import ArrowLeft icon from React Bootstrap
import "../HowToUse/Howtouse.css";
import "../HowToUse/Howtouse.css";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

function HowToUse() {
  return (
    <>
      <Header />
      <div className=" p-0  container-fluid banner-top ">
        <div className="banner-title text-center">
          <h2>Creating AI-Generated Images with Ease</h2>
          <a href="/"><FontAwesomeIcon icon={faArrowAltCircleLeft} /> go back</a>
        </div>
      </div>
      <div className=" step-section mt-0">
        {/* Back button with ArrowLeft icon */}
        <section id="creating" className="pt-5 pb-20">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6"></div>
            </div>
            <div className="row steps-title text-center mb-4">
              <h4>
                Creating AI-Generated Images with Ease a Step-by-Step Guide
              </h4>
            </div>
            <div className="container all-steps d-flex flex-column  gap-4    ">
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6 p-0 pe-md-5">
                  <h3 className="">Step 1: Idea Initiation</h3>
                  <p className="my-3 text-justify ">
                    Begin your journey by entering your creative concept into
                    our AI Image Generator. From majestic landscapes to
                    futuristic cityscapes, or even mythical creatures, your
                    imagination is the only limit. The more detailed your
                    description, the better our AI can visualize your concept.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/images/bg2.jpg"
                    alt=""
                    width={"100%"}
                    className="rounded-5"
                  />
                </div>
              </div>

              {/* 2 */}
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6">
                  <img
                    src="/images/bg5.png"
                    alt=""
                    width={"100%"}
                    className="rounded-5"
                  />
                </div>
                <div className="col-md-6 p-0 ps-md-5">
                  <h3 className="">Step 2: Model Selection</h3>
                  <p className="my-3 text-justify ">
                    Tailor your creation by choosing a model that aligns with
                    your vision: - Normal Model: Versatile for various themes
                    and styles. - Realistic Model: Ideal for lifelike,
                    photorealistic imagery. - Anime Model: Perfect for vibrant,
                    Japanese animation-style art. - 3D Anime Model: A unique
                    blend of anime aesthetics with a 3D twist.
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6 p-0 pe-md-5">
                <h3 className="">Step 3: Size Specification</h3>
                <p className="my-3 text-justify ">
                Choose the ideal dimensions for your image. Our AI Image
                  Generator caters to a range of sizes, from web-friendly
                  formats to high-resolution outputs for print.
                </p>
              </div>
              <div className="col-md-6">
                <img src="/images/selecting.jpg" alt="" width={'100%'} className="rounded-5" />
              </div>
              </div>
              {/* 4 */}
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6">
                  <img
                    src="/images/creation.jpg"
                    alt=""
                    width={"100%"}
                    className="rounded-5"
                  />
                </div>
                <div className="col-md-6 p-0 ps-md-5">
                  <h3 className="">Step 4: The Creation Process</h3>
                  <p className="my-3 text-justify ">
                  With your specifications in place, our AI begins its magic.
                  Leveraging sophisticated algorithms, it transforms your idea
                  into a visually stunning piece in moments.
                  </p>
                </div>
              </div>
          
              {/* 5 */}
              <div className="row p-3 shadow-none border-0  p-md-5  text-black rounded-xl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="col-md-6 p-0 pe-md-5">
                <h3 className="">Step 5: Download and Share</h3>
                <p className="my-3 text-justify ">
                Your new AI-generated artwork is ready! Download it for
                  personal or professional use, share on social platforms, or
                  feature it in your digital portfolio. The sky's the limit! Our
                  user-friendly AI Image Generator, equipped with the latest in
                  technology, is designed to make the creative process seamless
                  for artists, designers, and hobbyists. Step into the realm of
                  AI art creation and watch your imagination unfold in ways
                  you've never seen before!
                </p>
              </div>
              <div className="col-md-6">
                <img src="/images/share.webp" alt="" width={'100%'} className="rounded-5" />
              </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HowToUse;
