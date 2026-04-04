import { ClipboardList, Phone, BarChart3, Presentation, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: ClipboardList, day: "Jour 0", title: "Éligibilité", text: "Vous répondez à quelques questions en 2 minutes." },
  { icon: Phone, day: "Jour 1", title: "Cadrage", text: "Un appel de 20 minutes. Vous exportez vos factures." },
  { icon: BarChart3, day: "Jours 2-9", title: "Analyse", text: "On analyse chaque facture. Vous n'avez rien à faire." },
  { icon: Presentation, day: "Jour 10", title: "Restitution", text: "Votre diagnostic complet + appel de 30 minutes." },
  { icon: CheckCircle, day: "J+30", title: "Suivi", text: "Point de contrôle pour mesurer les résultats." },
];

const ProcessSteps = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-2xl">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Comment ça se passe concrètement.</h2>
          <p className="text-muted-foreground">
            Un appel pour cadrer. Un formulaire structuré. Votre diagnostic livré en 10 jours.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        {/* Vertical line */}
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
    </div>
  </section>
);

export default ProcessSteps;
