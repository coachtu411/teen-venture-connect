import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import ExperienceSection from "@/components/ExperienceSection";
import TransformationSection from "@/components/TransformationSection";
import TrustSection from "@/components/TrustSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <ExperienceSection />
      <TransformationSection />
      <TrustSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
};

export default Index;
