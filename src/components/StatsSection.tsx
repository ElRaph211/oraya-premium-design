import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "86%", label: "des entreprises françaises touchées par les retards", source: "Coface 2025" },
  { value: "15 Mds€", label: "de cash bloqué chaque année en France", source: "Banque de France" },
  { value: "68 500", label: "défaillances d'entreprises en 2025", source: "Altares" },
];

const StatsSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Un problème qui s'aggrave <span className="text-highlight italic">chaque année.</span>
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 120}>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-highlight mb-2">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground mb-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground italic">({stat.source})</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
