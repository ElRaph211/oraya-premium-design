import { Shield, Search, Target, Lightbulb, BarChart3, FileCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

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
          <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-3">Le système <span className="font-extrabold">Oraya</span></p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Un diagnostic structuré orienté{" "}
            <span className="text-highlight italic">résultats</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pas un logiciel. Pas un consultant généraliste. Un diagnostic structuré, livré en <span className="font-semibold text-foreground">10 jours</span>, avec des décisions actionnables dès le lendemain.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={50}>
        <div className="rounded-2xl border border-border overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {blocks.slice(0, 3).map((block, i) => {
              const Icon = block.icon;
              return (
                <div key={i} className="p-6 md:p-8 hover:bg-secondary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-highlight" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{block.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                </div>
              );
            })}
          </div>
          <div className="border-t border-border grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {blocks.slice(3).map((block, i) => {
              const Icon = block.icon;
              return (
                <div key={i} className="p-6 md:p-8 hover:bg-secondary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-highlight" />
                  </div>
                  <h3 className="font-bold text-base mb-2">{block.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="text-center mt-10">
          <a
            href={TALLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cta text-cta-foreground px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97] animate-cta-glow"
          >
            Vérifier mon éligibilité — 2 minutes
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SystemeSection;
