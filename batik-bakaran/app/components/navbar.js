"use client";

export default function Navbar() {
    return (
        <main className="flex flex-col justify-between">
            <nav className="bg-brown">
                <div className="px-8">
                    <div className="flex items-center justify-between h-25">
                        <div className="flex items-center">
                            <img
                                src="/assets/logo-img.png"
                                className="img-logo p-1 mr-2"
                                alt="Logo"
                            />
                            <img
                                src="/assets/logo-text.png"
                                className="logo-text p-1"
                                alt="Logo"
                            />
                        </div>
                        <div>
                            <div className="ml-4 flex items-center space-x-6">
                                <a
                                    href=""
                                    className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Beranda
                                </a>
                                <a
                                    href=""
                                    className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Sejarah
                                </a>
                                <a
                                    href=""
                                    className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Tentang Kami
                                </a>
                                <a
                                    href=""
                                    className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Ragam Batik
                                </a>
                                <a
                                    href=""
                                    className="text-white text-base font-semibold hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Cara Membatik
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="line"></div>
            </nav>
        </main>
    );
}
