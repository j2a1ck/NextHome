import CardSection from "@/components/CardSection";
import ConsultSection from "@/components/ConsultSection";
import HeroSection from "@/components/HeroSection";
import Navbar  from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <ConsultSection />
        <CardSection />
      </main>
      <Footer />
    </div>
  );
}