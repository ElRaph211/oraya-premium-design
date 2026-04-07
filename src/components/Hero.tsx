import { Clock, ShieldCheck, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const badges = [
  { icon: Clock, label: "Livré en 10 jours" },
  { icon: ShieldCheck, label: "Prix fixe garanti" },
  { icon: Monitor, label: "Aucun outil à installer" },
];

const Hero = () => (
  <section className="section-container py-12 md:py-20">
    <div className="grid md:grid-cols-5 gap-10 items-center">
      <div className="md:col-span-3 space-y-6">
        <ScrollReveal>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Encaissez plus vite,
            <br />
            <span className="text-highlight italic">sans courir après vos clients.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-foreground/80 text-base lg:text-lg max-w-xl leading-relaxed">
            Pour les dirigeants de PME B2B qui en ont assez d'avancer{" "}
            <span className="font-semibold text-highlight">l'argent de leurs clients</span>{" "}
            avec leur propre trésorerie.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-muted-foreground text-sm max-w-xl leading-relaxed">
            Oraya identifie <span className="font-semibold text-foreground italic">combien de cash est bloqué</span> chez vos clients,{" "}
            <span className="font-semibold text-foreground italic">pourquoi</span>, et vous dit exactement{" "}
            <span className="font-semibold text-highlight">quoi faire cette semaine</span> pour le récupérer.
          </p>
          <p className="text-muted-foreground text-sm italic mt-2 max-w-xl">
            Vous envoyez vos exports. On fait tout le reste. <span className="font-semibold text-foreground">Vous recevez les décisions.</span>
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
          <div className="bg-secondary rounded-2xl shadow-lg border border-border aspect-[4/3] flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-12 h-12 rounded-full bg-highlight/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-muted-foreground">Aperçu du diagnostic</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Hero;
