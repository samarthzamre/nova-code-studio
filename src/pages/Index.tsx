import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IDEPreview from "@/components/IDEPreview";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <IDEPreview />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
