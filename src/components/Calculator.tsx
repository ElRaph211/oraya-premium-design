import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const Calculator = () => {
  const [ca, setCa] = useState(1000000);
  const [delay, setDelay] = useState(14);

  const immobilized = Math.round(ca * delay / 365);
  const formatted = immobilized.toLocaleString("fr-FR");

  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Combien vous coûtent réellement vos retards de paiement ?
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-background rounded-2xl border border-border p-6 md:p-8 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Votre CA annuel (€)</label>
                <input
                  type="number"
                  value={ca}
                  onChange={(e) => setCa(Number(e.target.value) || 0)}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Retard moyen (jours)</label>
                <input
                  type="number"
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value) || 0)}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-highlight/30 focus:border-highlight transition-colors"
                />
              </div>
            </div>

            <div className="text-center py-6 border-t border-border">
              <p className="text-3xl md:text-4xl font-bold text-highlight">{formatted}€</p>
              <p className="text-sm font-medium text-foreground/80 mt-1">immobilisés chez vos clients</p>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-2">
              Moyenne nationale : 14 jours (Altares 2025). Si vos retards dépassent cette moyenne, le chiffre réel est bien supérieur.
            </p>

            <div className="text-center mt-6">
              <a
                href="https://tally.so/r/gD4dOM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-cta-hover transition-colors"
              >
                Vérifier mon éligibilité
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Calculator;
