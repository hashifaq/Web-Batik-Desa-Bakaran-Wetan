"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main className="flex flex-col justify-between">
            <nav className="bg-brown relative">
                <div className="px-8">
                    <div className="flex items-center justify-between h-25">
                        <a
                            href="/"
                            className="flex items-center -ml-4 md:-ml-2"
                        >
                            <img
                                src="/assets/logo-img.png"
                                className="img-logo1 md:img-logo p-1 mr-2"
                                alt="Logo"
                            />
                            <img
                                src="/assets/logo-text.png"
                                className="logo-text1 md:logo-text p-1"
                                alt="Logo"
                            />
                        </a>
                        <div className="block lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white focus:outline-none"
                            >
                                {isOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                        <div className="hidden lg:flex ml-4 items-center space-x-6">
                            <a
                                href="/"
                                className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Beranda
                            </a>
                            <a
                                href="/sejarah"
                                className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Sejarah
                            </a>
                            <a
                                href="/tentang-kami"
                                className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Tentang Kami
                            </a>
                            <a
                                href="/ragam-batik"
                                className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Ragam Batik
                            </a>
                            <a
                                href="/cara-membatik"
                                className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Cara Membatik
                            </a>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="lg:hidden absolute bg-brown w-full left-0 top-full shadow-lg z-50">
                        <div className="px-8 py-4 space-y-4">
                            <a
                                href="/"
                                className="block text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Beranda
                            </a>
                            <a
                                href="/sejarah"
                                className="block text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Sejarah
                            </a>
                            <a
                                href="/tentang-kami"
                                className="block text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Tentang Kami
                            </a>
                            <a
                                href="/ragam-batik"
                                className="block text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Ragam Batik
                            </a>
                            <a
                                href="/cara-membatik"
                                className="block text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Cara Membatik
                            </a>
                        </div>
                    </div>
                )}
                <div className="line"></div>
            </nav>
        </main>
    );
}
