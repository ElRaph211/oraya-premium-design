import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import ComparisonSection from "@/components/ComparisonSection";
import SystemeSection from "@/components/SystemeSection";
import Calculator from "@/components/Calculator";
import OffreSection from "@/components/OffreSection";
import ProcessSteps from "@/components/ProcessSteps";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <ProblemsSection />
      <ComparisonSection />
      <SystemeSection />
      <Calculator />
      <ProcessSteps />
      <OffreSection />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Index;
