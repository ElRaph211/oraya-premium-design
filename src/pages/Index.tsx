import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection";
import StatsSection from "@/components/StatsSection";
import WhyOrayaSection from "@/components/WhyOrayaSection";
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
    <Helmet>
      <title>Oraya | Diagnostic retards de paiement PME - Récupérez votre cash en 10 jours</title>
      <meta name="description" content="Diagnostic retards de paiement pour PME B2B. Identifiez votre cash bloqué et récupérez-le en 10 jours." />
    </Helmet>
    <Navbar />
    <main>
      <Hero />
      <ProblemsSection />
      <StatsSection />
      <WhyOrayaSection />
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
