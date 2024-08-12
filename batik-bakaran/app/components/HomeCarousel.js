"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import CarouselSlide from "./CarouselSlide";

export default function HomeCarousel() {
    return (
        <div>
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                useKeyboardArrows
                interval={3000}
            >
                <CarouselSlide
                    imgSrc="/assets/carousel-sejarah.png"
                    altText="Sejarah Batik"
                    linkRef="/sejarah"
                    title="Sejarah Batik"
                    description="Selami sejarah panjang dan kaya dari Batik Bakaran yang telah menjadi bagian integral dari warisan budaya Indonesia. Temukan bagaimana batik ini berkembang dari masa ke masa dan mengapa ia tetap mempesona hingga hari ini."
                />
                <CarouselSlide
                    imgSrc="/assets/carousel-tentang.png"
                    altText="Tentang Museum"
                    linkRef="/tentang-kami"
                    title="Tentang Museum"
                    description="Kenali Museum Batik Bakaran Sudewi, tempat di mana warisan budaya dan seni batik hidup dan bernafas. Pelajari lebih lanjut tentang misi kami, sejarah museum, dan dedikasi kami dalam melestarikan dan mempromosikan seni batik."
                />
                <CarouselSlide
                    imgSrc="/assets/carousel-jenis.png"
                    altText="Jenis Batik"
                    linkRef="/ragam-batik"
                    title="Jenis Batik"
                    description="Jelajahi berbagai jenis Batik Bakaran yang memukau dengan beragam motif dan makna filosofisnya. Dari yang tradisional hingga kontemporer, temukan keindahan dan keragaman yang ditawarkan oleh batik khas Bakaran."
                />
                <CarouselSlide
                    imgSrc="/assets/carousel-cara.png"
                    altText="Cara Membatik"
                    linkRef="/cara-membatik"
                    title="Cara Membatik"
                    description="Kenali dan pahami langkah-langkah mendetail dalam proses pembuatan Batik Bakaran dan temukan seni di balik setiap goresan malam. Dari desain hingga pewarnaan, pelajari cara membatik dan ciptakan karya seni Anda sendiri."
                />
            </Carousel>
        </div>
    );
}
