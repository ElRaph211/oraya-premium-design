import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MentionsLegales = () => (
  <>
    <Helmet>
      <title>Mentions légales — Oraya</title>
      <meta name="description" content="Mentions légales du site Oraya — Diagnostic retards de paiement pour PME B2B." />
    </Helmet>
    <Navbar />
    <main className="section-padding">
      <div className="section-container max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

        <div className="space-y-6 text-sm text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-primary mb-2">Éditeur du site</h2>
            <p>
              Raphaël Aubry — Micro-entreprise<br />
              128 Rue La Boétie, 75008 Paris<br />
              <a href="mailto:raphael@orayasystem.fr" className="text-highlight hover:underline">raphael@orayasystem.fr</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Lovable (lovable.dev).</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus (textes, images, graphismes) présents sur ce site sont la propriété
              exclusive de Raphaël Aubry, sauf mention contraire. Toute reproduction est interdite sans
              autorisation préalable.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-2">Données personnelles</h2>
            <p>
              Les données collectées via le formulaire de contact sont utilisées uniquement pour répondre
              à votre demande. Elles ne sont ni vendues ni transmises à des tiers. Conformément au RGPD,
              vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
              Pour exercer ce droit, contactez-nous à raphael@orayasystem.fr.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default MentionsLegales;
