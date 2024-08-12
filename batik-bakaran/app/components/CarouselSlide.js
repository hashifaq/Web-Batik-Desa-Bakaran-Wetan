import React from "react";

const CarouselSlide = ({ imgSrc, altText, linkRef, title, description }) => {
    return (
        <div className="relative">
            <div className="relative w-full h-[calc(100vw*(5/6))] md:h-auto">
                <img
                    src={imgSrc}
                    alt={altText}
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-darkbrown opacity-60"></div>
            </div>
            <div className="absolute bottom-0 left-0 flex items-center py-12 lg:py-24 px-4 lg:px-12 w-5/6 md:w-3/4 lg:w-2/3 text-left">
                <div className="text-white px-8 flex flex-col lg:gap-2">
                    <a
                        href={linkRef}
                        className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 font-zilla hover:text-lightgrey"
                    >
                        {title}
                    </a>
                    <p className="text-sm lg:text-xl line-clamp-3 leading-loose lg:leading-loose font-poppins">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;
