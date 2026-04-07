import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EMAIL } from "@/config/constants";

const MentionsLegales = () => (
  <>
    <Helmet>
      <title>Mentions légales — Oraya</title>
      <meta name="description" content="Mentions légales du site Oraya — Diagnostic retards de paiement pour PME B2B." />
    </Helmet>
    <Navbar />
    <main className="section-padding">
      <div className="section-container max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Mentions légales — Oraya</h1>

        <div className="space-y-8 text-sm text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">1. Éditeur du site</h2>
            <p>
              Raison sociale : Oraya<br />
              Forme juridique : Entrepreneur Individuel (EI)<br />
              Nom et prénom : Raphaël Aubry<br />
              Adresse : 128 Rue La Boétie, 75008 Paris<br />
              Email : <a href={`mailto:${EMAIL}`} className="text-highlight hover:underline">{EMAIL}</a><br />
              Téléphone : +33 7 78 95 85 54<br />
              SIRET : 1024 569 510 0015<br />
              TVA : Non applicable — article 293B du CGI<br />
              Directeur de la publication : Raphaël Aubry
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">2. Hébergeur</h2>
            <p>
              Cloudflare, Inc.<br />
              101 Townsend St — San Francisco, CA 94107 — États-Unis<br />
              <a href="https://cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">cloudflare.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">3. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, visuels, structure, logo) est la propriété exclusive d'Oraya.
              Toute reproduction, même partielle, sans autorisation écrite préalable est strictement interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">4. Données personnelles &amp; RGPD</h2>
            <p className="mb-3">
              <span className="font-semibold">Responsable du traitement :</span> Raphaël Aubry — Oraya —{" "}
              <a href={`mailto:${EMAIL}`} className="text-highlight hover:underline">{EMAIL}</a>
            </p>

            <p className="font-semibold mb-1">Données collectées :</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Formulaire de contact : nom, email, téléphone, informations sur votre activité</li>
              <li>Formulaire d'onboarding : données comptables et fichiers transmis dans le cadre d'une mission</li>
            </ul>

            <p className="mb-3">
              <span className="font-semibold">Finalité :</span> qualification de votre éligibilité, réalisation de votre diagnostic, communication relative à votre mission.
            </p>

            <p className="font-semibold mb-1">Base légale :</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Exécution d'un contrat (clients ayant passé commande)</li>
              <li>Intérêt légitime (prospects ayant rempli le formulaire de contact)</li>
            </ul>

            <p className="font-semibold mb-1">Durée de conservation :</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>Prospects : 12 mois à compter du dernier contact</li>
              <li>Fichiers clients : supprimés après livraison de la mission</li>
              <li>Données de facturation : 10 ans conformément aux obligations légales</li>
            </ul>

            <p className="mb-3">
              <span className="font-semibold">Destinataires :</span> Raphaël Aubry et analystes financiers mandatés dans le cadre de votre mission uniquement, soumis à confidentialité. Aucune cession à des tiers. Aucune utilisation à des fins commerciales.
            </p>

            <p className="mb-3">
              <span className="font-semibold">Transferts hors UE :</span> Les données transitent par les serveurs de Cloudflare, Inc. (États-Unis), hébergeur du site. Ce transfert est encadré par les clauses contractuelles types de la Commission européenne. Aucun autre transfert hors UE n'est effectué. Tally (Belgique — UE) est utilisé pour les formulaires.
            </p>

            <p className="mb-3">
              <span className="font-semibold">Vos droits (RGPD) :</span> Conformément au Règlement Européen 2016/679, vous disposez des droits d'accès, rectification, effacement, limitation, opposition et portabilité sur vos données. Pour exercer vos droits :{" "}
              <a href={`mailto:${EMAIL}`} className="text-highlight hover:underline">{EMAIL}</a> — réponse sous 30 jours ouvrés.
            </p>

            <p>
              <span className="font-semibold">Réclamation :</span> Commission Nationale de l'Informatique et des Libertés (CNIL) — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
              <a href="https://cnil.fr" target="_blank" rel="noopener noreferrer" className="text-highlight hover:underline">cnil.fr</a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">5. Cookies</h2>
            <p>
              Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de traçage ou analytique n'est déposé sans votre consentement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">6. Droit applicable</h2>
            <p>
              Le présent site et ses mentions légales sont soumis au droit français. Tout litige sera soumis à la compétence exclusive des tribunaux français.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default MentionsLegales;
