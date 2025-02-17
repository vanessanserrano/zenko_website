// src/app/layout.tsx
"use client";

import "./globals.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [showCreativeDropdown, setShowCreativeDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null); // Ensure it's a div

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowCreativeDropdown(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <html lang="en">
        <body className="bg-cream text-white min-h-screen">
        <nav className="bg-black text-white p-6 flex justify-between items-center shadow-lg">
            {/* Clickable Zenko Logo */}
            <Link href="/" className="text-3xl font-bold tracking-wide uppercase text-matcha hover:text-white transition">
                Zenko
            </Link>

            {/* Navigation Links */}
            <ul className="flex gap-8 text-lg">

                <li>
                    <Link href="/artists" className="hover:text-matcha transition">Artists</Link>
                </li>
                <li>
                    <Link href="/foundation" className="hover:text-matcha transition">Foundation</Link>
                </li>


                {/* Clickable Creative Dropdown (MaiZen & ZenSho) */}
                <li className="relative">
                    <button
                        onClick={() => setShowCreativeDropdown(!showCreativeDropdown)}
                        className="hover:text-matcha transition focus:outline-none"
                    >
                        Creative
                    </button>

                    {showCreativeDropdown && (
                        <div ref={dropdownRef}
                             className="absolute left-0 mt-2 w-48 bg-black text-white p-2 rounded shadow-lg z-10">
                            <ul>
                                <li>
                                    <Link href="/MaiZen" className="block px-4 py-2 hover:text-matcha transition"
                                          onClick={() => setShowCreativeDropdown(false)}>
                                        MaiZen
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ZenSho" className="block px-4 py-2 hover:text-matcha transition"
                                          onClick={() => setShowCreativeDropdown(false)}>
                                        ZenSho
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </li>

                <li>
                    <Link href="/merch" className="hover:text-matcha transition">Maison Kitsune</Link>
                </li>

                <li>
                    <Link href="/about" className="hover:text-matcha transition">About</Link>
                </li>
            </ul>
        </nav>

        <main className="p-8 bg-black rounded-lg shadow-md mx-6 my-4 mt-20">
            {children}
        </main>
        </body>
        </html>
    );
}
