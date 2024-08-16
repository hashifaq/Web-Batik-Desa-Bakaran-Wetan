"use client"

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TentangKami() {
    useEffect(() => {
        AOS.init({
            duration: 1200, 
            offset: 100, 
            delay: 100, 
            easing: 'ease-in-out', 
            once: true, 
            mirror: false, 
        });
    }, []);

    return (
        <div className="flex min-h-screen flex-col bg-white">
            <Navbar />
            <div className="relative">
                <img
                    src="/assets/mbbs-crop.jpg"
                    className="w-full h-28 md:h-50 lg:h-72"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-brown opacity-50"></div>
            </div>
            <div className="flex items-center justify-center mt-4 md:mt-8 lg:mt-20">
                <div className="h-1.5 md:h-2 bg-yellow flex-[1_1_3%] lg:flex-[1]"></div>
                <div className="px-2 md:px-4 text-xl md:text-4xl lg:px-6 lg:text-5xl text-darkbrown font-bold font-zilla">
                    Tentang Museum Batik
                </div>
                <div className="h-1.5 md:h-2 bg-yellow flex-[1_1_30%] lg:flex-[1_1_50%]"></div>
            </div>

            <div className="flex justify-center items-center relative mt-8 md:mt-14 lg:mt-20 mb-16 w-full">
                <img
                    src="/assets/mbbs2.png"
                    className="max-w-xs md:max-w-xl lg:max-w-3xl h-auto"
                    data-aos="fade-up"
                />
            </div>
            <div className="flex justify-center items-center text-justify" data-aos="fade-up">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown">
                    Museum Batik Bakaran Sudewi adalah destinasi wisata edukasi
                    yang didedikasikan untuk melestarikan dan memperkenalkan
                    seni batik tulis khas Bakaran. Diresmikan pada Oktober 2022,
                    museum ini menjadi pusat pengetahuan dan apresiasi terhadap
                    warisan budaya yang kaya dan beragam ini.
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 justify-items-center items-center mb-12 mt-16 lg:mb-16 lg:mt-24" data-aos="fade-up">
                <div>
                    <img
                        src="/assets/t1.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t2.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center text-justify" data-aos="fade-up">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown">
                    Di museum ini, pengunjung dapat menikmati
                    keindahan kain batik dan melihat berbagai alat tradisional
                    yang digunakan dalam pembuatannya. Gambar di atas
                    menunjukkan alat pewarna alami dan peralatan lain yang
                    digunakan oleh pengrajin batik sejak dahulu. Koleksi ini
                    membantu pengunjung memahami teknik dan alat yang mendukung
                    seni batik, serta menghargai warisan budaya yang kaya ini.
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 justify-items-center items-center mb-12 mt-16 lg:mb-16 lg:mt-24" data-aos="fade-up">
                <div>
                    <img
                        src="/assets/t3.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t4.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center text-justify" data-aos="fade-up">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown">
                    Gambar ini menunjukkan suasana dan keadaan museum yang tertata rapi di dalamnya. Pengunjung dapat 
                    dengan leluasa menjelajahi koleksi batik yang beragam, memperhatikan detail dan motif unik dari 
                    setiap kain. Selain itu, museum ini juga menjelaskan proses pembuatan batik tulis Bakaran, memberikan pengalaman
                    edukatif bagi para pengunjung. Pencahayaan yang nyaman dan penataan ruang yang cermat menciptakan suasana yang nyaman, 
                    membuat pengunjung merasa senang menjelajahi keindahan dan kekayaan budaya batik khas Bakaran.
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 justify-items-center items-center mb-12 mt-16 lg:mb-16 lg:mt-24" data-aos="fade-up">
                <div>
                    <img
                        src="/assets/t5.png"
                        className="max-w-xs hidden md:block lg:max-w-lg h-auto lg:-mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t6.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center text-justify">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown " data-aos="fade-up">
                    Museum Batik Bakaran Sudewi menampilkan koleksi kain batik
                    yang beragam dan memukau. Gambar di atas memperlihatkan
                    keindahan motif-motif batik Bakaran, yang dikenal karena
                    detailnya yang rumit, perpaduan warna yang menawan, dan
                    simbol-simbol tradisional yang sarat makna. Motif-motif ini
                    mencerminkan keunggulan seni batik lokal dan keunikan budaya
                    Bakaran.
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 justify-items-center items-center mb-12 mt-16 lg:mb-16 lg:mt-24" data-aos="fade-up">
                <div>
                    <img
                        src="/assets/mr.png"
                        className="max-w-xs lg:max-w-md h-auto lg:-mr-36"
                    />
                </div>
                <div>
                    <img
                        src="/assets/mrs.png"
                        className="max-w-xs hidden md:block lg:max-w-md h-auto lg:-ml-36"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center text-justify">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown " data-aos="fade-up">
                    Batik Bakaran di museum ini dibuat oleh para pengrajin yang memiliki keterampilan luar biasa dalam 
                    seni membatik. Dengan ketelitian dan dedikasi tinggi, mereka mampu menciptakan kain batik yang 
                    tidak hanya indah secara visual, tetapi juga sarat dengan makna dan filosofi yang mendalam. 
                    Keterampilan mereka yang terasah dengan baik memastikan bahwa setiap detail pada batik ini 
                    dieksekusi dengan sempurna, memberikan hasil akhir yang berkualitas tinggi dan bernilai seni tinggi.
                </div>
            </div>
            <div className="grid grid-cols-1 gap-7 md:gap-0 md:grid-cols-2 justify-items-center items-center mb-12 mt-16 lg:mb-16 lg:mt-24" data-aos="fade-up">
                <div>
                    <img
                        src="/assets/t7.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-mr-40"
                    />
                </div>
                <div>
                    <img
                        src="/assets/t8.png"
                        className="max-w-xs lg:max-w-lg h-auto lg:-ml-40"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mb-20 text-justify">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown" data-aos="fade-up">
                    Di Museum Batik Bakaran, Anda tidak hanya menemukan kain
                    batik yang memukau, tetapi juga berbagai produk jadi seperti
                    baju, tas, dan aksesori. Gambar menunjukkan produk batik
                    siap pakai, termasuk pakaian untuk dewasa dan anak-anak.
                    Pengunjung dapat membeli barang-barang batik khas Bakaran
                    sebagai cendera mata. Museum ini mendukung pengrajin lokal
                    dengan menawarkan produk berkualitas tinggi yang siap pakai.
                </div>
            </div>
            <div className="flex justify-center items-center mb-16" data-aos="fade-up">
                <div className="p-1.5 rounded-xl shadow-2xl bg-darkbrown">
                    <div className="border-8 border-white rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1Bf9Z9GbUGtuHJGtR7ZPRY7swI32Ol1M&ehbc=2E312F&noprof=1"
                            width="100%"
                            height="350"
                            className="w-[320px] h-[280px] md:w-[540px] md:h-[380px] lg:w-[640px] lg:h-[480px]"
                            style={{ minHeight: "250px" }}
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mb-20 text-justify" data-aos="fade-up">
                <div className="bg-grey px-7 py-3 md:px-10 md:py-5 text-xs leading-6 md:text-md md:leading-8 lg:leading-loose lg:max-w-7xl lg:px-5 lg:py-5 lg:text-lg font-semibold text-darkbrown">
                    Museum Batik Sudewi di Desa Bakaran Wetan telah menjalin
                    kerja sama dengan 13 pengrajin batik Bakaran sehingga museum
                    ini kini menjadi pusat penjualan batik Bakaran di desa
                    tersebut. Keistimewaan dari kerja sama ini adalah harga yang
                    ditawarkan di museum sama dengan harga yang ditetapkan oleh
                    setiap pengrajin, tanpa mengurangi kualitas produk. Titik
                    lokasi ke-13 pengrajin batik Bakaran tersebut telah
                    tercantum pada peta di atas. Jika Anda memerlukan informasi
                    lebih lanjut atau bantuan terkait batik Bakaran, Museum
                    Batik Sudewi dapat menjadi tempat rujukan yang tepat.
                </div>
            </div>
            <Footer />
        </div>
    );
}
