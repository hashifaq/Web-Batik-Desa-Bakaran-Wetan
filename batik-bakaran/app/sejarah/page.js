import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Sejarah() {
    return (
        <div className="relative min-h-screen">
            <div 
                className="absolute inset-0 bg-center bg-cover z-0" 
                style={{ backgroundImage: "url('/assets/14.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-white bg-opacity-80 z-10"></div>
            <div className="relative z-20 flex flex-col min-h-screen">
                <Navbar />
                <div className="flex flex-col gap-y-3 lg:gap-y-7 justify-center items-center text-4xl md:text-6xl lg:text-8xl text-darkbrown font-bold font-zilla py-7 md;py-0 m-8 lg:m-24">
                    <div>
                        Sejarah Batik Tulis
                    </div>
                    <div>
                        Bakaran
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center w-full bg-darkbrown py-12 px-10 lg:px-44 gap-8 lg:gap-20">
                    <div>
                        <img
                            src="/assets/bkw.png"
                            className="max-w-xs "
                        />
                        <p className="text-white font-poppins text-xs text-center mt-2">
                            Desa Bakaran Wetan, src detik.com
                        </p>
                    </div>
                    <div className="flex text-white font-poppins lg:text-lg text-sm leading-loose text-justify" style={{ lineHeight: "2" }}>
                        Batik Tulis Bakaran memiliki sejarah yang erat kaitannya dengan asal mula Desa Bakaran dan Juwana, 
                        dimulai sekitar tahun 1478 ketika Kerajaan Majapahit mengalami kemunduran akibat kudeta oleh Kerajaan 
                        Demak. Nyai Danowati, seorang punggawa Majapahit, melarikan diri ke barat bersama saudara-saudaranya 
                        dan tiba di sebuah pemukiman rawa-rawa yang dipenuhi pohon druju. Mereka menamai wilayah tersebut 
                        "Juwana." Setelah melanjutkan perjalanan, Nyai Danowati menetap di sebuah tempat yang kemudian diberi 
                        nama "Bakaran" setelah ia membakar babatan hutan yang menjadi batas wilayahnya.
                    </div>
                </div>
                <div className="text-black font-poppins text-sm lg:text-xl leading-loose text-justify py-12 px-10 lg:px-44" style={{ lineHeight: "2" }}>
                    Untuk menyembunyikan identitasnya, Nyai Danowati membangun masjid tanpa mihrab dan mengganti namanya 
                    menjadi "Nyai Ageng Siti Sabirah." Di sana, ia mengembangkan keahlian membatik dan mengajarkannya 
                    kepada penduduk sekitar yang kemudian berkembang menjadi Batik Bakaran. Batik Tulis Bakaran dikenal 
                    dengan ciri khas warna gelap dan motif-motif unik seperti gandrung, bergat ireng, kedelai kecer, dan
                     gringsing. Setelah itu, batik bakaran terus berkembang hingga mencapai kejayaannya pada periode 1920 
                     - 1940.
                </div>
                <div className="text-black font-poppins text-sm lg:text-xl leading-loose text-justify px-10 lg:px-44 mb-14" style={{ lineHeight: "2" }}>
                Pada tahun 1960-an dan 1970-an, batik bakaran sempat mengalami penurunan karena kurangnya penerus. Namun, 
                sosok Bukhari Wiryo Satmoko, yang dikenal sebagai Mbah Bukhari, berhasil membangkitkan kembali Batik 
                Bakaran. Sebagai generasi kelima pembatik Bakaran, Mbah Bukhari bekerja keras untuk menghidupkan kembali 
                produksi batik pada tahun 1977. Ia memandang Batik Bakaran sebagai warisan budaya leluhur yang wajib 
                dilestarikan.
                </div>
                <div className="flex flex-col justify-center items-center mb-14">
                    <img
                        src="/assets/bukhari.png"
                        className="max-w-xs md:max-w-sm lg:max-w-xl"
                    />
                    <p className="text-darkbrown font-poppins text-xs text-center mt-2">
                        Mbah Bukhari, src radarkudus.jawapos.com
                    </p>
                </div>
                <div className="text-black font-poppins text-sm lg:text-xl leading-loose text-justify px-10 lg:px-44 mb-16" style={{ lineHeight: "2" }}>
                    Berkat upaya dan dedikasi Mbah Bukhari, Batik Tulis Bakaran kini dikenal luas di tingkat nasional maupun 
                    internasional. Pada tahun 1996-1997, Batik Bakaran bahkan berhasil diekspor ke Kanada. Namun, krisis 
                    moneter 1998 menjadi tantangan besar yang sempat membuat usaha batik ini menurun drastis. Meski 
                    begitu, semangat untuk membangkitkan Batik Bakaran tidak pernah padam, dan pada tahun 2001, produksi 
                    batik mulai pulih kembali.
                </div>
                <div className="flex flex-col-reverse lg:flex-row justify-center items-center w-full bg-darkbrown py-12 px-10 lg:px-44 gap-8 lg:gap-20">
                    <div className="flex text-white font-poppins text-sm lg:text-xl leading-loose text-justify" style={{ lineHeight: "2" }}>
                        Seiring dengan kebangkitan tersebut, berbagai inovasi pun dilakukan dalam usaha mempertahankan 
                        kelestarian batik bakaran. Pada tahun 2011, sembilan motif Batik Bakaran telah berhasil mendapatkan 
                        hak paten dari Kemendikbud, menandai pengakuan resmi terhadap kekayaan motif tradisional ini. Lalu, 
                        pada tahun 2013, salah satu motif batik ciptaan Mbah Bukhari, “Mina Tani”, terpilih sebagai seragam 
                        resmi bagi ASN Kabupaten Pati.
                    </div>
                    <div>
                        <img
                            src="/assets/minatani.png"
                            className="max-w-xs"
                        />
                        <p className="text-white font-poppins text-xs text-center mt-2">
                            Gambar batik Mina Tani
                        </p>
                    </div>
                </div>
                <div className="text-black font-poppins text-sm lg:text-xl leading-loose text-justify px-10 lg:px-44 mt-16 mb-16" style={{ lineHeight: "2" }}>
                    Namun, tantangan tidak berhenti di situ. Pandemi COVID-19 yang melanda dunia sempat melemahkan penjualan 
                    batik, mengancam keberlangsungan industri batik di Bakaran. Meskipun demikian, upaya promosi dan 
                    branding tetap dilakukan dengan gigih untuk menjaga eksistensi Batik Bakaran. Usaha ini membuahkan 
                    hasil, dan pada tahun 2021, Batik Tulis Bakaran diakui sebagai warisan budaya tak benda oleh pemerintah. 
                    Selain itu, Desa Bakaran Wetan ditetapkan sebagai Desa Wisata Berkembang, sebuah pencapaian yang 
                    semakin mengukuhkan posisi Batik Bakaran dalam budaya nasional.
                </div>
                <div className="flex flex-col justify-center items-center mb-14">
                    <img
                        src="/assets/mbbs3.png"
                        className="max-w-xs md:max-w-md lg:max-w-2xl"
                    />
                    <p className="text-darkbrown font-poppins text-xs text-center mt-2">
                        Museum Batik Bakaran Sudewi
                    </p>
                </div>
                <div className="text-black font-poppins text-sm lg:text-xl leading-loose text-justify px-10 lg:px-44 mb-16" style={{ lineHeight: "2" }}>
                    Sebagai bentuk pelestarian lebih lanjut, Museum Batik Bakaran didirikan pada tahun 2022. Museum ini 
                    menjadi simbol dedikasi komunitas Bakaran dalam menjaga dan mempromosikan warisan budaya mereka. 
                    Pengelolaan museum ini dilakukan oleh Pokdarwis Nyi Ageng Soponyono, yang bekerja sama dengan BUM 
                    DESA Makmur Lestari Bakaran Wetan, yang telah berbadan hukum sejak tahun 2021. Museum ini tidak 
                    hanya berfungsi sebagai tempat penyimpanan sejarah, tetapi juga sebagai pusat pendidikan dan 
                    inspirasi bagi generasi mendatang untuk terus melestarikan Batik Tulis Bakaran.
                </div>
                <Footer />
            </div>
        </div>
    );
}
