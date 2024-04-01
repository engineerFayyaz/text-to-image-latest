import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Header from "../../components/Header";
import { ArrowLeft } from 'react-bootstrap-icons'; // Import ArrowLeft icon from React Bootstrap
import "../HowToUse/Howtouse.css";

function HowToUse() {
    return (
        <>
            <Header />
            <section id="creating" className="relative overflow-hidden pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="mx-auto mb-10 flex flex-col items-center">
                        <h2 className="tracking-tight text-white text-3xl font-bold break-words">
                            Creating AI-Generated Images with Ease: A Step-by-Step Guide
                        </h2>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-2 py-1 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Step 1: Idea Initiation
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Begin your journey by entering your creative concept into our AI Image
                                Generator. From majestic landscapes to futuristic cityscapes, or even
                                mythical creatures, your imagination is the only limit. The more
                                detailed your description, the better our AI can visualize your
                                concept.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Step 2: Model Selection
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Tailor your creation by choosing a model that aligns with your vision:
                                - Normal Model: Versatile for various themes and styles. - Realistic
                                Model: Ideal for lifelike, photorealistic imagery. - Anime Model:
                                Perfect for vibrant, Japanese animation-style art. - 3D Anime Model: A
                                unique blend of anime aesthetics with a 3D twist.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Step 3: Size Specification
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Choose the ideal dimensions for your image. Our AI Image Generator
                                caters to a range of sizes, from web-friendly formats to
                                high-resolution outputs for print.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Step 4: The Creation Process
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                With your specifications in place, our AI begins its magic. Leveraging
                                sophisticated algorithms, it transforms your idea into a visually
                                stunning piece in moments.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Step 5: Download and Share
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Your new AI-generated artwork is ready! Download it for personal or
                                professional use, share on social platforms, or feature it in your
                                digital portfolio. The sky's the limit! Our user-friendly AI Image
                                Generator, equipped with the latest in technology, is designed to make
                                the creative process seamless for artists, designers, and hobbyists.
                                Step into the realm of AI art creation and watch your imagination
                                unfold in ways you've never seen before!
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            
            {/* Back button with ArrowLeft icon */}
            <div className="fixed-back-icon top-0 left-50 bg-gray-900 p-4 z-10">
                <div className="text-center">
                    <Link to="/">
                        <ArrowLeft size={24} /> Back
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HowToUse;
