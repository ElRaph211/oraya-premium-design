import { Plug, Globe, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";
import diagCover from "@/assets/diagnostic-cover.jpg";
import diagKpi from "@/assets/diagnostic-kpi.jpg";
import diagCost from "@/assets/diagnostic-cost.jpg";

const badges = [
  { icon: Plug, label: "Compatible avec vos outils comptables" },
  { icon: Globe, label: "Relances envoyées depuis votre domaine" },
  { icon: Zap, label: "Opérationnel en 7 jours" },
];

const integrations = ["Pennylane", "Sage", "Axonaut", "Excel"];

const Hero = () => (
  <section className="section-container py-12 md:py-20">
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-3 space-y-6">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Vos factures traînent.
            <br />
            <span className="text-highlight">Votre cash reste chez vos clients.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground/80 text-base lg:text-lg max-w-xl leading-relaxed">
            Oraya{" "}
            <span className="font-semibold text-highlight italic">se connecte à votre outil comptable</span>,
            pilote vos relances depuis votre nom, et vous envoie un récap chaque semaine.
            Vous ne touchez à rien.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-cta text-cta-foreground px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
            >
              <span className="relative z-10">Demander une démo</span>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <div className="flex flex-wrap gap-3 pt-2">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 text-sm font-medium bg-secondary text-foreground/70 px-5 py-2.5 rounded-full border border-border"
              >
                <Icon className="w-4 h-4 text-highlight" />
                {label}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Bandeau intégrations */}
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-3 border-t border-border/50 mt-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Compatible avec
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {integrations.map((name, i) => (
                <span
                  key={name}
                  className="text-sm font-medium text-foreground/60 flex items-center gap-x-5"
                >
                  {name}
                  {i < integrations.length - 1 && (
                    <span className="text-foreground/20" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="md:col-span-2">
        <ScrollReveal delay={300}>
          <div className="relative w-full" style={{ minHeight: "340px" }}>
            <div className="absolute top-0 left-0 w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-10 transform -rotate-3">
              <img src={diagCover} alt="Connexion Oraya à votre outil comptable" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute top-8 left-[10%] w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-20 transform rotate-1">
              <img src={diagKpi} alt="Scoring client Oraya" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute top-16 left-[5%] w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-30 transform rotate-2">
              <img src={diagCost} alt="Récap hebdomadaire Oraya" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm italic mt-4 text-center">
            Connexion. Détection. Relance. Récap.{" "}
            <span className="font-semibold text-foreground">Vous gardez le contrôle.</span>
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;
