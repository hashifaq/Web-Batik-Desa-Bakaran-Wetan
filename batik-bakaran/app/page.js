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
            <div className="flex bg-white p-20 gap-20">
                <img
                    src="/assets/logo.png"
                    alt="Logo Museum"
                    className="object-scale-down max-w-96"
                />
                <div className="flex flex-col text-darkbrown gap-8 justify-center">
                    <h2 className="text-3xl font-bold leading-relaxed">
                        Museum Batik Bakaran Sudewi: Melestarikan Warisan,
                        Menginspirasi Generasi!
                    </h2>
                    <p className="text-lg leading-loose text-justify">
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
            <div className="bg-lightgrey p-20 text-center">
                <h2 className="text-5xl font-bold text-darkbrown">
                    Kenapa Harus ke Museum Batik Bakaran?
                </h2>
            </div>
            <div className="flex flex-col bg-white px-40 py-24 gap-20">
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
