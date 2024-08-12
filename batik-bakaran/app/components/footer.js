"use client";

import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function Footer() {
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return null until the client-side renders
    }

    return (
        <div>
            <div className="line"></div>
            <div className="bg-darkbrown py-6 px-6 md:px-10 lg:px-20">
                {isLargeScreen ? (
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex space-x-2 lg:space-x-4 bg-lightgrey py-2 px-4 rounded-full items-center justify-center">
                            <img
                                src="/assets/logo-ugm.png"
                                alt="Logo UGM"
                                className="w-7 h-7 md:w-10 md:h-10 object-contain"
                            />
                            <img
                                src="/assets/logo-kkn.png"
                                alt="Logo KKN"
                                className="w-7 h-7 md:w-10 md:h-10 object-contain"
                            />
                            <img
                                src="/assets/logo-arung.png"
                                alt="Logo Arung Juwana"
                                className="w-7 h-7 md:w-10 md:h-10 object-contain"
                            />
                        </div>
                        <p className="text-xs md:text-sm text-white">
                            © KKN Arung Juwana 2024
                        </p>
                        <div className="flex gap-6 lg:gap-8">
                            <a
                                href="https://www.instagram.com/museum_batikbakaran/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-lightgrey rounded-full flex justify-center items-center hover:scale-95"
                            >
                                <FaInstagram className="text-black w-6 h-6" />
                            </a>
                            <a
                                href="https://web.facebook.com/profile.php?id=100091640586957"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-lightgrey rounded-full flex justify-center items-center hover:scale-95"
                            >
                                <FaFacebookF className="text-black w-6 h-6" />
                            </a>
                            <a
                                href="https://shopee.co.id/museumbatikbakaran"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-lightgrey rounded-full flex justify-center items-center hover:scale-95"
                            >
                                <img
                                    src="/assets/logo-shopee.png"
                                    alt="Logo Shopee"
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
                        <div className="flex flex-col flex-start items-center md:flex-col gap-3 md:gap-4">
                            <div className="flex space-x-2 md:space-x-4 bg-lightgrey py-2 px-4 rounded-full items-center justify-center">
                                <img
                                    src="/assets/logo-ugm.png"
                                    alt="Logo UGM"
                                    className="w-7 h-7 md:w-10 md:h-10 object-contain"
                                />
                                <img
                                    src="/assets/logo-kkn.png"
                                    alt="Logo KKN"
                                    className="w-7 h-7 md:w-10 md:h-10 object-contain"
                                />
                                <img
                                    src="/assets/logo-arung.png"
                                    alt="Logo Arung Juwana"
                                    className="w-7 h-7 md:w-10 md:h-10 object-contain"
                                />
                            </div>
                            <p className="text-xs md:text-sm text-white">
                                © KKN Arung Juwana 2024
                            </p>
                        </div>
                        <div className="flex gap-6 lg:gap-8">
                            <a
                                href="https://www.instagram.com/museum_batikbakaran/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-lightgrey rounded-full flex justify-center items-center hover:scale-95"
                            >
                                <FaInstagram className="text-black w-6 h-6" />
                            </a>
                            <a
                                href="https://web.facebook.com/profile.php?id=100091640586957"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-lightgrey rounded-full flex justify-center items-center hover:scale-95"
                            >
                                <FaFacebookF className="text-black w-6 h-6" />
                            </a>
                            <a
                                href="https://shopee.co.id/museumbatikbakaran"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-lightgrey rounded-full flex justify-center items-center hover:scale-95"
                            >
                                <img
                                    src="/assets/logo-shopee.png"
                                    alt="Logo Shopee"
                                    className="w-6 h-6 object-contain"
                                />
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
