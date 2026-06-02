import { TrendingDown, EyeOff, Hourglass } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    icon: TrendingDown,
    badge: "Trésorerie sous tension",
    title: <>Vous travaillez. Vous facturez. <span className="text-highlight italic">Le cash ne suit pas.</span></>,
    text: <>Vos clients encaissent votre travail, mais vous attendez leur argent. Pendant ce temps, les charges, les salaires et les fournisseurs,{" "}
      <span className="font-semibold text-foreground">eux, n'attendent pas.</span></>,
  },
  {
    icon: EyeOff,
    badge: "Pilotage à l'aveugle",
    title: <>Vous savez que ça traîne. <span className="text-highlight italic">Vous ne savez pas combien.</span></>,
    text: <>Quel client vous coûte le plus en cash bloqué ? Lequel glisse depuis trois mois sans que personne ne réagisse ?{" "}
      <span className="font-semibold text-foreground">Sans analyse facture par facture, vous pilotez à l'aveugle.</span></>,
  },
  {
    icon: Hourglass,
    badge: "Relances sans méthode",
    title: <>Vous relancez au feeling. <span className="text-highlight italic">Quand vous y pensez.</span></>,
    text: <>Même email, même ton, même moment pour tout le monde.{" "}
      <span className="font-semibold text-foreground">Les bons payeurs sont agacés. Les mauvais payeurs ignorent.</span></>,
  },
];

const ProblemsSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="text-highlight">15 milliards d'euros.</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            C'est ce que les PME françaises laissent dormir chaque année dans les retards de paiement.{" "}
            <span className="font-semibold text-foreground">Une entreprise sur quatre qui ferme, ferme à cause de sa trésorerie</span>, pas à cause de son carnet de commandes.
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
