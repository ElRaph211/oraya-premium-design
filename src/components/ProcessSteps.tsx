import { useState } from "react";
import { Video, Upload, BarChart3, Rocket, RefreshCw } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import etape1 from "@/assets/etape_1.png";
import etape2 from "@/assets/etape_2.png";
import etape2_1 from "@/assets/etape_2_1.png";
import etape3 from "@/assets/etape_3.png";
import etape4 from "@/assets/etape_4.png";
import etape5 from "@/assets/etape_5.png";

const steps = [
  {
    icon: Video,
    day: "Jour 0",
    title: "Démo",
    text: "20 minutes pour comprendre votre situation. On regarde ensemble si Oraya peut vous aider.",
    image: etape1,
    alt: "Démo Oraya — Étape 1",
  },
  {
    icon: Upload,
    day: "Jour 1",
    title: "Vos exports",
    text: "Vous envoyez vos exports comptables : balance âgée, grand livre, factures. On s'occupe du reste.",
    image: etape2,
    images: [
      { src: etape2, alt: "Exports comptables — Étape 2" },
      { src: etape2_1, alt: "Balance âgée — Étape 2" },
    ],
    alt: "Exports comptables Oraya — Étape 2",
  },
  {
    icon: BarChart3,
    day: "Jours 2-10",
    title: "Analyse et mise en place",
    text: (<>On analyse chaque facture, on classe vos clients par risque, on prépare les premières séquences de relance.{" "}
      <span className="font-semibold text-foreground">Vous n'avez rien à faire.</span></>),
    image: etape3,
    alt: "Analyse Oraya — Étape 3",
  },
  {
    icon: Rocket,
    day: "Jour 10",
    title: "Lancement",
    text: (<>Premiers envois. Vous recevez votre{" "}
      <span className="font-semibold text-highlight">premier récap le lundi suivant</span>.</>),
    image: etape4,
    alt: "Lancement Oraya — Étape 4",
  },
  {
    icon: RefreshCw,
    day: "Chaque semaine",
    title: "Pilotage continu",
    text: "Les relances tournent. Les réponses sont lues et traitées. Vous intervenez uniquement quand une décision vous revient.",
    image: etape5,
    alt: "Pilotage continu Oraya — Étape 5",
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
              Comment ça démarre. <span className="text-highlight italic">Concrètement.</span>
            </h2>
            <p className="text-muted-foreground">
              Un appel. Vos exports.{" "}
              <span className="font-semibold text-foreground">On prend la main.</span>
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
