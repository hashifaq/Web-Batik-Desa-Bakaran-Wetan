export default function MotifCard({ imgSrc, title, filosofi, harapan }) {
    return (
        <div className="bg-white p-4 w-9/12 shadow-xl">
            <img src={imgSrc} alt={title} className="mb-6" />
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
