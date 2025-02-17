// src/app/about/page.tsx
// import Image from "next/image";

"use client";
import { useState } from "react";

export default function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="p-8">
            {/* 🌟 Hero Section */}
            <div className="text-center">
                <h2 className="text-5xl font-bold bg-black text-matcha p-6 rounded-lg">
                    About Zenko
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
                    Zenko is more than a record label its an **artist-first, independent**
                    creative house redefining the music industry. Founded by **Zuki** in 2023,
                    Zenko empowers artists to **own their masters, control their creative vision,**
                    and innovate beyond music into **fashion, film, and impact-driven art**.
                </p>
            </div>

            {/*/!* 🎤 Founder Section *!/*/}
            {/*<div className="mt-12 flex flex-col md:flex-row items-center gap-8">*/}
            {/*    <Image src="/images/zukizenko.jpg" alt="Zuki" width={300} height={300} className="rounded-lg" />*/}
            {/*    <div className="max-w-lg">*/}
            {/*        <h3 className="text-3xl font-semibold text-matcha">Meet the Founder: Zuki</h3>*/}
            {/*        <p className="mt-4 text-gray-300">*/}
            {/*            Grammy-winning artist, producer, and creative visionary, **Zuki** built Zenko*/}
            {/*            as an **alternative to restrictive major labels**. After experiencing **firsthand*/}
            {/*            limitations on artistic freedom**, she created Zenko to be a space where artists*/}
            {/*            **retain their ownership, experiment freely, and build lasting careers** on their terms.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/* 🎯 Mission Section */}
            <div className="mt-12 bg-matcha p-6 rounded-lg text-black text-center">
                <h3 className="text-3xl font-semibold">Our Mission</h3>
                <p className="text-lg mt-4">
                    At Zenko, we believe that creativity has the power to transform the world.
                    Our mission is to empower artists, elevate voices, and inspire change by seamlessly blending art, fashion, and music with social responsibility.
                    Through innovative projects, global collaborations, and purposeful initiatives, we strive to make a lasting impact on both culture and society, supporting causes that matter—from climate action to arts education and beyond.
                    Zenko is where creativity meets impact, shaping a brighter, more inclusive future for all.
                </p>
            </div>

            {/* 🚀 Why Zenko? */}
            <div className="mt-12">
                <h3 className="text-3xl font-semibold text-center text-matcha">What We Do</h3>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {[
                        {title: "Music", desc: "Artists Own their Music."},
                        {title: "Foundation", desc: "Zenkokoro: OurFuture"},
                        {title: "ZenSho", desc: "Reading, School Scholarships, Podcasts"},
                        {title: "MaiZen", desc: "Dancing, Scholarships"},
                        {title: "White Fox", desc: "Clothing"},

                    ].map((location, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-lg bg-white text-black w-64">
                            <h4 className="text-xl font-semibold">{location.title}</h4>
                            <p className="text-gray-600">{location.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🌏 Global Presence */}
            <div className="mt-12">
                <h3 className="text-3xl font-semibold text-center text-matcha">Zenko Headquarters</h3>
                <div className="flex flex-wrap justify-center gap-6 mt-4">
                    {[
                        {city: "Los Angeles", office: "Zenko HQ"},
                        {city: "Tokyo", office: "Zenko Japan"}
                    ].map((location, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-lg bg-white text-black w-64">
                            <h4 className="text-xl font-semibold">{location.city}</h4>
                            <p className="text-gray-600">{location.office}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔗 Subscribe Button */}
            <div className="mt-12 bg-black p-8 text-white rounded-lg text-center">
                <h3 className="text-3xl font-bold mb-4">Stay Connected</h3>
                <p className="text-lg mb-4">
                    Follow Zenko for exclusive artist updates, releases, and industry insights.
                </p>
                <button
                    className="bg-[#A3C585] text-black px-6 py-3 rounded-md hover:bg-green-200 transition"
                    onClick={() => setIsModalOpen(true)}
                >
                    Subscribe to Updates
                </button>
            </div>

            {/* 📩 Subscribe Modal (Popup) */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative">
                        <button
                            className="absolute top-3 right-4 text-gray-500 hover:text-gray-700"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ✕
                        </button>
                        <h3 className="text-2xl font-semibold mb-4">Subscribe to Zenko</h3>
                        <p className="text-gray-600 mb-4">
                            Stay updated with new music, artist releases, and exclusive Zenko content.
                        </p>

                        {/* Form Inputs */}
                        <form className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-3 rounded-md border border-gray-300 w-full"
                            />
                            <input
                                type="tel"
                                placeholder="Enter your phone number (optional)"
                                className="p-3 rounded-md border border-gray-300 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-matcha text-black px-6 py-3 rounded-md hover:bg-green-300 transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            )}


        </section>
    );
}
