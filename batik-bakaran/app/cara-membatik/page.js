import Navbar from "../components/navbar";
import CaraCarousel from "../components/CaraCarousel";
import Footer from "../components/footer";

export default function CaraMembatik() {
    return (
        <div className="flex min-h-screen flex-col justify-between bg-brown">
            <Navbar></Navbar>
            <div className="relative h-full">
                <img
                    src="/assets/bg-cara.png"
                    alt="bg-cara-membatik"
                    className="h-screen"
                />
                <div className="absolute inset-0 bg-darkbrown opacity-80"></div>

                <div className="absolute inset-0 bg-transparent">
                    {/* <div className="flex justify-between mt-6">
                        <div className="bg-yellow w-36 h-3 mt-6"></div>
                        <div className="text-6xl font-bold italic text-white font-zilla">
                            Cara Membatik
                        </div>
                        <div className="flex items-center bg-yellow w-3/5 h-3 mt-6"></div>
                    </div> */}
                    <div className="flex items-center justify-center mt-4">
                        <div className="h-2 bg-yellow flex-[10]"></div>
                        <div className="px-6 text-5xl text-white font-bold font-zilla">Cara Membatik</div>
                        <div className="h-2 bg-yellow flex-[70]"></div>
                    </div>
                    <div className="">
                        <CaraCarousel></CaraCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
}
