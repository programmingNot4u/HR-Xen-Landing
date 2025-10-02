import ClientLogos from "../components/home/ClientLogos";
import FAQPreview from "../components/home/FAQPreview";
import FeaturesHighlight from "../components/home/FeaturesHighlight";
import FinalCTA from "../components/home/FinalCTA";
import HeroSection from "../components/home/HeroSection";
import Testimonials from "../components/home/Testimonials";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientLogos />
      <FeaturesHighlight />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
