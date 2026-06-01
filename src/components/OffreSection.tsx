import { Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const packs = [
  {
    name: "Essentiel",
    volume: "Jusqu'à 20 débiteurs actifs",
    intro: "Pour les PME avec un portefeuille client concentré.",
    items: [
      "Connexion API à votre outil comptable",
      "Analyse continue de vos factures",
      "Relances envoyées depuis votre domaine",
      "Lecture et traitement des réponses",
      "Récap hebdomadaire",
      "Escalade préparée si nécessaire",
    ],
  },
  {
    name: "Croissance",
    volume: "Jusqu'à 40 débiteurs actifs",
    highlight: true,
    intro: "Pour les PME dont le portefeuille s'élargit et le suivi devient difficile à absorber.",
    items: [
      "Tout le pack Essentiel",
      "Volume de relances élargi",
      "Suivi renforcé sur les comptes à risque",
      "Priorisation par impact financier",
    ],
  },
  {
    name: "Scale",
    volume: "Plus de 40 débiteurs",
    intro: "Pour les PME avec un volume de facturation élevé et des profils de débiteurs variés.",
    items: [
      "Service complet sans limite de volume",
      "Priorité de traitement",
      "Arbitrage dédié sur les comptes stratégiques",
    ],
  },
];

const OffreSection = () => (
  <section id="offre" className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-3">Notre offre</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ce qui est <span className="text-highlight italic">inclus.</span>
          </h2>
          <p className="text-muted-foreground">
            Trois formules selon le{" "}
            <span className="font-semibold text-foreground">volume de votre poste client.</span>
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
              <p className="text-xs font-semibold uppercase tracking-wider text-highlight mb-1">
                {pack.name}
              </p>
              <h3 className="font-bold text-base mb-2 leading-snug">{pack.volume}</h3>
              <p className="text-xs text-muted-foreground italic mb-5 leading-relaxed">{pack.intro}</p>
              <ul className="space-y-3 flex-1">
                {pack.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-highlight" />
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
          Chaque formule inclut la connexion, l'analyse initiale et la mise en place.{" "}
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
            Demander une démo
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default OffreSection;
