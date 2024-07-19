import Image from "next/image";
import Navbar from "./components/navbar";
import HomeCarousel from "./components/HomeCarousel";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HomeCarousel />
    </main>
  );
}
