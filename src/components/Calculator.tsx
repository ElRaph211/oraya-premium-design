import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const FINANCE_RATE = 0.05;

function fmt(n: number) {
  return Math.round(n).toLocaleString("fr-FR") + " €";
}

const Calculator = () => {
  const [ca, setCa] = useState(1000000);
  const [delay, setDelay] = useState(14);
  const [margin, setMargin] = useState(10);

  const cashBlocked = Math.round(ca * delay / 365);
  const costMonth = Math.round(Math.round(cashBlocked * FINANCE_RATE) / 12);
  const caRedo = margin > 0 ? Math.round(cashBlocked / (margin / 100)) : 0;

  const caDisplay = ca >= 1000000
    ? (ca / 1000000).toLocaleString("fr-FR") + " M €"
    : Math.round(ca / 1000).toLocaleString("fr-FR") + " k€";

  return (
    <section id="calculateur" className="section-padding bg-secondary/50">
      <div className="section-container max-w-[800px]">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Combien vos retards vous coûtent{" "}
              <span className="text-highlight italic">pendant que vous lisez cette page.</span>
            </h2>
            <p className="text-muted-foreground text-sm">
              Ajustez les curseurs selon votre situation.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Left panel - Sliders */}
            <div className="bg-[hsl(220_20%_97%)] border border-border rounded-[14px] p-7">
              {/* CA slider */}
              <div className="mb-7">
                <div className="flex justify-between items-baseline mb-2.5">
                  <label className="text-[13px] font-medium text-foreground/70">Chiffre d'affaires annuel</label>
                  <span className="text-[15px] font-bold text-primary">{caDisplay}</span>
                </div>
                <input
                  type="range"
                  min={300000}
                  max={5000000}
                  step={100000}
                  value={ca}
                  onChange={(e) => setCa(Number(e.target.value))}
                  className="w-full accent-primary h-[5px] cursor-pointer"
                />
              </div>

              {/* Delay slider */}
              <div className="mb-7">
                <div className="flex justify-between items-baseline mb-2.5">
                  <label className="text-[13px] font-medium text-foreground/70">Retard moyen au-delà de vos conditions</label>
                  <span className="text-[15px] font-bold text-primary">{delay} jours</span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={90}
                  step={1}
                  value={delay}
                  onChange={(e) => setDelay(Number(e.target.value))}
                  className="w-full accent-primary h-[5px] cursor-pointer"
                />
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
                  Nombre de jours que vos clients paient après la date prévue dans vos conditions.
                </p>
              </div>

              {/* Margin slider */}
              <div>
                <div className="flex justify-between items-baseline mb-2.5">
                  <label className="text-[13px] font-medium text-foreground/70">Votre marge nette</label>
                  <span className="text-[15px] font-bold text-primary">{margin} %</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={30}
                  step={1}
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full accent-primary h-[5px] cursor-pointer"
                />
                <p className="text-[11px] text-muted-foreground mt-1.5 leading-snug">
                  Le pourcentage qu'il vous reste une fois toutes les charges payées.
                </p>
              </div>
            </div>

            {/* Right panel - Results (navy) */}
            <div className="bg-primary rounded-[14px] p-7 text-primary-foreground">
              <p className="text-[11px] font-medium uppercase tracking-wide opacity-50">Cash bloqué en permanence chez vos clients</p>
              <p className="text-4xl font-extrabold mt-2 mb-1 tracking-tight">{fmt(cashBlocked)}</p>
              <p className="text-xs opacity-40 mb-5">Votre argent, immobilisé dans les comptes de vos clients</p>

              <div className="h-px bg-primary-foreground/10" />

              <div className="flex justify-between items-center py-2.5">
                <div>
                  <p className="text-xs opacity-55 leading-snug">Ce que ça vous coûte chaque mois</p>
                  <p className="text-[10px] opacity-30 mt-0.5">en frais bancaires, découvert ou emprunt</p>
                </div>
                <span className="text-[15px] font-bold">{fmt(costMonth)}</span>
              </div>

              <div className="h-px bg-primary-foreground/10" />

              <div className="flex justify-between items-center py-2.5">
                <div className="max-w-[60%]">
                  <p className="text-xs opacity-55 leading-snug">Pour compenser cette perte, vous devriez facturer</p>
                  <p className="text-[10px] opacity-30 mt-0.5">chiffre d'affaires supplémentaire nécessaire</p>
                </div>
                <span className="text-[15px] font-bold">{fmt(caRedo)}</span>
              </div>
            </div>
          </div>

          {/* Conversion block */}
          <div className="mt-8 text-center bg-cta/10 border border-cta/20 rounded-xl p-6">
            <p className="text-sm font-semibold text-foreground mb-1">
              Cash bloqué estimé : <span className="text-highlight text-lg font-extrabold">{fmt(cashBlocked)}</span>
            </p>
            <p className="text-sm text-muted-foreground mb-4 max-w-lg mx-auto leading-relaxed">
              Ce montant existe déjà. Il est bloqué chez vos clients.{" "}
              <span className="font-semibold text-foreground">Oraya se connecte à votre outil, identifie où il se trouve, et le fait rentrer.</span>
            </p>
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cta text-cta-foreground px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
            >
              Demander une démo
            </a>
          </div>

          <div className="text-center mt-6">
            <p className="text-[10px] text-muted-foreground leading-snug">
              Sources : Banque de France / Altares 2025 — Retard moyen constaté : 14,1 jours au-delà des conditions contractuelles · 68 500 défaillances d'entreprises en 2025.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Calculator;
