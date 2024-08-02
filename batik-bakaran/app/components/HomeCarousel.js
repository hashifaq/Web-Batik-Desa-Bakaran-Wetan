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
                    title="Sejarah Batik"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim venenatis enim eget porttitor. Cras ultrices metus leo, sit amet pellentesque eros auctor sed. Sed mi leo, facilisis sed dictum vitae, gravida sed mauris..."
                />
                <CarouselSlide
                    imgSrc="/assets/carousel-tentang.png"
                    altText="Tentang Museum"
                    title="Tentang Museum"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim venenatis enim eget porttitor. Cras ultrices metus leo, sit amet pellentesque eros auctor sed. Sed mi leo, facilisis sed dictum vitae, gravida sed mauris..."
                />
                <CarouselSlide
                    imgSrc="/assets/carousel-jenis.png"
                    altText="Jenis Batik"
                    title="Jenis Batik"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim venenatis enim eget porttitor. Cras ultrices metus leo, sit amet pellentesque eros auctor sed. Sed mi leo, facilisis sed dictum vitae, gravida sed mauris..."
                />
                <CarouselSlide
                    imgSrc="/assets/carousel-cara.png"
                    altText="Cara Membatik"
                    title="Cara Membatik"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim venenatis enim eget porttitor. Cras ultrices metus leo, sit amet pellentesque eros auctor sed. Sed mi leo, facilisis sed dictum vitae, gravida sed mauris..."
                />
            </Carousel>
        </div>
    );
}
