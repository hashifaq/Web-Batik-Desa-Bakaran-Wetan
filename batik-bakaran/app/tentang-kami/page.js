import Navbar from "../components/navbar";

export default function TentangKami() {
    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <div className="relative">
                <img
                    src="/assets/mbbs-crop.jpg"
                    className="w-full h-72"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-brown opacity-50"></div>
            </div>
            {/* <div className="flex justify-between mt-20">
                <div className="bg-yellow w-40 h-3 mt-4"></div>
                <div className="text-5xl font-bold italic font-zilla">Tentang Museum Batik</div>
                <div className="flex items-center bg-yellow w-1/2 h-3 mt-4"></div>
            </div> */}
            <div className="flex items-center justify-center mt-20">
                <div className="h-2 bg-yellow flex-[1]"></div>
                <div className="px-6 text-5xl text-darkbrown font-bold font-zilla">Tentang Museum Batik</div>
                <div className="h-2 bg-yellow flex-[1_1_50%]"></div>
            </div>

            <div className="flex justify-center items-center relative mt-20 mb-16 w-full">
                <img
                    src="/assets/mbbs2.png"
                    className="max-w-3xl h-auto"
                />
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-grey max-w-7xl p-5 text-lg leading-8 font-semibold text-darkbrown">
                    Museum Batik Bakaran Sudewi adalah destinasi wisata edukasi yang didedikasikan untuk melestarikan dan memperkenalkan seni batik tulis khas Bakaran. Diresmikan pada Oktober 2022, museum ini menjadi pusat pengetahuan dan apresiasi terhadap warisan budaya yang kaya dan beragam ini.
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mb-16 mt-24">
                <div>
                    <img
                        src="/assets/t1.png"
                        className="max-w-lg h-auto -mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t2.png"
                        className="max-w-lg h-auto -ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-grey max-w-7xl p-5 text-lg leading-8 font-semibold  text-darkbrown">
                    Museum Batik Bakaran Sudewi adalah destinasi wisata edukasi yang didedikasikan untuk melestarikan dan memperkenalkan seni batik tulis khas Bakaran. Diresmikan pada Oktober 2022, museum ini menjadi pusat pengetahuan dan apresiasi terhadap warisan budaya yang kaya dan beragam ini.
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mb-16 mt-24">
                <div>
                    <img
                        src="/assets/t3.png"
                        className="max-w-lg h-auto -mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t4.png"
                        className="max-w-lg h-auto -ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-grey max-w-7xl p-5 text-lg leading-8 font-semibold text-darkbrown">
                    Museum Batik Bakaran Sudewi adalah destinasi wisata edukasi yang didedikasikan untuk melestarikan dan memperkenalkan seni batik tulis khas Bakaran. Diresmikan pada Oktober 2022, museum ini menjadi pusat pengetahuan dan apresiasi terhadap warisan budaya yang kaya dan beragam ini.
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mb-16 mt-24">
                <div>
                    <img
                        src="/assets/t5.png"
                        className="max-w-lg h-auto -mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t6.png"
                        className="max-w-lg h-auto -ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="bg-grey max-w-7xl p-5 text-lg leading-8 font-semibold text-darkbrown">
                    Museum Batik Bakaran Sudewi adalah destinasi wisata edukasi yang didedikasikan untuk melestarikan dan memperkenalkan seni batik tulis khas Bakaran. Diresmikan pada Oktober 2022, museum ini menjadi pusat pengetahuan dan apresiasi terhadap warisan budaya yang kaya dan beragam ini.
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mb-16 mt-24">
                <div>
                    <img
                        src="/assets/t7.png"
                        className="max-w-lg h-auto -mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t8.png"
                        className="max-w-lg h-auto -ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mb-20">
                <div className="bg-grey max-w-7xl p-5 text-lg leading-8 font-semibold text-darkbrown">
                    Museum Batik Bakaran Sudewi adalah destinasi wisata edukasi yang didedikasikan untuk melestarikan dan memperkenalkan seni batik tulis khas Bakaran. Diresmikan pada Oktober 2022, museum ini menjadi pusat pengetahuan dan apresiasi terhadap warisan budaya yang kaya dan beragam ini.
                </div>
            </div>
        </div>
    );
}
