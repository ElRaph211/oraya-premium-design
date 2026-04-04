import { Link } from "react-router-dom";
import logoOraya from "@/assets/logo-oraya.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="space-y-3">
          <img src={logoOraya} alt="Oraya" className="h-10 w-auto brightness-0 invert" />
          <p className="text-sm opacity-70 max-w-xs">
            Diagnostic retards de paiement pour PME B2B
          </p>
          <p className="text-xs opacity-50">
            128 Rue La Boétie, 75008 Paris
            <br />
            raphael@orayasystem.fr
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <Link to="/" className="opacity-70 hover:opacity-100 transition-opacity">Accueil</Link>
          <Link to="/systeme" className="opacity-70 hover:opacity-100 transition-opacity">Système</Link>
          <Link to="/offre" className="opacity-70 hover:opacity-100 transition-opacity">Offre</Link>
          <Link to="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</Link>
          <Link to="/mentions-legales" className="opacity-70 hover:opacity-100 transition-opacity">Mentions légales</Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-xs opacity-50">
        © 2026 Oraya. Tous droits réservés.
      </div>
    </div>
  </footer>
);

export default Footer;
