import { TrendingDown, EyeOff, Hourglass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: TrendingDown,
    badge: "Trésorerie sous tension",
    title: "Vous financez vos clients sans le vouloir",
    text: "Vous travaillez, vous facturez, mais le cash ne suit pas. Vos clients vous paient en retard pendant qu'on vous réclame charges, salaires et fournisseurs sans délai.",
  },
  {
    icon: EyeOff,
    badge: "Manque de visibilité",
    title: "Vous ne savez pas ce qui bloque vraiment",
    text: "Vous savez que certains clients paient en retard. Mais lesquels vous coûtent le plus ? Sans analyse précise, impossible de savoir où agir en priorité.",
  },
  {
    icon: Hourglass,
    badge: "Inaction subie",
    title: "Vous ne savez pas par où commencer",
    text: "Relancer tout le monde de la même manière ne fonctionne pas. Ce qui manque : savoir quel client bloque combien et quoi faire concrètement cette semaine.",
  },
];

const ProblemsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            9 dirigeants sur 10 avancent l'argent de leurs clients sans le mesurer.
          </h2>
          <p className="text-muted-foreground">
            15 milliards d'euros bloqués chaque année dans les retards de paiement des PME françaises.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, i) => {
          const Icon = card.icon;
          return (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-highlight" />
                </div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-highlight/10 text-highlight">
                  {card.badge}
                </span>
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
