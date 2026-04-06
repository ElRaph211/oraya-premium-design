import { Shield, Search, Target, Lightbulb, BarChart3, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const blocks = [
  { icon: Search, title: "Cartographie complète", text: "Chaque facture est analysée individuellement : montant, client, délai réel, écart par rapport aux conditions. Rien n'est estimé." },
  { icon: BarChart3, title: "Scoring client", text: "Chaque client reçoit un score de risque basé sur son historique de paiement. Vous savez immédiatement qui surveiller." },
  { icon: Target, title: "Priorisation par impact", text: "Les actions sont classées par impact financier décroissant. Vous commencez par ce qui rapporte le plus." },
  { icon: FileCheck, title: "Scripts de relance", text: "Pour chaque situation, un script prêt à envoyer : email, appel, courrier. Adapté au profil du client." },
  { icon: Shield, title: "Cadre préventif", text: "Conditions générales, process de facturation, calendrier de relance : le cadre pour que les retards ne se reproduisent plus." },
  { icon: Lightbulb, title: "Recommandations stratégiques", text: "Au-delà de la relance : renégociation des conditions, segmentation client, arbitrage commercial." },
];

const SystemeSection = () => (
  <section id="systeme" className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-3">Le système</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Le Système Oraya
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pas un logiciel. Pas un consultant généraliste. Un diagnostic structuré, livré en 10 jours, avec des décisions actionnables dès le lendemain.
          </p>
        </div>
      </ScrollReveal>

      {/* Placeholder pour 2 images */}
      <ScrollReveal>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="aspect-video rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Image 1</p>
          </div>
          <div className="aspect-video rounded-xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Image 2</p>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map((block, i) => {
          const Icon = block.icon;
          return (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-background rounded-xl border border-border p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-highlight" />
                </div>
                <h3 className="font-bold text-base mb-2">{block.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default SystemeSection;
