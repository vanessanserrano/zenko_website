// src/app/merch/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


export default function Merch() {
    return (
        <section className="p-8">
            <motion.div
                className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] w-full bg-black rounded-lg shadow-lg overflow-hidden"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
            >
                {/* Background Image or Video */}


                {/* Zenko Logo */}
                <motion.div
                    className="relative z-10 flex flex-col items-center"
                    initial={{opacity: 2, scale: 0.8}}
                    animate={{opacity: 2, scale: 1}}
                    transition={{delay: 0.5, duration: 1}}
                >
                    <Image
                        src="/images/kitsune_logo.png"
                        alt="Zenko Logo"
                        width={1200}
                        height={1200}
                        className="rounded-sm shadow-lg"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold text-matcha mt-4">

                    </h1>
                    <p className="text-lg text-white mt-2 max-w-lg px-6">
                    </p>
                </motion.div>
            </motion.div>

            <h2 className="text-8xl font-bold text-center bg-black text-cream p-4 rounded-md"></h2>
            <p className="mt-4 text-lg text-center">
                Maison means house in French and Kitsuné is the Japanese word for fox, a symbol of versatility.
                And just like a fox, the brand is always moving and reinventing itself, celebrating new ideas and
                inspirations across creative fields.
            </p>


            <div className="mt-12">
                <h3 className="text-5xl font-bold mb-6 text-matcha"></h3>
                <div className="flex overflow-x-auto scroll-smooth space-x-10 p-5">
                    {[
                        {src: "/images/jacket_2.webp", name: ""},
                        {src: "/images/ring_2.webp", name: ""},
                        {src: "/images/shoe_1.jpg", name: ""},
                        {src: "/images/beanie_1.jpg", name: ""},
                        {src: "/images/tote_1.jpg", name: ""},
                        {src: "/images/button_1.jpg", name: ""},
                        {src: "/images/cardigan_1.jpg", name: ""},
                        {src: "/images/cardigan_2.webp", name: ""},
                        {src: "/images/cardigan_3.webp", name: ""},
                        {src: "/images/hat_1.webp", name: ""},
                        {src: "/images/jacket_1.jpg", name: ""},
                        {src: "/images/ring_1.webp", name: ""},
                        {src: "/images/tank_1.jpg", name: ""}

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




        </section>
    );
}
