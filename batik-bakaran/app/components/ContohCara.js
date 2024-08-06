export default function ContohCara({ number, title, imgSrc, altText }) {
    return (
        <div>
            <div className="flex flex-row gap-4 md:gap-2">
                <div className="flex">
                    <div className="flex items-center justify-center w-10 h-10 bg-lightgrey text-darkbrown font-bold text-2xl rounded-full">
                        {number}
                    </div>
                </div>
                <div className="flex flex-col flex-grow">
                    <img src={imgSrc} alt={altText} className="h-48 w-auto" />
                    <div className="font-poppins font-semibold text-white text-center">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}
