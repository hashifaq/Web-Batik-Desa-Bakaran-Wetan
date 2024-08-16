export default function FeatureSection({ number, title, description }) {
    return (
        <div 
            className="grid grid-cols-6 items-start gap-4 md:gap-8 lg:gap-16"
            data-aos="fade-up" // Penambahan AOS animation trigger
        >
            <div className="flex justify-center items-center col-span-1">
                <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-lightgrey text-darkbrown font-bold text-xl md:text-3xl lg:text-4xl rounded-full aspect-w-1 aspect-h-1">
                    {number}
                </div>
            </div>
            <div className="col-span-5">
                <div className="flex flex-col text-darkbrown gap-2 md:gap-4 lg:gap-6">
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-bold">
                        {title}
                    </h2>
                    <p className="text-sm md:text-xl leading-relaxed md:leading-relaxed text-justify">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
