import Image from "next/image";
import Navbar from "./components/navbar";
import HomeCarousel from "./components/HomeCarousel";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/footer";

export default function Home() {
    return (
        <main>
            <Navbar></Navbar>
            <HomeCarousel />
            <div className="flex flex-col items-center lg:flex-row bg-white px-6 md:px-20 py-8 md:py-16 gap-8 lg:gap-20">
                <img
                    src="/assets/logo.png"
                    alt="Logo Museum"
                    className="object-scale-down max-w-72 md:max-w-96"
                />
                <div className="flex flex-col text-darkbrown gap-4 justify-center lg:gap-8">
                    <h2 className="text-xl md:text-3xl font-bold leading-relaxed md:leading-relaxed text-center lg:text-left font-zilla">
                        Museum Batik Bakaran Sudewi: Melestarikan Warisan,
                        Menginspirasi Generasi!
                    </h2>
                    <p className="text-sm leading-loose md:text-lg md:leading-loose text-center sm:text-justify">
                        Museum Batik Bakaran Sudewi, berlokasi di Desa Bakaran
                        Wetan, Kecamatan Juwana, Kabupaten Pati, adalah
                        destinasi wisata edukasi yang menawarkan pengalaman unik
                        dalam mengenal dan mempelajari seni batik tulis khas
                        Bakaran. Dengan ratusan koleksi motif batik dan
                        peralatan membatik, museum ini menjadi tempat yang
                        sempurna untuk memahami kekayaan budaya Indonesia.
                    </p>
                </div>
            </div>

            <div className="bg-lightgrey p-8 md:p-12 lg:p-20 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-darkbrown font-zilla">
                    Kenapa Harus ke Museum Batik Bakaran?
                </h2>
            </div>
            {/* ini mau dimasukin link youtube */}
            <div className="flex flex-col bg-white px-10 md:px-20 lg:px-40 py-12 md:py-20 lg:py-24 gap-10 md:gap-16 lg:gap-20 font-poppins">
                <iframe
                    src="https://www.youtube.com/embed/G5rSa_b1uak?si=sChEYWGnRff0Rzm_"
                    title="Video Profil Museum Batik Bakaran Sudewi"
                    frameborder="0"
                    className="mx-auto mb-8 w-full md:w-4/5 lg:w-[60%] h-48 sm:h-72 md:h-80 lg:h-[450px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <FeatureSection
                    number={1}
                    title="Koleksi Batik Tulis"
                    description="Temukan beragam motif batik tulis khas Bakaran seperti mina tani, magel ati, padas gempal, dan masih banyak lagi. Setiap motif memiliki cerita dan keunikan tersendiri yang menggambarkan warisan budaya lokal."
                />
                <FeatureSection
                    number={2}
                    title="Edukasi Membatik"
                    description="Pelajari proses membatik langsung dari ahlinya! Kami menawarkan kelas membatik untuk semua kalangan, mulai dari anak-anak hingga dewasa. Rasakan pengalaman membuat karya seni batik dengan tangan Anda sendiri."
                />
                <FeatureSection
                    number={3}
                    title="Sejarah dan Warisan"
                    description="Jelajahi sejarah panjang batik Bakaran yang telah ada sejak masa Kerajaan Majapahit. Pelajari bagaimana seni ini berkembang dan terus dilestarikan hingga kini."
                />
                <FeatureSection
                    number={4}
                    title="Pusat Penjualan Batik"
                    description="Tidak perlu repot mencari pengrajin batik satu per satu. Di museum kami, Anda dapat membeli batik tulis Bakaran dengan harga yang sama seperti di pengrajin. Dukung langsung ekonomi lokal dengan setiap pembelian Anda."
                />
            </div>
            <Footer />
        </main>
    );
}
