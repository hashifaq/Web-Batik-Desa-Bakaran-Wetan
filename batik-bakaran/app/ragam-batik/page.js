import Navbar from "../components/navbar";
import MotifCard from "../components/MotifCard";
import { Zilla_Slab } from "next/font/google";

const zilla_Slab = Zilla_Slab({
    subsets: ['latin'],
    weight: ['700']
});

export default function RagamBatik() {
    return (
        <div className="flex min-h-screen flex-col bg-brown">
            <Navbar />
            <div className="flex justify-between">
                <div className={`text-yellow text-8xl mt-14 ml-40 ${zilla_Slab.className}`}>
                    <div>
                        <div className="font-bold  mb-4">Koleksi Batik</div>
                        <div className="text-white  mb-4">Museum Batik</div>
                        <div className="text-white  mb-4">Bakaran</div>
                    </div>
                </div>
                <div className="flex flex-col px-3 pb-3 bg-white mr-40">
                    <img 
                        loading="lazy" 
                        src="/assets/mq.jpg" 
                        alt="Batik pattern display" 
                        className="w-80 h-auto"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center mt-28">
                <div>
                    <img 
                        loading="lazy" 
                        src="/assets/rb.png" 
                        className="max-w-md h-auto ml-24"
                    />
                </div>
                <div className="bg-white px-12 py-8 mt-7 text-brown leading-9 text-lg font-semibold">
                    Di museum ini, Anda dapat menemukan berbagai jenis batik tulis khas Bakaran yang memukau dengan keindahan dan keunikan masing-masing motifnya. Setiap kain batik yang dipamerkan tidak hanya menampilkan keahlian para pengrajin, tetapi juga mengisahkan cerita dan filosofi yang mendalam dari setiap motifnya.
                </div>
            </div>
            {/* <div className="mt-24">
                <div className="flex justify-end items-center mb-8">
                    <div className="">
                        <div className="flex text-6xl text-white font-zilla font-bold mb-3 mr-12 ml-7">Jenis-jenis Batik</div>
                        <div className="w-full mt-2 h-1 bg-yellow"></div>
                    </div>
                </div>
            </div> */}
            <div className="flex items-center justify-center mt-32 mb-14">
                <div className="h-2 bg-yellow flex-[70]"></div>
                <div className="px-6 text-6xl text-white font-bold font-zilla">Jenis-jenis Batik</div>
                <div className="h-2 bg-yellow flex-[10]"></div>
            </div>
            <div className="flex justify-center items-center mt-14">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-44 justify-items-center items-center">
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
        </div>
    );
}
