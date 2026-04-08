import { Check, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const includes = [
  "12 mois analysés facture par facture — pas une estimation globale",
  "Chaque client classé par risque — qui vous coûte combien et pourquoi",
  "Plan d'action priorisé par impact financier — quoi faire cette semaine",
  "Scripts de relance personnalisés — copier-coller et envoyer",
  "Kit de cadrage : modèle CGV + acompte + pénalités — prêt à l'emploi",
  "2 appels avec notre équipe : cadrage + restitution",
];

const detailSections = [
  {
    title: "Analyse complète",
    items: [
      "12 mois de facturation passés au crible, facture par facture, client par client",
      "Le montant exact de cash immobilisé, calculé en euros",
      "Votre positionnement par rapport aux PME de votre secteur",
    ],
  },
  {
    title: "Clients passés au crible",
    items: [
      "Score de risque par client basé sur l'historique de paiement",
      "Les clients qui concentrent l'essentiel de vos retards identifiés",
      "Comportement récurrent documenté",
    ],
  },
  {
    title: "Causes identifiées",
    items: [
      "Pourquoi ça bloque : process interne, CGV, comportement client",
      "Les corrections structurelles à apporter",
    ],
  },
  {
    title: "Plan d'action",
    items: [
      "Les 3 actions qui libèrent le plus de trésorerie dans les 90 jours",
      "L'ordre de priorité exact pour vos relances",
      "Un script de relance calibré pour chaque client à traiter",
    ],
  },
  {
    title: "Projection et pilotage",
    items: [
      "Encaissements prévisionnels à J+30 / J+60 / J+90",
      "Tableau de bord synthétique pour piloter la suite",
    ],
  },
  {
    title: "Accompagnement",
    items: [
      "Appel de cadrage 20 min + restitution 30 min",
      "Point de suivi à J+30",
    ],
  },
  {
    title: "Bonus",
    items: [
      "Modèle de CGV optimisé pour votre secteur",
      "Modèle clause acompte + pénalités de retard",
    ],
  },
];

const OffreSection = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <section id="offre" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-3">L'offre</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Oraya <span className="text-highlight italic">Precision</span>
            </h2>
            <p className="text-muted-foreground">
              Un diagnostic complet de vos retards de paiement, livré en <span className="font-semibold text-foreground">10 jours</span>, avec un <span className="font-semibold text-highlight">résultat garanti</span>.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <div className="rounded-2xl border border-primary/20 p-8 text-center" style={{ backgroundColor: "#F8FAFC" }}>
              <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-4">Diagnostic complet</p>
              <h3 className="text-2xl font-bold mb-1">Oraya Precision</h3>
              <p className="text-muted-foreground line-through text-lg mb-1">4 500€ TTC</p>
              <p className="text-3xl font-bold text-highlight mb-2">2 500€ <span className="text-base font-normal text-muted-foreground">TTC</span></p>
              <p className="text-xs text-highlight font-medium mb-6">
                Tarif réservé à nos premiers clients. En échange : votre retour honnête et 20 minutes de feedback.
              </p>

              <ul className="space-y-3 text-left mb-6">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setShowDetail(!showDetail)}
                className="flex items-center justify-center gap-1 mx-auto text-sm font-medium text-highlight hover:underline mb-6 transition-colors"
              >
                {showDetail ? "Masquer le détail" : "Voir le détail complet ↓"}
                {showDetail ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showDetail && (
                <div className="text-left space-y-5 mb-6 border-t border-border pt-6">
                  {detailSections.map((section, i) => (
                    <div key={i}>
                      <p className="font-semibold text-sm text-foreground mb-2">{section.title}</p>
                      <ul className="space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="text-highlight mt-0.5">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <a
                href={TALLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cta text-cta-foreground px-6 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97] animate-cta-glow"
              >
                Vérifier mon éligibilité — 2 minutes
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-background p-8 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-6 bottom-6 w-1 bg-highlight rounded-r-full" />
              <div className="pl-6">
                <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-highlight" />
                </div>
                <h3 className="text-2xl font-bold mb-4">La <span className="text-highlight italic">Garantie</span> Oraya.</h3>
                <p className="text-base text-foreground/80 leading-relaxed mb-4">
                  Nous identifions au minimum <span className="font-semibold text-highlight">2 fois le coût du diagnostic</span> en cash
                  récupérable dans vos données. Si nous n'y parvenons pas, nous
                  reprenons l'analyse <span className="font-semibold text-foreground">gratuitement. Sans condition.</span>
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous sélectionnons les entreprises que nous pouvons réellement aider.
                  C'est pour cela que tout commence par une vérification d'éligibilité.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OffreSection;
