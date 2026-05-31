import ScrollReveal from "./ScrollReveal";
import aboutPhoto from "@/assets/image_for_a_propos.png";

const AboutSection = () => (
  <section className="section-padding bg-secondary/50">
    <div className="section-container max-w-4xl">
      <ScrollReveal>
        <h2 className="text-2xl font-bold mb-10 text-center">À propos</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Raphaël */}
        <ScrollReveal delay={0}>
          <div className="bg-background rounded-2xl border border-border p-7 flex flex-col gap-5 h-full">
            <div className="flex items-center gap-4">
              <img
                src={aboutPhoto}
                alt="Raphaël Aubry, fondateur d'Oraya"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-border shadow-sm"
              />
              <div>
                <p className="font-bold text-base">Raphaël Aubry</p>
                <p className="text-xs text-muted-foreground">Fondateur, Oraya</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Je travaille en alternance dans une entreprise qui est elle-même un mauvais payeur.
              Je vois le problème des deux côtés tous les jours — celui qui attend son argent et celui qui fait attendre.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              J'ai construit Oraya parce que j'ai vu la même chose partout : des dirigeants qui savent qu'ils ont un problème de cash,
              qui n'ont ni le temps ni le recul pour le résoudre, et à qui personne ne propose autre chose qu'un tableau de bord ou une facture de consultant.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Oraya fait le travail à votre place. C'est aussi simple que ça.
            </p>
          </div>
        </ScrollReveal>

        {/* François-Clément */}
        <ScrollReveal delay={120}>
          <div className="bg-background rounded-2xl border border-border p-7 flex flex-col gap-5 h-full">
            <div className="flex items-center gap-4">
              <img
                src="/pp_fc.png"
                alt="François-Clément Lacolonge, CTO d'Oraya"
                className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-border shadow-sm"
              />
              <div>
                <p className="font-bold text-base">François-Clément Lacolonge</p>
                <p className="text-xs text-muted-foreground">CTO, Oraya</p>
              </div>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Sur le point de finir EPITA, j'ai rejoint Raphaël pour concevoir et construire l'infrastructure
              qui fait tourner Oraya — de l'automatisation des relances à la livraison du récap hebdomadaire.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Mon rôle : que le service soit fiable, silencieux, et que vous n'ayez jamais à vous demander si ça tourne.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default AboutSection;
