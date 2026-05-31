import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const packs = [
  {
    label: "Jusqu'à 20 débiteurs actifs",
    items: [
      "Analyse initiale complète",
      "Relances automatisées depuis votre domaine",
      "Lecture et traitement des réponses",
      "Récap hebdomadaire",
      "Escalade préparée si nécessaire",
    ],
  },
  {
    label: "Jusqu'à 40 débiteurs actifs",
    highlight: true,
    items: [
      "Tout le pack précédent",
      "Volume de relances élargi",
      "Suivi renforcé sur les comptes à risque",
    ],
  },
  {
    label: "Plus de 40 débiteurs",
    items: [
      "Service complet sans limite",
      "Priorité de traitement",
      "Arbitrage dédié",
    ],
  },
];

const OffreSection = () => (
  <section id="offre" className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-3">L'offre</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ce qui est <span className="text-highlight italic">inclus.</span>
          </h2>
          <p className="text-muted-foreground">
            Oraya gère votre encaissement.{" "}
            <span className="font-semibold text-foreground">Vous vous concentrez sur votre activité.</span>
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packs.map((pack, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-7 flex flex-col ${
                pack.highlight
                  ? "border-highlight/40 bg-highlight/5 shadow-lg shadow-highlight/10"
                  : "border-border bg-background"
              }`}
            >
              {pack.highlight && (
                <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-highlight text-white mb-4 self-start">
                  Le plus choisi
                </span>
              )}
              <h3 className="font-bold text-base mb-5 leading-snug">{pack.label}</h3>
              <ul className="space-y-3 flex-1">
                {pack.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pack.highlight ? "text-highlight" : "text-highlight"}`} />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-center text-sm text-muted-foreground mt-6">
          Chaque formule inclut les frais d'activation et l'analyse initiale.{" "}
          <span className="font-semibold text-foreground">Premier mois offert.</span>
        </p>
      </ScrollReveal>

      <ScrollReveal delay={250}>
        <div className="text-center mt-8">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cta text-cta-foreground px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
          >
            Demander une démo — 20 minutes
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OffreSection;
