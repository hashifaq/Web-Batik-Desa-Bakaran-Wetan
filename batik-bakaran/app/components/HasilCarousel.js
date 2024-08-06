import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ContohCara from "./ContohCara";

export default function HasilCarousel() {
    return (
        <div className="">
            <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                useKeyboardArrows
                interval={100000}
            >
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex flex-col gap-8">
                        <ContohCara
                            number={1}
                            imgSrc="/assets/cara-contoh-1.png"
                            altText="Menggambar Pola"
                            title="Menggambar Pola"
                        />
                        <ContohCara
                            number={2}
                            imgSrc="/assets/cara-contoh-2.png"
                            altText="Klowongan (Mola)"
                            title="Klowongan (Mola)"
                        />
                        <ContohCara
                            number={3}
                            imgSrc="/assets/cara-contoh-3.png"
                            altText="Isen-Isen"
                            title="Isen-Isen"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex flex-col gap-8">
                        <ContohCara
                            number={4}
                            imgSrc="/assets/cara-contoh-4.png"
                            altText="Nembok (Tembokan)"
                            title="Nembok (Tembokan)"
                        />
                        <ContohCara
                            number={5}
                            imgSrc="/assets/cara-contoh-5.png"
                            altText="Wedelan"
                            title="Wedelan"
                        />

                        <ContohCara
                            number={6}
                            imgSrc="/assets/cara-contoh-6.png"
                            altText="Kerikan & Remukan"
                            title="Kerikan & Remukan"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mb-12">
                    <div className="flex flex-col gap-8">
                        <ContohCara
                            number={7}
                            imgSrc="/assets/cara-contoh-7.png"
                            altText="Mbironi"
                            title="Mbironi"
                        />
                        <ContohCara
                            number={8}
                            imgSrc="/assets/cara-contoh-8.png"
                            altText="Nyogo"
                            title="Nyogo"
                        />
                        <ContohCara
                            number={9}
                            imgSrc="/assets/cara-contoh-9.png"
                            altText="Setelah Dilorod"
                            title="Setelah Dilorod"
                        />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
