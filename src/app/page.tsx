// src/app/page.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <section className="text-center p-8">
            {/* 🌀 Animated Hero Section with Logo */}
            <motion.div
                className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] w-full bg-black rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Background Image or Video */}


                {/* Zenko Logo */}
                <motion.div
                    className="relative z-10 flex flex-col items-center"
                    initial={{ opacity: 2, scale: 0.8 }}
                    animate={{ opacity: 2, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    <Image
                        src="/images/zenko_lg.png"
                        alt="Zenko Logo"
                        width={1200}
                        height={1200}
                        className="rounded-full shadow-lg"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold text-matcha mt-4">

                    </h1>
                    <p className="text-lg text-white mt-2 max-w-lg px-6">
                    </p>
                </motion.div>
            </motion.div>

            {/* 🔥 New Music Section - Scrollable */}
            <div className="mt-0">
                <h2 className="text-7xl font-bold bg-black text-matcha p-6 rounded-lg">
                    Empowering Art, Elevating Voices
                </h2>
                <p className="mt-5 text-lg max-w-15xl mx-auto text-white-300">
                    At Zenko, we believe that creativity has the power to transform the
                    world. Our mission is to empower artists, elevate voices, and inspire
                    change by seamlessly blending art, fashion, and music with social
                    responsibility.
                </p>
            </div>

            <div className="mt-20">
                <h3 className="text-5xl font-bold mb-6 text-matcha">New Music</h3>

                {/* Scrollable Music Cards */}
                <div className="flex overflow-x-auto scroll-smooth space-x-6 p-4 scrollbar-hide">
                    {[
                        {src: "/images/bleed.png", title: "Nosebleeds", artist: "Doechii"},
                        {src: "/images/alligator.jpeg", title: "Alligator Bites Never Heal", artist: "Doechii"},
                        {src: "/images/hmhas.webp", title: "Hit Me Hard and Soft", artist: "Zuki"},
                        {src: "/images/good.png", title: "Good Luck Babe", artist: "Chappell Roan"},
                        {src: "/images/hitmehard.jpg", title: "Hit Me Hard Deluxe", artist: "Zuki"}
                    ].map((music, index) => (
                        <div key={index}
                             className="w-70 h-70 border rounded-lg shadow-lg bg-black text-matcha flex flex-col items-center p-4">

                            <div className="w-60 h-60 relative">
                                <Image
                                    src={music.src}
                                    alt={music.title}
                                    layout="fill"
                                    className="rounded-md object-cover"
                                />
                            </div>
                            <h4 className="text-lg font-semibold mt-3">{music.title}</h4></div>
                    ))}
                </div>
            </div>

            {/* 🎤 Artists Section */}
            <div className="mt-12">
                <h3 className="text-5xl font-bold mb-6 text-matcha">Artists</h3>

                <div className="flex overflow-x-auto scroll-smooth space-x-6 p-4">
                    {[
                        //{src: "/images/gakko.png", name: "Atarashii Gakko!"},
                        {src: "/images/chappell.jpg", name: "Chappell Roan"},
                        {src: "/images/doechii.jpg", name: "Doechii"},
                        {src: "/images/chappell.jpg", name: "Chappell Roan"},
                        {src: "/images/doechii.jpg", name: "Doechii"},
                        {src: "/images/chappell.jpg", name: "Chappell Roan"},
                        {src: "/images/doechii.jpg", name: "Doechii"}
                        //{src: "/images/ikuta.png", name: "Ikuta"},
                        //{src: "/images/njz.png", name: "NJZ"},
                        //{src: "/images/yoasobi.jpg", name: "Yoasobi"},
                        //{src: "/images/zu.png", name: "Zuki"}
                    ].map((artist, index) => (
                        <Link key={index} href="/artists">
                            <div
                                className="w-70 h-70 border rounded-lg shadow-lg bg-black text-green flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition">
                                <div className="w-60 h-60 relative">
                                    <Image
                                        src={artist.src}
                                        alt={artist.name}
                                        layout="fill"
                                        className="rounded-md object-cover"
                                    />
                                </div>
                                <h4 className="text-lg font-semibold mt-3">{artist.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* 🛍️ Merch Section */}
            <div className="mt-12">
                <h3 className="text-5xl font-bold mb-6">New Merch</h3>

                <div className="flex overflow-x-auto scroll-smooth space-x-6 p-4 scrollbar-hide">
                    {[
                        {
                            src: "/images/merch1.webp",
                            name: " Merch",
                            link: "https://store.billieeilish.com/?srsltid=AfmBOooMflU22RyQxbOfIIZa6cwxjut1EOHyEfh85UR_yhl0ndTUfVmD"
                        },
                        {
                            src: "/images/merch5.png",
                            name: "Chappell Roan Merch",
                            link: "https://chappellroan.redstarmerch.com/"
                        },
                        {src: "/images/merch7.webp", name: " Merch", link: "https://njz-official.com"},
                        {
                            src: "/images/merch7.jpg",
                            name: " Merch",
                            link: "https://yoasobi-onlinestore.com/s/n135ec/?ima=3304"
                        },
                        {src: "/images/merch3.webp", name: "Doechii Merch", link: "https://www.iamdoechii.com/#/store"}
                    ].map((merch, index) => (
                        <a
                            key={index}
                            href={merch.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                className="w-70 h-70 border rounded-lg shad ow-lg bg-black text-matcha flex flex-col items-center p-4 cursor-pointer hover:scale-105 transition">
                                <div className="w-60 h-60 relative">
                                    <Image src={merch.src} alt={merch.name} layout="fill"
                                           className="rounded-md object-cover"/>
                                </div>
                                <h4 className="text-lg font-semibold mt-3">{merch.name}</h4>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* 🌍 Explore Zenko (Clickable Cards) */}
            <div className="mt-12 text-center">
                <h3 className="text-5xl font-bold mb-6 text-matcha">Explore Zenko</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {[
                        {name: "Foundation", description: "Learn about Zenko's impact.", link: "/foundation"},
                        {name: "MaiZen", description: "Zenko’s Dance & Arts Initiative.", link: "/MaiZen"},
                        {name: "ZenSho", description: "Zenko's Film & Media projects.", link: "/ZenSho"}
                    ].map((item, index) => (
                        <Link key={index} href={item.link}>
                            <div
                                className="p-6 border rounded-lg shadow-lg bg-white text-black cursor-pointer hover:scale-105 transition w-80 mx-auto">
                                <h4 className="text-xl font-semibold">{item.name}</h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


            {/* 🏢 Office Locations */}
            <div className="mt-12">
                <h3 className="text-5xl font-bold mb-6">Our Offices</h3>
                <div className="flex flex-wrap justify-center gap-6">
                    {[
                        {city: "Los Angeles", office: "Zenko HQ"},
                        {city: "Tokyo", office: "Zenko Japan"},
                        {city: "Seoul", office: "Zenko Korea"}
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

