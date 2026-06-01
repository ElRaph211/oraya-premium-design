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
      <title>Oraya | Pilotage des relances pour PME B2B — Vos factures rentrent, vous n'y êtes pour rien</title>
      <meta name="description" content="Oraya se connecte à votre outil comptable, pilote vos relances depuis votre nom, et vous envoie un récap chaque lundi. Opérationnel en 7 jours. Pour PME B2B sans DAF." />
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
