import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import ComparisonSection from "@/components/ComparisonSection";
import Calculator from "@/components/Calculator";
import OfferSummary from "@/components/OfferSummary";
import ProcessSteps from "@/components/ProcessSteps";
import GuaranteeSection from "@/components/GuaranteeSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <ProblemsSection />
      <ComparisonSection />
      <Calculator />
      <OfferSummary />
      <ProcessSteps />
      <GuaranteeSection />
      <AboutSection />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
