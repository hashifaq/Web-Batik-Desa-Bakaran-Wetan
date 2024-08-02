import Navbar from "../components/navbar";
import CaraCarousel from "../components/CaraCarousel";

export default function CaraMembatik() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-brown">
            <Navbar></Navbar>
            <div className="relative h-full">
                <img
                    src="/assets/bg-cara.png"
                    alt="bg-cara-membatik"
                    className="w-full"
                />
                <div className="absolute inset-0 bg-darkbrown opacity-80"></div>

                <div className="absolute inset-0 bg-transparent">
                    <div className="flex justify-between mt-6">
                        <div className="bg-yellow w-36 h-3 mt-6"></div>
                        <div className="text-6xl font-bold italic font-zilla">
                            Cara Membatik
                        </div>
                        <div className="flex items-center bg-yellow w-3/5 h-3 mt-6"></div>
                    </div>
                    <div className="">
                        <CaraCarousel></CaraCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
