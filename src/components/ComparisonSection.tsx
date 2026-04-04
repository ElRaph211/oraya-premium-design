import { XCircle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const without = [
  { title: "Aucune visibilité sur vos retards", desc: "Vous savez que vous avez des retards. Vous ne savez pas combien exactement." },
  { title: "Relances sans méthode", desc: "Vous relancez quand vous y pensez. Trop tard. Sans méthode." },
  { title: "Tous les clients traités pareil", desc: "Vous traitez tous vos clients pareil. Vous perdez du temps sur les mauvais." },
  { title: "Fin de mois sous tension", desc: "Vous finissez le mois sous tension sans comprendre d'où ça vient." },
  { title: "Pas de plan d'action", desc: "Vous cherchez une solution sans savoir par où commencer." },
];

const withOraya = [
  { title: "Cash bloqué identifié", desc: "Le chiffre exact de ce que vous avez gagné mais pas encore encaissé. Facture par facture." },
  { title: "Clients à risque ciblés", desc: "Le nom précis des clients qui vous coûtent le plus et pourquoi." },
  { title: "Actions priorisées", desc: "Les 3 actions dans le bon ordre. Avec les scripts prêts à utiliser." },
  { title: "Cadre anti-récidive", desc: "Le cadre à poser pour que les retards ne se reproduisent plus." },
  { title: "Résultat garanti", desc: "Une décision concrète garantie ou on recommence gratuitement." },
];

const ComparisonSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ce que ça change concrètement.</h2>
          <p className="text-muted-foreground">
            Pas un rapport de plus qui finit dans un tiroir. Des décisions à prendre dès le lendemain matin.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sans la méthode Oraya */}
          <div className="rounded-2xl p-6 md:p-8 border border-red-200" style={{ backgroundColor: "#FDF2F2" }}>
            <h3 className="text-xl font-bold mb-6 text-red-600">Sans la méthode Oraya</h3>
            <ul className="space-y-5">
              {without.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-sm text-foreground/70 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Avec la méthode Oraya */}
          <div className="rounded-2xl p-6 md:p-8 border border-highlight/20" style={{ backgroundColor: "#F0F7FF" }}>
            <h3 className="text-xl font-bold mb-6 text-highlight flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Avec la méthode Oraya
            </h3>
            <ul className="space-y-5">
              {withOraya.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.title}</p>
                    <p className="text-sm text-foreground/70 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ComparisonSection;
