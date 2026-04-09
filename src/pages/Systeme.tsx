import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemeSection from "@/components/SystemeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Systeme = () => (
  <>
    <Helmet>
      <title>Le système Oraya — Analyse facture par facture</title>
      <meta name="description" content="Découvrez la méthode Oraya : cartographie de vos créances, scoring client et priorisation par impact. Une approche chirurgicale pour récupérer votre trésorerie." />
    </Helmet>
    <Navbar />
    <main>
      <SystemeSection />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Systeme;
