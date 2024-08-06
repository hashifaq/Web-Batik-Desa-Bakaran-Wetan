import ContohCara from "./ContohCara";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export default function CaraBatik({
    imgSrc,
    altText,
    title,
    description,
    layout,
}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

    if (!isClient) {
        return null; // Return null until the client-side renders
    }
    return (
        <>
            {layout === 1 ? (
                <div className="flex m-28 gap-20 items-center justify-center">
                    <div className="w-1/5">
                        <img src={imgSrc} alt={altText} className="" />
                    </div>
                    <div className="flex flex-col gap-8 text-left w-2/3">
                        <div className="text-4xl font-poppins tracking-wider font-bold bg-white text-darkbrown p-2 w-fit">
                            {title}
                        </div>
                        <div className="text-2xl font-poppins font-medium leading-loose text-white tracking-wider">
                            {description}
                        </div>
                    </div>
                </div>
            ) : layout === 2 ? (
                <div className="flex flex-col mx-12 md:mx-28 my-6 md:my-10 lg:my-12 gap-4 md:gap-8 items-center justify-center">
                    <div className="flex justify-center items-center">
                        <div className="md:w-3/4">
                            <img src={imgSrc} alt={altText} className="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 h-3/4">
                        <div className="flex items-center justify-center text-center">
                            <div className="text-xl md:text-4xl font-poppins tracking-wider font-bold bg-white text-darkbrown p-2 w-fit">
                                {title}
                            </div>
                        </div>
                        <div className="text-sm md:text-xl font-poppins font-medium leading-loose md:leading-loose text-white tracking-wider mb-6">
                            {description}
                        </div>
                    </div>
                </div>
            ) : // untuk yg awalnya horizontal (1) jd vertikal (foto potrait hp/tab)
            layout === 3 ? (
                <div className="flex flex-col mx-12 md:mx-28 my-6 md:my-12 gap-4 md:gap-8 items-center justify-center">
                    <div className="flex justify-center items-center">
                        <div className="w-1/2">
                            <img src={imgSrc} alt={altText} className="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6 h-3/4">
                        <div className="flex items-center justify-center text-center">
                            <div className="text-xl md:text-4xl font-poppins tracking-wider font-bold bg-white text-darkbrown p-2 w-fit">
                                {title}
                            </div>
                        </div>
                        <div className="text-sm md:text-xl font-poppins font-medium leading-loose md:leading-loose text-white tracking-wider">
                            {description}
                        </div>
                    </div>
                </div>
            ) : layout === 4 ? (
                isLargeScreen ? (
                    <div className="mt-10">
                        <div className="flex flex-col items-center justify-center gap-0">
                            <div className="flex flex-row items-center gap-16 h-60">
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
                            </div>
                            <div className="flex flex-row items-center gap-16 h-60">
                                <ContohCara
                                    number={6}
                                    imgSrc="/assets/cara-contoh-6.png"
                                    altText="Kerikan & Remukan"
                                    title="Kerikan & Remukan"
                                />
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
                    </div>
                ) : (
                    <div className="m-8">
                        <div className="flex flex-col items-center justify-center gap-8">
                            <div className="flex flex-row items-center gap-8 h-60">
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
                            <div className="flex flex-row items-center gap-8 h-60">
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
                            <div className="flex flex-row items-center gap-8 h-60 mb-12">
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
                    </div>
                )
            ) : null}
        </>
    );
}
