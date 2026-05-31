import { Send, Globe, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";
import diagCover from "@/assets/diagnostic-cover.jpg";
import diagKpi from "@/assets/diagnostic-kpi.jpg";
import diagCost from "@/assets/diagnostic-cost.jpg";

const badges = [
  { icon: Send, label: "Relances envoyées à votre place" },
  { icon: Globe, label: "Depuis votre propre nom de domaine" },
  { icon: CalendarCheck, label: "Récap chaque lundi matin" },
];

const Hero = () => (
  <section className="section-container py-12 md:py-20">
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-3 space-y-6">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Vos factures traînent.
            <br />
            <span className="text-highlight">Votre cash dort chez vos clients.</span>
            <br />
            On s'en occupe.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground/80 text-base lg:text-lg max-w-xl leading-relaxed">
            Oraya pilote vos relances, lit les réponses, adapte le ton, et vous envoie un point{" "}
            <span className="font-semibold text-highlight italic">chaque lundi</span>.
            Vous ne touchez à rien.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
            Vous envoyez vos exports comptables. On fait le reste :{" "}
            <span className="font-semibold text-foreground italic">analyse facture par facture</span>,{" "}
            relances depuis votre propre nom, suivi des réponses, escalade si nécessaire.
            Vous récupérez votre cash{" "}
            <span className="font-semibold text-highlight">sans courir après personne</span>.
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
              <span className="relative z-10">Demander une démo — 20 minutes</span>
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
      </div>

      <div className="md:col-span-2">
        <ScrollReveal delay={300}>
          <div className="relative w-full" style={{ minHeight: "340px" }}>
            {/* 3 overlapping screenshots */}
            <div className="absolute top-0 left-0 w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-10 transform -rotate-3">
              <img src={diagCover} alt="Analyse Oraya — vue d'ensemble" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute top-8 left-[10%] w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-20 transform rotate-1">
              <img src={diagKpi} alt="Scoring client Oraya" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute top-16 left-[5%] w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-30 transform rotate-2">
              <img src={diagCost} alt="Récap hebdomadaire Oraya" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm italic mt-4 text-center">
            Vous envoyez vos exports. On fait tout le reste.{" "}
            <span className="font-semibold text-foreground">Vous recevez les décisions.</span>
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;
