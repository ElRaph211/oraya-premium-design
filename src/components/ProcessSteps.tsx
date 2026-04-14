import { useState } from "react";
import { ClipboardList, Phone, BarChart3, Presentation, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import etape1 from "@/assets/etape_1.png";
import etape2 from "@/assets/etape_2.png";
import etape2_1 from "@/assets/etape_2_1.png";
import etape3 from "@/assets/etape_3.png";
import etape4 from "@/assets/etape_4.png";
import etape5 from "@/assets/etape_5.png";

const steps = [
  {
    icon: ClipboardList,
    day: "Jour 0",
    title: "Éligibilité",
    text: (<>Vous répondez à quelques questions en <span className="font-semibold text-foreground">2 minutes</span>.</>),
    image: etape1,
    alt: "Formulaire d'éligibilité Oraya — Étape 1",
  },
  {
    icon: Phone,
    day: "Jour 1",
    title: "Cadrage",
    text: "Un appel de 20 minutes. Vous exportez vos factures.",
    image: etape2,
    images: [
      { src: etape2, alt: "Appel de cadrage Oraya — Étape 2" },
      { src: etape2_1, alt: "Export des factures — Étape 2" },
    ],
    alt: "Appel de cadrage Oraya — Étape 2",
  },
  {
    icon: BarChart3,
    day: "Jours 2-9",
    title: "Analyse",
    text: (<>On analyse <span className="font-semibold text-foreground">chaque facture</span>. Vous n'avez rien à faire.</>),
    image: etape3,
    alt: "Analyse des factures Oraya — Étape 3",
  },
  {
    icon: Presentation,
    day: "Jour 10",
    title: "Restitution",
    text: (<>Votre <span className="font-semibold text-highlight">diagnostic complet</span> + appel de 30 minutes.</>),
    image: etape4,
    alt: "Restitution du diagnostic Oraya — Étape 4",
  },
  {
    icon: CheckCircle,
    day: "J+30",
    title: "Suivi",
    text: "Point de contrôle pour mesurer les résultats.",
    image: etape5,
    alt: "Suivi des résultats Oraya — Étape 5",
  },
];

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const active = steps[activeStep];
  const hasMultipleImages = !!active.images;
  const currentImage = hasMultipleImages ? active.images![imageIndex] : { src: active.image, alt: active.alt };

  const handleStepClick = (i: number) => {
    setActiveStep(i);
    setImageIndex(0);
  };

  return (
    <section className="section-padding bg-secondary/50">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Comment ça se passe <span className="text-highlight italic">concrètement.</span>
            </h2>
            <p className="text-muted-foreground">
              Un appel pour cadrer. Un formulaire structuré. Votre diagnostic livré en{" "}
              <span className="font-semibold text-foreground">10 jours</span>.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
          {/* Steps on the left */}
          <ScrollReveal>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-2">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  const isActive = i === activeStep;
                  return (
                    <button
                      key={i}
                      onClick={() => handleStepClick(i)}
                      className={`w-full text-left flex gap-5 items-start p-3 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? "bg-highlight/10 ring-1 ring-highlight/30"
                          : "hover:bg-secondary/80"
                      }`}
                    >
                      <div
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-colors duration-200 ${
                          isActive
                            ? "bg-highlight border-highlight"
                            : "bg-highlight/10 border-background group-hover:bg-highlight/20"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors duration-200 ${
                            isActive ? "text-white" : "text-highlight"
                          }`}
                        />
                      </div>
                      <div>
                        <p
                          className={`text-xs font-semibold uppercase tracking-wide mb-1 transition-colors duration-200 ${
                            isActive ? "text-highlight" : "text-muted-foreground"
                          }`}
                        >
                          Étape {i + 1} — {step.day}
                        </p>
                        <h4
                          className={`font-bold text-base mb-1 transition-colors duration-200 ${
                            isActive ? "text-foreground" : "text-foreground/80"
                          }`}
                        >
                          {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{step.text}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Dynamic image on the right */}
          <ScrollReveal delay={150}>
            <div className="sticky top-24">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30 bg-background">
                <img
                  key={`${activeStep}-${imageIndex}`}
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto animate-fade-in-up"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-2 mt-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-highlight">Étape {activeStep + 1}</span> — {active.title}
                </p>
                {hasMultipleImages && (
                  <div className="flex gap-1.5 ml-2">
                    {active.images!.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          i === imageIndex ? "bg-highlight" : "bg-border hover:bg-muted-foreground/50"
                        }`}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
