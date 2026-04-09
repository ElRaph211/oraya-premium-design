import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OffreSection from "@/components/OffreSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Offre = () => (
  <>
    <Helmet>
      <title>Oraya Precision — L'offre | Diagnostic retards de paiement</title>
      <meta name="description" content="Découvrez l'offre Oraya Precision : analyse facture par facture, scoring client, scripts de relance et plan d'action. Récupérez votre cash bloqué en 10 jours." />
    </Helmet>
    <Navbar />
    <main>
      <OffreSection />
      <FAQSection />
      <FinalCTA />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default Offre;
