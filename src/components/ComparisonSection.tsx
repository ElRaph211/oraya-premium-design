import ScrollReveal from "./ScrollReveal";

const without = [
  "Vous savez que vous avez des retards. Vous ne savez pas combien exactement.",
  "Vous relancez quand vous y pensez. Trop tard. Sans méthode.",
  "Vous traitez tous vos clients pareil. Vous perdez du temps sur les mauvais.",
  "Vous finissez le mois sous tension sans comprendre d'où ça vient.",
  "Vous cherchez une solution sans savoir par où commencer.",
];

const withOraya = [
  "Le chiffre exact de ce que vous avez gagné mais pas encore encaissé. Facture par facture.",
  "Le nom précis des clients qui vous coûtent le plus — et pourquoi.",
  "Les 3 actions dans le bon ordre. Avec les scripts prêts à utiliser.",
  "Le cadre à poser pour que les retards ne se reproduisent plus.",
  "Une décision concrète garantie — ou on recommence gratuitement.",
];

const ComparisonSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ce que ça change concrètement.</h2>
          <p className="text-muted-foreground">
            Pas un rapport de plus qui finit dans un tiroir. Des décisions à prendre dès le lendemain matin.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid md:grid-cols-2 rounded-2xl border border-border overflow-hidden">
          {/* Sans Oraya */}
          <div className="p-6 md:p-8" style={{ backgroundColor: "#FDF2F2" }}>
            <h3 className="text-lg font-bold mb-6 text-primary">Sans Oraya</h3>
            <ul className="space-y-4">
              {without.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Avec Oraya */}
          <div className="p-6 md:p-8 border-l border-border" style={{ backgroundColor: "#F0FFF4", borderColor: "hsl(145 60% 42% / 0.15)" }}>
            <h3 className="text-lg font-bold mb-6 text-primary">Avec Oraya</h3>
            <ul className="space-y-4">
              {withOraya.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                  <span className="text-cta flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ComparisonSection;
