import ScrollReveal from "./ScrollReveal";
import { TALLY_URL } from "@/config/constants";

const FinalCTA = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-2xl text-center">
      <ScrollReveal>
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-6">
          Demain matin, votre plus gros client vous devra toujours le même montant.
          Vous ne saurez toujours pas exactement combien.
          Vous relancerez au hasard, en espérant que ça rentre.
        </p>
        <p className="text-lg md:text-xl font-semibold text-primary leading-snug mb-2">
          Chaque mois sans diagnostic, c'est du cash qui reste{" "}
          <span className="text-highlight italic">bloqué gratuitement.</span>
        </p>
        <p className="text-sm font-semibold text-foreground mb-8">
          10 jours. <span className="text-highlight">Garanti Oraya.</span>
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
