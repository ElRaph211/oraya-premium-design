import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-6xl font-extrabold text-primary mb-2">404</p>
      <h1 className="text-2xl font-bold text-foreground mb-2">Page introuvable</h1>
      <p className="text-muted-foreground text-sm mb-8 max-w-md">
        La page <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">{location.pathname}</span> n'existe pas ou a été déplacée.
      </p>
      <Link
        to="/"
        className="inline-block bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
      >
        Retour à l'accueil
      </Link>
      <p className="mt-10 text-xs text-muted-foreground">
        Oraya — Encaissez plus vite
      </p>
    </div>
  );
};

export default NotFound;
