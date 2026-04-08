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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Pourquoi <span className="text-highlight italic">Oraya</span> ?
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {rows.map((row, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="bg-background rounded-xl border border-border p-5 h-full">
              <p className="text-sm text-muted-foreground mb-2 italic">"{row.problem}"</p>
              <p className="text-sm font-semibold text-highlight">→ {row.solution}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={500}>
        <p className="text-center text-lg font-bold mt-10">
          Un seul problème. Un plan exact. <span className="text-highlight italic">Garanti.</span>
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default WhyOrayaSection;
