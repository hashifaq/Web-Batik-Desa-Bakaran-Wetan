import ContohCara from "./ContohCara";

export default function CaraBatik({
    imgSrc,
    altText,
    title,
    description,
    layout,
}) {
    return (
        <>
            {layout === 1 ? (
                <div className="flex m-20 gap-20 items-center justify-center">
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
                <div className="flex flex-col mx-28 my-12 gap-8 items-center justify-center">
                    <div className="flex justify-center items-center">
                        <div className="w-2/3">
                            <img src={imgSrc} alt={altText} className="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 h-3/4">
                        <div className="flex items-center justify-center text-center">
                            <div className="text-4xl font-poppins tracking-wider font-bold bg-white text-darkbrown p-2 w-fit">
                                {title}
                            </div>
                        </div>
                        <div className="text-xl font-poppins font-medium leading-loose text-white tracking-wider">
                            {description}
                        </div>
                    </div>
                </div>
            ) : layout === 3 ? (
                <div className="mt-4">
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
            ) : null}
        </>
    );
}
