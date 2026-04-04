import ScrollReveal from "./ScrollReveal";

const AboutSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-3xl">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-36 h-36 rounded-full bg-border flex-shrink-0 flex items-center justify-center">
            <span className="text-muted-foreground text-xs">Photo</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">À propos</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Je suis Raphaël, fondateur d'Oraya. En accompagnant des dirigeants de PME, j'ai vu la même anomalie partout :
              des milliers d'euros gagnés qui ne rentrent jamais, sans que personne ne sache dire pourquoi ni quoi faire.
              Je ne suis pas un consultant généraliste et Oraya n'est pas un outil de plus. C'est une méthode chirurgicale
              dédiée à un seul problème, avec un résultat concret et garanti en 10 jours.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AboutSection;
