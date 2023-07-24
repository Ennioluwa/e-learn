import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Benefits from "./components/Benefits";
import Popular from "./components/Popular";
import Join from "./components/Join";
import Inbox from "./components/Inbox";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Benefits />
      <Popular />
      <Join />
      <Inbox />
      <Newsletter />
      <Footer />
    </div>
  );
}
