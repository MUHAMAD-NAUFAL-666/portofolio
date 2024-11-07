import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      <div className="bg-[url('/img/bck.jpeg')] h-screen">
        <Navbar/>
        <HeroSection/>
      </div>
    </>
  );
}