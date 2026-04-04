import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoOraya from "@/assets/logo-oraya.png";

const navLinks = [
  { label: "Accueil", to: "/" },
  { label: "Système", to: "/systeme" },
  { label: "Offre", to: "/offre" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="flex-shrink-0">
          <img src={logoOraya} alt="Oraya" className="h-10 w-auto" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-highlight ${
                location.pathname === link.to ? "text-highlight" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://tally.so/r/gD4dOM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cta text-cta-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:bg-cta-hover transition-colors"
          >
            Démarrer
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-foreground hover:text-highlight"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://tally.so/r/gD4dOM"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 bg-cta text-cta-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center hover:bg-cta-hover transition-colors"
          >
            Démarrer
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
