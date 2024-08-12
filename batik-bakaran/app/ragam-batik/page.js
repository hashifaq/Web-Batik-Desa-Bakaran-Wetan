import Navbar from "../components/navbar";
import MotifCard from "../components/MotifCard";
import { Zilla_Slab } from "next/font/google";
import Footer from "../components/footer";

const zilla_Slab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700']
});

export default function RagamBatik() {
    return (
        <div className="flex min-h-screen flex-col bg-brown">
            <Navbar />
            <div className="relative pb-40">
                <div 
                    className="absolute inset-0 bg-center opacity-20 z-0" 
                    style={{ backgroundImage: "url('/assets/bg-jenis.png')" }}
                ></div>
                <div className="relative z-10 flex flex-col md:gap-20 lg:gap-56 md:flex-row">
                    <div className={`flex justify-center font-bold text-4xl md:text-6xl mt-6 md:mt-14 md:ml-10 lg:text-8xl xl:ml-20 2xl:ml-40 ${zilla_Slab.className}`}>
                        <div>
                            <div className="text-yellow mb-2 md:mb-4">Koleksi Batik</div>
                            <div className="text-white mb-2 md:mb-4">Museum Batik</div>
                            <div className="text-white mb-2 md:mb-4">Bakaran</div>
                        </div>
                    </div>
                    <div className="flex flex-col px-3 py-3 mt-10 hidden md:block md:mt-0 md:py-0 md:pb-3 bg-white m-14 md:m-0 lg:mr-40">
                        <img 
                            loading="lazy" 
                            src="/assets/mq.jpg" 
                            alt="Batik pattern display" 
                            className="md:w-52 lg:w-80 h-auto"
                        />
                    </div>
                </div>
                <div className="relative z-10 flex justify-center flex-col md:flex-row items-center mt-12 md:mt-20 lg:mt-28">
                    <div>
                        <img 
                            loading="lazy" 
                            src="/assets/rb.png" 
                            className="max-w-60 lg:max-w-md h-auto md:ml-10 lg:ml-24"
                        />
                    </div>
                    <div className="bg-white py-2 px-8 text-brown text-justify leading-loose text-xs md:px-5 md:py-3 lg:px-12 lg:py-8 mt-7 lg:leading-9 lg:text-lg font-semibold">
                        Di museum ini, Anda dapat menemukan berbagai jenis batik tulis khas Bakaran yang memukau dengan keindahan dan keunikan masing-masing motifnya. Setiap kain batik yang dipamerkan tidak hanya menampilkan keahlian para pengrajin, tetapi juga mengisahkan cerita dan filosofi yang mendalam dari setiap motifnya.
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center -mt-7 mb-5 lg:mb-14 relative z-1">
                <div className="h-2 bg-yellow flex-[70]"></div>
                <div className="px-4 md:px-6 text-4xl md:text-6xl text-white font-bold font-zilla">Jenis-jenis Batik</div>
                <div className="h-2 bg-yellow flex-[10]"></div>
            </div>
            <div className="flex justify-center items-center mt-14 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-14 gap-y-20 gap-x-20 lg:gap-y-20 lg:gap-x-44 justify-items-center items-center ">
                    <MotifCard  
                        imgSrc="/assets/1.jpg" 
                        title="Gandrung Kapirangu" 
                        filosofi="Cinta Lama Tumbuh" 
                        harapan="Pemakai batik ini akan mendapatkan keharmonisan dalam segala hal."
                    />
                    <MotifCard 
                        imgSrc="/assets/2.jpg" 
                        title="Blebar Merak Ngigel" 
                        filosofi="Lambang Kejantanan" 
                        harapan="Pemakai batik ini akan menjadi suri tauladan, karena bisa mengayomi & melindungi pasangan serta keluarganya."
                    />
                    <MotifCard  
                        imgSrc="/assets/3.jpg" 
                        title="Manggaran" 
                        filosofi="Bunga Kelapa yang Baru Mekar" 
                        harapan="Kebahagiaan dalam rumah tangga, mendapatkan keturunan yang baik dan peningkatan ekonomi."
                    />
                    <MotifCard  
                        imgSrc="/assets/4.jpg" 
                        title="Magel Ati" 
                        filosofi="Rasa Kecewa" 
                        harapan="Mengingatkan pemakai batik ini untuk tidak mengecewakan pasangannya atau orang lain."
                    />
                    <MotifCard  
                        imgSrc="/assets/5.jpg" 
                        title="Padas Gempal" 
                        filosofi="Keanekaragaman Kehidupan" 
                        harapan="Menjadi orang yang bijaksana dalam menghadapi perbedaan dan keanekaragaman dalam kehidupan."
                    />
                    <MotifCard  
                        imgSrc="/assets/6.jpg" 
                        title="Rujak Sente" 
                        filosofi="Hidup manusia memiliki banyak halangan tantangan maupun keberuntungan yang bercampur menjadi satu."
                    />
                    <MotifCard  
                        imgSrc="/assets/7.jpg" 
                        title="Piring Sedapur" 
                        filosofi="Gotong Royong" 
                        harapan="Menumbuhkan jiwa sosial dan saling tolong menolong."
                    />
                    <MotifCard 
                        imgSrc="/assets/8.jpg" 
                        title="Sido Mukti" 
                        filosofi="Harapan mendapatkan kemulyaan" 
                    />
                    <MotifCard  
                        imgSrc="/assets/9.jpg" 
                        title="Liris" 
                        filosofi="Hujan Rintik-Rintik" 
                        harapan="Ketabahan dalam menjalani hidup."
                    />
                    <MotifCard  
                        imgSrc="/assets/10.jpg" 
                        title="Ungker Canthel" 
                        filosofi="Gotong Royong" 
                        harapan="Dalam hidup bermasyarakat haruslah saling membantu satub sama lain."
                    />
                    <MotifCard  
                        imgSrc="/assets/11.jpg" 
                        title="Kedele Kecer" 
                        filosofi="Kemakmuran" 
                        harapan="Mendapatkan rejeki yang melimpah ruah dan kemakmuran."
                    />
                    <MotifCard 
                        imgSrc="/assets/12.jpg" 
                        title="Bregat Ireng" 
                        filosofi="Rasa Duka" 
                        harapan="Mengingatkan kepada semua orang bahwa dalam kehidupan pada akhirnya akan kembali kepada sang pencipta."
                    />
                    <MotifCard  
                        imgSrc="/assets/13.jpg" 
                        title="Sido Mulyo" 
                        harapan="Supaya keluarga yang dibina selalu terus memperoleh kemulyaan walau memperoleh satu kesusahan."
                    />
                    <MotifCard  
                        imgSrc="/assets/14.jpg" 
                        title="Mina Tani" 
                        filosofi="Kemakmuran Masyarakat Kabupaten Pati" 
                        harapan="Masyarakat Pati akan memperoleh kemakmuran disegala bidang usahanya."
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}
