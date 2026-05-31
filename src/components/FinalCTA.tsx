import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const FinalCTA = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-2xl text-center">
      <ScrollReveal>
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
          Demain matin, vos clients vous devront toujours le même montant.
          Personne ne les relancera avec la bonne méthode, au bon moment, sur le bon ton.
          Chaque semaine sans pilotage, c'est du cash qui reste bloqué gratuitement.
        </p>
        <p className="text-lg md:text-xl font-semibold text-primary leading-snug mb-8">
          On peut commencer en{" "}
          <span className="text-highlight italic">10 jours.</span>
        </p>
        <a
          href={TALLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cta text-cta-foreground px-8 py-4 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg shadow-cta/30 hover:shadow-2xl hover:shadow-cta/50 hover:-translate-y-1 hover:scale-[1.05] active:scale-[0.97]"
        >
          Demander une démo — 20 minutes
        </a>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
