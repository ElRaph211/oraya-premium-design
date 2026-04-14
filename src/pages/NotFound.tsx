import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import logoOraya from "@/assets/logo-new.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <Link to="/" className="mb-8">
        <img src={logoOraya} alt="Oraya" className="h-24 w-auto" />
      </Link>
      <p className="text-6xl font-extrabold text-primary mb-2">404</p>
      <h1 className="text-2xl font-bold text-foreground mb-2">Page introuvable</h1>
      <p className="text-muted-foreground text-sm mb-8 max-w-md">
        La page <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{location.pathname}</span> n'existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          to="/"
          className="bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
        >
          Retour à l'accueil
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg font-semibold text-sm border border-border text-foreground hover:bg-secondary transition-colors"
        >
          Nous contacter
        </Link>
      </div>
      <p className="mt-12 text-xs text-muted-foreground">
        Oraya — Récupérez votre cash bloqué en 10 jours
      </p>
    </div>
  );
};

export default NotFound;
