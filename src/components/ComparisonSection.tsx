import { XCircle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const without = [
  { title: "Vous savez que des factures traînent.", desc: "Vous ne savez pas combien ça vous coûte." },
  { title: "Vous relancez quand vous y pensez.", desc: "Souvent trop tard, toujours au même ton." },
  { title: "Vous traitez tous vos clients pareil.", desc: "Vous perdez du temps sur ceux qui ne posent pas problème." },
  { title: "Vous finissez le mois en tension.", desc: "Sans comprendre pourquoi le cash ne suit pas." },
  { title: "Personne n'est dédié à ce sujet.", desc: "Vous absorbez tout." },
];

const withOraya = [
  { title: "Chaque facture est analysée.", desc: <>Vous connaissez le <span className="font-semibold text-highlight">montant exact bloqué</span>, client par client.</> },
  { title: "Les relances partent depuis votre propre nom.", desc: "Au bon moment, avec le ton adapté au profil du débiteur." },
  { title: "Chaque client est classé par risque.", desc: <>Vous intervenez uniquement sur <span className="font-semibold text-highlight">les décisions qui comptent</span>.</> },
  { title: "Chaque lundi matin, un récap.", desc: "Ce qui a été relancé, ce qui a bougé, ce qui nécessite votre arbitrage." },
  { title: "Oraya est votre service encaissement externalisé.", desc: <>Vous ne configurez rien, <span className="font-semibold text-highlight">vous ne surveillez rien</span>.</> },
];

const ComparisonSection = () => (
  <section className="section-padding">
    <div className="section-container">
      <ScrollReveal>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ce que ça change <span className="text-highlight italic">concrètement.</span>
          </h2>
          <p className="text-muted-foreground">
            Pas un rapport de plus. Pas un tableau de bord à surveiller.{" "}
            <span className="font-semibold text-foreground">Un service qui tourne pendant que vous faites votre métier.</span>
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 md:p-8 border border-red-200" style={{ backgroundColor: "#FDF2F2" }}>
            <h3 className="text-xl font-bold mb-6 text-red-600">Aujourd'hui</h3>
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

          <div className="rounded-2xl p-6 md:p-8 border border-highlight/20" style={{ backgroundColor: "#F0F7FF" }}>
            <h3 className="text-xl font-bold mb-6 text-highlight flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Avec Oraya
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
