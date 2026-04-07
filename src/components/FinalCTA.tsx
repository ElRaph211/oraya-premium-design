import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const FinalCTA = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-xl text-center">
      <ScrollReveal>
        <p className="text-xl md:text-2xl font-semibold text-primary leading-snug mb-6">
          Sans mesure, pas de recul.<br />Sans recul, <span className="text-highlight italic">pas de correction.</span>
        </p>
        <a
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cta text-cta-foreground px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97] animate-cta-glow"
        >
          Vérifier mon éligibilité — 2 minutes
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
