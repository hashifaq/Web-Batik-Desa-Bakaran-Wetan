"use client";
import Navbar from "../components/navbar";
import CaraCarousel from "../components/CaraCarousel";
import HasilCarousel from "../components/HasilCarousel";
import ContohCara from "../components/ContohCara";
import Footer from "../components/footer";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function CaraMembatik() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

    if (!isClient) {
        return null; // Return null until the client-side renders
    }

    return (
        <div className="flex h-screen flex-col justify-between bg-darkbrown">
            <Navbar></Navbar>
            <div className="relative h-full md:h-[calc(100vh-25px)]">
                <img
                    src="/assets/bg-cara.png"
                    alt="bg-cara-membatik"
                    className="h-[80vh] md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-darkbrown opacity-80"></div>

                <div className="absolute inset-0 bg-transparent">
                    <div className="flex items-center justify-center mt-2 md:mt-4">
                        <div className="h-2 bg-yellow flex-[10]"></div>
                        <div className="px-6 text-4xl md:text-5xl text-white font-bold font-zilla">
                            Cara Membatik
                        </div>
                        <div className="h-2 bg-yellow flex-[70]"></div>
                    </div>
                    <div className="">
                        <CaraCarousel></CaraCarousel>
                    </div>
                </div>
            </div>
            {isSmallScreen && (
                <div className="flex flex-col gap-10 mt-4 bg-brown">
                    <div className="flex items-center justify-center mt-2">
                        <div className="h-2 bg-yellow flex-[10]"></div>
                        <div className="px-6 text-4xl text-white font-bold font-zilla">
                            Hasil Tiap Tahap
                        </div>
                        <div className="h-2 bg-yellow flex-[70]"></div>
                    </div>
                    <HasilCarousel></HasilCarousel>
                </div>
            )}
        </div>
    );
}
