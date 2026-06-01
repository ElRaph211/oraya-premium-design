import { useState } from "react";
import { Video, Plug, Settings, Rocket, RefreshCw } from "lucide-react";
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
    day: "Étape 1",
    title: "Démo",
    text: "On regarde votre situation et on vérifie qu'Oraya peut vous aider.",
    image: etape1,
    alt: "Démo Oraya — Étape 1",
  },
  {
    icon: Plug,
    day: "Étape 2",
    title: "Connexion",
    text: (<>Votre outil comptable est connecté <span className="font-semibold text-foreground">via API ou import de fichiers</span>. Vos données sont synchronisées.</>),
    image: etape2,
    images: [
      { src: etape2, alt: "Connexion API — Étape 2" },
      { src: etape2_1, alt: "Import de fichiers — Étape 2" },
    ],
    alt: "Connexion Oraya — Étape 2",
  },
  {
    icon: Settings,
    day: "Étape 3",
    title: "Configuration",
    text: (<>Vos factures sont analysées, vos clients classés, vos séquences préparées.{" "}
      <span className="font-semibold text-foreground">Vous validez les règles sur vos comptes sensibles.</span></>),
    image: etape3,
    alt: "Configuration Oraya — Étape 3",
  },
  {
    icon: Rocket,
    day: "Étape 4",
    title: "Lancement",
    text: (<>Les premières relances partent.{" "}
      <span className="font-semibold text-highlight">Depuis votre nom, sur votre domaine.</span></>),
    image: etape4,
    alt: "Lancement Oraya — Étape 4",
  },
  {
    icon: RefreshCw,
    day: "Étape 5",
    title: "Pilotage continu",
    text: "Le service tourne. Les réponses sont traitées. Vous recevez un récap le lundi.",
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
              Opérationnel en <span className="text-highlight italic">7 jours.</span>
            </h2>
            <p className="text-muted-foreground">
              Une démo. Une connexion.{" "}
              <span className="font-semibold text-foreground">Et ça tourne.</span>
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
                          {step.day}
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
