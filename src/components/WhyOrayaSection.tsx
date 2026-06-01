import ScrollReveal from "./ScrollReveal";

const rows = [
  { problem: "Votre logiciel comptable affiche le retard.", solution: "Oraya identifie d'où il vient, relance le client, et suit la réponse." },
  { problem: "Votre comptable enregistre la facture impayée.", solution: "Oraya vous dit pourquoi elle n'est pas payée et agit pour la débloquer." },
  { problem: "L'affacturage vous fait payer une commission sur votre propre argent.", solution: "Oraya réduit le retard à la source. Vous gardez votre marge." },
  { problem: "Les outils de relance vous demandent de configurer, surveiller, décider.", solution: "Oraya se connecte via API, apprend vos règles, et tourne." },
];

const WhyOrayaSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
          Ce que personne ne fait à votre place. <span className="text-highlight italic">Jusqu'ici.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <div className="rounded-2xl border border-border overflow-hidden max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {rows.slice(0, 2).map((row, i) => (
              <div key={i} className="p-6 md:p-8 hover:bg-background/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-3 italic">"{row.problem}"</p>
                <p className="text-sm font-semibold text-highlight">→ {row.solution}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {rows.slice(2).map((row, i) => (
              <div key={i} className="p-6 md:p-8 hover:bg-background/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-3 italic">"{row.problem}"</p>
                <p className="text-sm font-semibold text-highlight">→ {row.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="text-center text-lg font-bold mt-10">
          Ils vous montrent le problème. <span className="text-highlight italic">Oraya le fait avancer.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyOrayaSection;
