export default function MotifCard({ imgSrc, title, filosofi, harapan }) {
    return (
        <div className="bg-white p-4 w-full max-w-lg min-h-[400px] md:min-h-[430px] lg:min-h-[510px] mx-auto text-darkbrown">
            <img src={imgSrc} alt={title} className="mb-6 h-auto shadow-xl" />
            <div className="text-2xl font-bold text-center mb-4">{title}</div>
            <div className="leading-7">
                {filosofi && (
                    <p className="text-justify">
                        <strong>Filosofi:</strong> {filosofi}
                    </p>
                )}
                {harapan && (
                    <p className="text-justify">
                        <strong>Harapan:</strong> {harapan}
                    </p>
                )}
            </div>
        </div>
    );
}
