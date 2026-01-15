import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IDEPreview from "@/components/IDEPreview";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import DocsSection from "@/components/DocsSection";
import DownloadSection from "@/components/DownloadSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const scrollToDownload = () => {
    const element = document.querySelector("#download");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSignIn = () => {
    setAuthMode("signin");
    setAuthOpen(true);
  };

  const handleGetStarted = () => {
    setAuthMode("signup");
    setAuthOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onSignIn={handleSignIn} onGetStarted={handleGetStarted} />
      <HeroSection onStartCoding={scrollToDownload} onWatchDemo={() => setDemoOpen(true)} />
      <IDEPreview />
      <FeaturesSection />
      <PricingSection />
      <DocsSection />
      <DownloadSection />
      <CTASection onGetStarted={scrollToDownload} onScheduleDemo={() => setDemoOpen(true)} />
      <Footer />
      
      {/* Modals */}
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
      <AuthModal open={authOpen} onOpenChange={setAuthOpen} mode={authMode} />
    </div>
  );
};

export default Index;
