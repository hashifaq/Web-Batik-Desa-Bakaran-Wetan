import Navbar from "../components/navbar";
import Footer from "../components/footer";

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
                    Di Museum Batik Bakaran Sudewi, pengunjung dapat menikmati keindahan kain batik dan melihat berbagai alat tradisional yang digunakan dalam pembuatannya. Gambar di atas menunjukkan alat pewarna alami dan peralatan lain yang digunakan oleh pengrajin batik sejak dahulu. Koleksi ini membantu pengunjung memahami teknik dan alat yang mendukung seni batik, serta menghargai warisan budaya yang kaya ini.
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
                Museum Batik Bakaran Sudewi menampilkan beragam koleksi kain batik Bakaran serta alat-alat tradisional yang digunakan dalam pembuatannya. Gambar di atas menunjukkan ruang pameran yang terorganisir dengan baik, menampilkan berbagai motif batik khas Bakaran. Selain itu, museum ini juga menjelaskan proses pembuatan batik tulis Bakaran, memberikan pengalaman edukatif yang mendalam bagi para pengunjung.
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
                    Museum Batik Bakaran Sudewi menampilkan koleksi kain batik yang beragam dan memukau. Gambar di atas memperlihatkan keindahan motif-motif batik Bakaran, yang dikenal karena detailnya yang rumit, perpaduan warna yang menawan, dan simbol-simbol tradisional yang sarat makna. Motif-motif ini mencerminkan keunggulan seni batik lokal dan keunikan budaya Bakaran.
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
                Di Museum Batik Bakaran, Anda tidak hanya menemukan kain batik yang memukau, tetapi juga berbagai produk jadi seperti baju, tas, dan aksesori. Gambar menunjukkan produk batik siap pakai, termasuk pakaian untuk dewasa dan anak-anak. Pengunjung dapat membeli barang-barang batik khas Bakaran sebagai cendera mata. Museum ini mendukung pengrajin lokal dengan menawarkan produk berkualitas tinggi yang siap pakai.
                </div>
            </div>
            <Footer />
        </div>
    );
}
