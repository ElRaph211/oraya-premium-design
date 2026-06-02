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
      <title>Notre offre | Oraya, pilotage des relances pour PME B2B</title>
      <meta name="description" content="Trois formules selon le volume de votre poste client : Essentiel, Croissance, Scale. Connexion, analyse initiale et mise en place incluses. Premier mois offert." />
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
