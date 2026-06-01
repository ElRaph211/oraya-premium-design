import { Plug, Radar, Send, MessageSquare, Shield, Bell } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const blocks = [
  {
    icon: Plug,
    title: "Connexion API",
    text: "Oraya se connecte à votre outil comptable ou importe vos fichiers. Factures, clients, conditions de paiement — synchronisés en quelques clics.",
  },
  {
    icon: Radar,
    title: "Détection continue",
    text: "Chaque facture est suivie en temps réel. Les retards sont détectés dès qu'ils apparaissent.",
  },
  {
    icon: Send,
    title: "Relances depuis votre domaine",
    text: "Les messages partent depuis une adresse sur votre propre domaine. Votre client voit votre entreprise. Le ton et le timing s'adaptent au comportement de chaque débiteur.",
  },
  {
    icon: MessageSquare,
    title: "Lecture des réponses",
    text: "Quand un client répond — promesse, contestation, demande de délai — sa réponse est analysée et la séquence s'adapte. Une promesse suspend la relance. Une contestation déclenche un traitement spécifique.",
  },
  {
    icon: Shield,
    title: "Arbitrage protégé",
    text: "Vos clients stratégiques sont identifiés dès le départ. Rien ne part sans votre validation. Vos règles, votre ton, votre rythme.",
  },
  {
    icon: Bell,
    title: "Escalade et récap",
    text: "Si un client ne réagit pas : mise en demeure préparée et soumise à votre validation. Chaque lundi, un point clair sur ce qui a avancé et ce qui nécessite votre décision.",
  },
];

const SystemeSection = () => (
  <section id="systeme" className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-3">Le Pilotage Silencieux</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            De la connexion à{" "}
            <span className="text-highlight italic">l'encaissement.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vos clients reçoivent une relance depuis votre entreprise. Vous recevez un récap le lundi.
            Entre les deux, <span className="font-semibold text-foreground">tout est détecté, envoyé, lu et adapté.</span>
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
            className="inline-block bg-cta text-cta-foreground px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
          >
            Demander une démo
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SystemeSection;
