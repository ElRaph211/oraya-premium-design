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
      <title>Comment ça marche — Le Pilotage Silencieux Oraya</title>
      <meta name="description" content="Le Pilotage Silencieux Oraya : connexion API, détection continue, relances depuis votre domaine, lecture des réponses, arbitrage protégé, escalade et récap chaque lundi." />
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
