import ScrollReveal from "./ScrollReveal";
import aboutPhoto from "@/assets/image_for_a_propos.png";

const AboutSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-3xl">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={aboutPhoto}
            alt="Raphaël, fondateur d'Oraya"
            className="w-44 h-44 rounded-full object-cover flex-shrink-0 border-2 border-border shadow-sm"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">À propos</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Je suis Raphaël, fondateur d'Oraya. En accompagnant des dirigeants de PME, j'ai vu la même anomalie partout :
              des <span className="font-semibold text-highlight">milliers d'euros gagnés qui ne rentrent jamais</span>, sans que personne ne sache dire pourquoi ni quoi faire.
              Je ne suis pas un consultant généraliste et Oraya n'est pas un outil de plus. C'est une <span className="font-semibold text-foreground italic">méthode chirurgicale</span>{" "}
              dédiée à un seul problème, avec un <span className="font-semibold text-highlight">résultat concret et garanti</span> en 10 jours.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
