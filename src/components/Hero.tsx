import { Clock, ShieldCheck, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";
import diagCover from "@/assets/diagnostic-cover.jpg";
import diagKpi from "@/assets/diagnostic-kpi.jpg";
import diagCost from "@/assets/diagnostic-cost.jpg";

const badges = [
  { icon: Clock, label: "Livré en 10 jours" },
  { icon: ShieldCheck, label: "Prix fixe 2 500€" },
  { icon: Monitor, label: "Garanti 2x ou gratuit" },
];

const Hero = () => (
  <section className="section-container py-12 md:py-20">
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-3 space-y-6">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Vos clients vous doivent de l'argent.
            <br />
            <span className="text-highlight">Nous vous aidons à le récupérer.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground/80 text-base lg:text-lg max-w-xl leading-relaxed">
            Pour les dirigeants de PME B2B qui en ont assez de{" "}
            <span className="font-semibold text-highlight italic">financer l'activité de leurs clients</span>{" "}
            avec leur propre trésorerie.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
            On analyse vos factures <span className="font-semibold text-foreground italic">une par une</span>. En 10 jours, vous savez exactement{" "}
            <span className="font-semibold text-foreground italic">combien</span>,{" "}
            <span className="font-semibold text-foreground italic">pourquoi</span>, et{" "}
            <span className="font-semibold text-highlight">quoi faire</span>.{" "}
            Prix fixe. <span className="font-semibold text-foreground">Garanti ou gratuit.</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={TALLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-cta text-cta-foreground px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97] animate-cta-glow"
            >
              <span className="relative z-10">Vérifier mon éligibilité — 2 minutes</span>
            </a>
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0 })}
              className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Nous contacter
            </Link>
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
            {/* 3 overlapping diagnostic screenshots */}
            <div className="absolute top-0 left-0 w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-10 transform -rotate-3">
              <img src={diagCover} alt="Diagnostic Oraya — page de couverture" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute top-8 left-[10%] w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-20 transform rotate-1">
              <img src={diagKpi} alt="Diagnostic Oraya — chiffres clés et segmentation" className="w-full h-auto" loading="lazy" />
            </div>
            <div className="absolute top-16 left-[5%] w-[85%] rounded-xl overflow-hidden shadow-2xl border border-border/30 z-30 transform rotate-2">
              <img src={diagCost} alt="Diagnostic Oraya — coût de l'inaction" className="w-full h-auto" loading="lazy" />
            </div>
          </div>
          <p className="text-muted-foreground text-sm italic mt-4 text-center">
            Vous envoyez vos exports. On fait tout le reste. <span className="font-semibold text-foreground">Vous recevez les décisions.</span>
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;
