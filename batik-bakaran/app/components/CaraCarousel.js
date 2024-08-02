"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CaraBatik from "./CaraBatik";

export default function CaraCarousel() {
    return (
        <div className="">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                useKeyboardArrows
                interval={30000}
            >
                <CaraBatik
                    imgSrc="/assets/cara-1.png"
                    altText="Desain Motif Batik"
                    title="Desain Motif Batik"
                    description="Proses pembuatan batik tulis Bakaran dimulai dengan merancang motif yang akan diaplikasikan pada kain. Desain ini biasanya dibuat oleh seorang desainer batik yang memiliki pemahaman mendalam tentang pola tradisional dan filosofi yang ada di balik setiap motif."
                    layout={1}
                />

                <CaraBatik
                    imgSrc="/assets/cara-2.png"
                    altText="Menjiplak Motif ke Kain"
                    title="Menjiplak Motif ke Kain atau Klowongan/Mola"
                    description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
                    layout={2}
                />

                <CaraBatik
                    imgSrc="/assets/cara-3.png"
                    altText="Isen-Ise"
                    title="Isen-Isen (Cecekan/Titik, Sawutan)"
                    description="Proses pembuatan batik tulis Bakaran dimulai dengan merancang motif yang akan diaplikasikan pada kain. Desain ini biasanya dibuat oleh seorang desainer batik yang memiliki pemahaman mendalam tentang pola tradisional dan filosofi yang ada di balik setiap motif."
                    layout={1}
                />

                <CaraBatik
                    imgSrc="/assets/cara-4.png"
                    altText="Nembok/Tembokan"
                    title="Nembok/Tembokan"
                    description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
                    layout={2}
                />

                <CaraBatik
                    imgSrc="/assets/cara-5.png"
                    altText="Medel"
                    title="Medel"
                    description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
                    layout={2}
                />

                <CaraBatik
                    imgSrc="/assets/cara-6.png"
                    altText="Ngerik dan Ngremuk"
                    title="Ngerik dan Ngremuk"
                    description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
                    layout={2}
                />

                <CaraBatik
                    imgSrc="/assets/cara-7.png"
                    altText="Mbironi"
                    title="Mbironi"
                    description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
                    layout={2}
                />

                <CaraBatik
                    imgSrc="/assets/cara-8.png"
                    altText="Nyogo"
                    title="Nyogo"
                    description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
                    layout={2}
                />

                <CaraBatik
                    imgSrc="/assets/cara-9.png"
                    altText="Nglorod"
                    title="Nglorod"
                    description="Proses pembuatan batik tulis Bakaran dimulai dengan merancang motif yang akan diaplikasikan pada kain. Desain ini biasanya dibuat oleh seorang desainer batik yang memiliki pemahaman mendalam tentang pola tradisional dan filosofi yang ada di balik setiap motif."
                    layout={1}
                />

                <CaraBatik layout={3} />
            </Carousel>
        </div>
    );
}
