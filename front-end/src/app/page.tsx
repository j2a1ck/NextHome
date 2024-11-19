import CardSection from "@/components/CardSection";
import ConsultSection from "@/components/ConsultSection";
import HeroSection from "@/components/HeroSection";
import Navbar  from "@/components/Navbar";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <ConsultSection/>
        <CardSection/>
      <main>
      </main>
    </div>
  );
}
