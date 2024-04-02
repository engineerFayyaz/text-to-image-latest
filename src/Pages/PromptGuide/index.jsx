import React from "react";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

function PromptGuide() {
    return (
        <>
        <Header/>
            <section id="writing" className="relative overflow-hidden pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="mx-auto mb-10 flex flex-col items-center p-2">
                        <h2 className="tracking-tight text-white text-lg break-words">
                            Writing effective prompts for an AI Image Generator, such as those used
                            in AI art creation tools, involves a blend of creativity, specificity,
                            and understanding of the AI's capabilities. The key to success lies in
                            crafting detailed and clear prompts that guide the AI towards producing
                            the desired output. Here's a comprehensive guide based on insights from
                            various experts
                        </h2>
                    </div>
                    <ul className="grid grid-cols-1 gap-4">
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Understanding the Importance of Detail
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Good prompts are essential for generating high-quality outputs. AI art
                                generators need more detailed prompts compared to text-based AI tools
                                like ChatGPT.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                The Art of Prompting
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                AI art prompting is more of an art than a science. A good prompt
                                typically includes the subject or content of the image, art form,
                                style, artist references, and additional settings like lighting and
                                color.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Prompt Length and Language
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                There's no strict rule on the length of a prompt. Some models work
                                well with shorter prompts, while others can handle longer
                                descriptions. The language used in the prompt also matters; vivid and
                                concrete language yields more predictable results, while abstract
                                language can lead to surprises.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Content and Mood
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Start with stating the subject and mood of the image. Including
                                actions, how these actions are performed, and the overall mood can
                                provide better results. The AI's interpretation can vary based on its
                                training and configuration.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Art Form and Style
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Guide the AI toward a specific aesthetic by including the desired art
                                form, style, and artist references in your prompt. This can
                                significantly influence the end result.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Framing and Lighting
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Framing is about how the subject is positioned and can be influenced
                                by how you construct your prompt. Lighting also plays a critical role,
                                and adjusting lighting conditions in your prompt can change the look
                                and feel of the image.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Color Schemes and Detail Levels
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                Play with color schemes to influence the overall appearance. Using
                                prompts like "4k" or "8k" instructs the AI to increase the level of
                                detail, though it won't change the actual image resolution.
                            </p>
                        </li>
                        <li className="relative p-6 text-black rounded-xl bg-[#f7f6f2] [box-shadow:rgb(167,_139,_250)_5px_5px]">
                            <h3 className="w-auto px-4 py-2 text-lg mb-4 inline-block rounded-md bg-amber-500/10 font-semibold text-lg border-l-4 border-amber-500">
                                Advanced Techniques and AI Collaboration
                            </h3>
                            <p className="text-base whitespace-pre-line">
                                You can fine-tune generation settings in some models, train your own
                                AI image model for a unique look, edit images with AI, or even use AI
                                tools like ChatGPT to generate text prompts for different aesthetics.
                                In summary, crafting prompts for AI image generators is a creative
                                process that requires understanding how different elements like
                                subject, mood, style, and technical settings influence the AI's
                                output. By experimenting with various combinations and approaches,
                                users can achieve a wide range of artistic results.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    )
};
export default PromptGuide;