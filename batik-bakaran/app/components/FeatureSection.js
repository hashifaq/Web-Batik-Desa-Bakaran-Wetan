export default function FeatureSection({ number, title, description }) {
    return (
        <div className="grid grid-cols-6 items-start gap-16">
            <div className="flex justify-center items-center col-span-1">
                <div className="flex items-center justify-center w-20 h-20 bg-lightgrey text-darkbrown font-bold text-4xl rounded-full">
                    {number}
                </div>
            </div>
            <div className="col-span-5">
                <div className="flex flex-col text-darkbrown gap-6">
                    <h2 className="text-4xl font-bold ">{title}</h2>
                    <p className="text-xl leading-relaxed">{description}</p>
                </div>
            </div>
        </div>
    );
}
