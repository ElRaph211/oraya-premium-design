import ScrollReveal from "./ScrollReveal";

const rows = [
  { problem: "Votre logiciel affiche un chiffre.", solution: "Oraya vous dit d'où il vient et comment le changer." },
  { problem: "Un DAF coûte 30 000€ et prend 6 mois.", solution: "Oraya livre en 10 jours pour 2 500€." },
  { problem: "L'affacturage vous fait payer pour votre propre argent.", solution: "Oraya réduit le problème à la source." },
  { problem: "Votre comptable enregistre les retards.", solution: "Oraya identifie pourquoi ils existent." },
];

const WhyOrayaSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
          Pourquoi <span className="text-highlight italic">Oraya</span> ?
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
          Un seul problème. Un plan exact. <span className="text-highlight italic">Garanti.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyOrayaSection;
