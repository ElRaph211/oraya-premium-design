import { ClipboardList, Phone, BarChart3, Presentation, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import diagCauses from "@/assets/diagnostic-causes.jpg";

const steps = [
  { icon: ClipboardList, day: "Jour 0", title: "Éligibilité", text: <>Vous répondez à quelques questions en <span className="font-semibold text-foreground">2 minutes</span>.</> },
  { icon: Phone, day: "Jour 1", title: "Cadrage", text: "Un appel de 20 minutes. Vous exportez vos factures." },
  { icon: BarChart3, day: "Jours 2-9", title: "Analyse", text: <>On analyse <span className="font-semibold text-foreground">chaque facture</span>. Vous n'avez rien à faire.</> },
  { icon: Presentation, day: "Jour 10", title: "Restitution", text: <>Votre <span className="font-semibold text-highlight">diagnostic complet</span> + appel de 30 minutes.</> },
  { icon: CheckCircle, day: "J+30", title: "Suivi", text: "Point de contrôle pour mesurer les résultats." },
];

const ProcessSteps = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Comment ça se passe <span className="text-highlight italic">concrètement.</span>
          </h2>
          <p className="text-muted-foreground">
            Un appel pour cadrer. Un formulaire structuré. Votre diagnostic livré en <span className="font-semibold text-foreground">10 jours</span>.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        {/* Steps on the left */}
        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} delay={i * 120}>
                  <div className="flex gap-5 items-start">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-highlight/10 flex items-center justify-center flex-shrink-0 border-2 border-background">
                      <Icon className="w-5 h-5 text-highlight" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-highlight uppercase tracking-wide mb-1">
                        Étape {i + 1} — {step.day}
                      </p>
                      <h4 className="font-bold text-base mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Diagnostic causes image on the right */}
        <ScrollReveal delay={300}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30">
            <img
              src={diagCauses}
              alt="Diagnostic Oraya — analyse des causes profondes"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default ProcessSteps;
