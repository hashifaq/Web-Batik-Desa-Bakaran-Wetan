import React from "react";

const CarouselSlide = ({ imgSrc, altText, title, description }) => {
    return (
        <div className="relative">
            <div className="relative w-full">
                <img src={imgSrc} alt={altText} className="w-full h-auto" />
                <div className="absolute inset-0 bg-darkbrown opacity-60"></div>
            </div>
            <div className="absolute bottom-0 left-0 flex items-center p-20 w-2/3 text-left">
                <div className="text-white px-4 md:px-8 flex flex-col space-y-2">
                    <h2 className="text-5xl font-bold mb-4">{title}</h2>
                    <p className="text-xl line-clamp-3">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselSlide;
