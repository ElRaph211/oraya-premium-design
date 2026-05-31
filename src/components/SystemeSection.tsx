import { Search, Send, MessageSquare, Shield, AlertTriangle, CalendarCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const blocks = [
  {
    icon: Search,
    title: "Analyse initiale",
    text: "On reçoit vos exports comptables. Chaque facture est analysée : montant, délai réel, écart avec vos conditions, historique du client. On identifie où votre cash est bloqué et pourquoi.",
  },
  {
    icon: Send,
    title: "Relances sous votre nom",
    text: "Les relances partent depuis une adresse sur votre propre domaine. Votre client voit votre entreprise, pas un tiers. Le ton et le timing sont adaptés au profil de chaque débiteur.",
  },
  {
    icon: MessageSquare,
    title: "Lecture des réponses",
    text: "Quand un client répond — promesse de paiement, contestation, demande de délai — on lit, on classe, on adapte la suite. Si un client promet de payer vendredi, la relance suivante est suspendue.",
  },
  {
    icon: Shield,
    title: "Arbitrage protégé",
    text: "Vos clients stratégiques sont identifiés dès le départ. Rien ne part vers eux sans votre validation. Vous gardez le contrôle sur les relations qui comptent.",
  },
  {
    icon: AlertTriangle,
    title: "Escalade si nécessaire",
    text: "Si un client ne réagit pas malgré les relances : mise en demeure préparée et soumise à votre validation. Si ça va plus loin, on prépare le dossier et on vous oriente.",
  },
  {
    icon: CalendarCheck,
    title: "Récap hebdomadaire",
    text: "Chaque lundi matin : ce qui a été envoyé, ce qui a été répondu, ce qui a bougé, ce qui nécessite votre décision. Vous pilotez en 5 minutes par semaine.",
  },
];

const SystemeSection = () => (
  <section id="systeme" className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-highlight mb-3">Le Pilotage Silencieux</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Comment ça fonctionne.{" "}
            <span className="text-highlight italic">Concrètement.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vos clients reçoivent une relance depuis votre entreprise. Vous recevez un point le lundi.
            Entre les deux, <span className="font-semibold text-foreground">tout est géré.</span>
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
            Demander une démo — 20 minutes
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SystemeSection;
