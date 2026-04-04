import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const OfferSummary = () => (
  <section className="section-padding">
    <div className="section-container max-w-lg">
      <ScrollReveal>
        <div className="rounded-2xl border border-primary/20 p-8 text-center" style={{ backgroundColor: "#F8FAFC" }}>
          <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-4">Diagnostic complet</p>
          <h3 className="text-2xl font-bold mb-1">Oraya Precision</h3>
          <p className="text-muted-foreground line-through text-lg mb-1">4 500€</p>
          <p className="text-3xl font-bold text-cta mb-6">2 500€ <span className="text-base font-normal text-muted-foreground">TTC</span></p>

          <ul className="space-y-3 text-left mb-8">
            {["Analyse facture par facture", "Plan d'action priorisé", "Garanti 2x ou gratuit"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <Check className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://tally.so/r/gD4dOM"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-cta-hover transition-colors mb-3"
          >
            Vérifier mon éligibilité
          </a>
          <Link to="/offre" className="text-sm text-highlight hover:underline font-medium">
            Voir le détail complet →
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OfferSummary;
