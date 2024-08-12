"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";
import CaraBatik from "./CaraBatik";
import { useMediaQuery } from "react-responsive";

export default function CaraCarousel() {
    const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
    const isMediumScreen = useMediaQuery({ query: "(min-width: 768px)" });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // Return null until the client-side renders
    }

    // Create an array of CaraBatik components
    const caraBatikItems = [
        <CaraBatik
            key="1"
            imgSrc="/assets/cara-1.png"
            altText="Desain Motif Batik"
            title="Desain Motif Batik"
            description="Proses pembuatan batik tulis Bakaran dimulai dengan merancang motif yang akan diaplikasikan pada kain. Desain ini biasanya dibuat oleh seorang desainer batik yang memiliki pemahaman mendalam tentang pola tradisional dan filosofi yang ada di balik setiap motif."
            layout={isLargeScreen ? 1 : 3}
        />,
        <CaraBatik
            key="2"
            imgSrc="/assets/cara-2.png"
            altText="Menjiplak Motif ke Kain"
            title="Menjiplak Motif ke Kain atau Klowongan/Mola"
            description="Setelah desain selesai, motif tersebut kemudian dijiplak atau ditransfer ke kain menggunakan klowongan atau mola, yaitu alat bantu untuk memudahkan proses penyalinan motif ke kain. Proses ini memerlukan ketelitian tinggi untuk memastikan motif dipindahkan dengan akurat."
            layout={2}
        />,
        <CaraBatik
            key="3"
            imgSrc="/assets/cara-3.png"
            altText="Isen-Ise"
            title="Isen-Isen (Cecekan/Titik, Sawutan)"
            description="Isen-isen adalah proses mengisi bagian-bagian dalam motif dengan berbagai pola tambahan seperti titik-titik (cecekan) atau garis-garis pendek (sawutan) untuk memberikan detail dan karakter pada motif utama."
            layout={isLargeScreen ? 1 : 3}
        />,
        <CaraBatik
            key="4"
            imgSrc="/assets/cara-4.png"
            altText="Nembok/Tembokan"
            title="Nembok/Tembokan"
            description="Nembok adalah proses menutup bagian tertentu dari kain dengan malam (lilin) untuk melindungi dari pewarnaan. Malam diaplikasikan menggunakan canting untuk menjaga area yang akan tetap berwarna putih atau warna asli kain."
            layout={2}
        />,
        <CaraBatik
            key="5"
            imgSrc="/assets/cara-5.png"
            altText="Medel"
            title="Medel"
            description="Proses medel adalah tahap pencelupan kain yang telah ditutup sebagian dengan malam ke dalam larutan pewarna. Warna akan menempel pada bagian kain yang tidak tertutup malam."
            layout={2}
        />,
        <CaraBatik
            key="6"
            imgSrc="/assets/cara-6.png"
            altText="Ngerik dan Ngremuk"
            title="Ngerik dan Ngremuk"
            description="Setelah proses pewarnaan pertama, malam pada kain dikerik atau dihilangkan, lalu kain dipegang dan diremas untuk menghasilkan efek retakan yang dikenal sebagai remukan. Proses ini memberikan tampilan khas pada batik Bakaran."
            layout={2}
        />,
        <CaraBatik
            key="7"
            imgSrc="/assets/cara-7.png"
            altText="Mbironi"
            title="Mbironi"
            description="Proses ini melibatkan penutupan bagian kain yang sudah diwarnai dan ingin dipertahankan dengan malam lagi sebelum dilakukan pewarnaan ulang dengan warna yang berbeda."
            layout={2}
        />,
        <CaraBatik
            key="8"
            imgSrc="/assets/cara-8.png"
            altText="Nyogo"
            title="Nyogo"
            description="Nyogo adalah tahap pencelupan kedua atau lebih setelah mbironi, untuk memberikan warna tambahan pada kain. Proses ini bisa diulang beberapa kali sesuai dengan jumlah warna yang diinginkan."
            layout={2}
        />,
        <CaraBatik
            key="9"
            imgSrc="/assets/cara-9.png"
            altText="Nglorod"
            title="Nglorod"
            description="Nglorod adalah tahap akhir dimana seluruh malam dihilangkan dari kain dengan cara direbus dalam air mendidih. Setelah malam terlepas, kain dicuci bersih dan dikeringkan. Hasil akhirnya adalah kain batik tulis dengan motif yang indah dan kompleks."
            layout={isLargeScreen ? 1 : 3}
        />,
    ];

    // Conditionally add the last item
    if (isMediumScreen) {
        caraBatikItems.push(<CaraBatik key="10" layout={4} />);
    }

    return (
        <div className="">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                useKeyboardArrows
                interval={5000}
            >
                {caraBatikItems}
            </Carousel>
        </div>
    );
}
