import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, ShieldCheck, Plus, Minus, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const includes = [
  "12 mois de facturation analysés, facture par facture",
  "Chaque client classé par niveau de risque avec un score dédié",
  "Les causes précises de vos retards identifiées",
  "Un plan d'action priorisé avec messages de relance calibrés par client",
  "Projection de vos encaissements à J+30 / J+60 / J+90",
  "Deux appels avec notre équipe : cadrage + restitution",
];

const detailSections = [
  {
    title: "Analyse complète",
    content: "12 mois de données passées au crible, facture par facture, client par client. Aucune moyenne globale : chaque point de friction est identifié et chiffré.",
  },
  {
    title: "Clients passés au crible",
    content: "Score de risque individuel, historique de paiement, comportement récurrent. Vous savez exactement qui vous coûte combien.",
  },
  {
    title: "Causes identifiées",
    content: "Délais contractuels mal calibrés, CGV non appliquées, absence de relance, litiges non tracés. Chaque cause est documentée.",
  },
  {
    title: "Plan d'action",
    content: "Actions classées par impact financier. Messages de relance rédigés et adaptés au profil de chaque client.",
  },
  {
    title: "Projection et pilotage",
    content: "Vos encaissements prévisionnels à J+30, J+60, J+90. Un tableau de bord synthétique pour piloter la suite.",
  },
  {
    title: "Accompagnement",
    content: "Un appel de cadrage (20 min) + un appel de restitution (30 min) + un point de suivi à J+30.",
  },
  {
    title: "Bonus",
    content: "Modèle de CGV optimisé pour réduire structurellement vos délais de paiement.",
  },
];

const faqOffre = [
  { q: "Combien de factures sont analysées ?", a: "Toutes. Nous analysons l'intégralité de vos factures sur la période concernée, sans limite." },
  { q: "Quel format pour les exports ?", a: "Excel, CSV ou export direct depuis votre logiciel de facturation. On s'adapte à ce que vous avez." },
  { q: "Combien de temps dure la mission ?", a: "10 jours ouvrés entre la réception de vos données et la livraison du diagnostic complet." },
  { q: "Que se passe-t-il après le diagnostic ?", a: "Vous avez un plan d'action concret. Vous l'appliquez. À J+30, on fait un point pour mesurer les résultats." },
  { q: "La garantie, c'est vraiment sans condition ?", a: "Oui. Si nous n'identifions pas 2x le coût du diagnostic en cash récupérable, on recommence. Pas de clause cachée." },
];

const Offre = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="section-padding">
          <div className="section-container max-w-3xl text-center">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-3">L'offre</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Oraya Precision</h1>
              <p className="text-muted-foreground">
                Un diagnostic complet de vos retards de paiement, livré en 10 jours, avec un résultat garanti.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Pricing card */}
        <section className="pb-16">
          <div className="section-container max-w-lg">
            <ScrollReveal>
              <div className="rounded-2xl border border-primary/20 p-8 text-center" style={{ backgroundColor: "#F8FAFC" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-highlight mb-4">Diagnostic complet</p>
                <h3 className="text-2xl font-bold mb-1">Oraya Precision</h3>
                <p className="text-muted-foreground line-through text-lg mb-1">4 500€ TTC</p>
                <p className="text-3xl font-bold text-highlight mb-2">2 500€ <span className="text-base font-normal text-muted-foreground">TTC</span></p>
                <p className="text-xs text-highlight font-medium mb-6">
                  Tarif réservé à nos premiers clients. En échange : votre retour honnête et 20 minutes de feedback.
                </p>

                <ul className="space-y-3 text-left mb-6">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-highlight flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Collapsible detail */}
                <button
                  onClick={() => setShowDetail(!showDetail)}
                  className="flex items-center justify-center gap-1 mx-auto text-sm font-medium text-highlight hover:underline mb-6 transition-colors"
                >
                  Voir le détail complet
                  {showDetail ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showDetail && (
                  <div className="text-left space-y-5 mb-6 border-t border-border pt-6">
                    {detailSections.map((section, i) => (
                      <div key={i}>
                        <p className="font-semibold text-sm text-foreground mb-1">{section.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                      </div>
                    ))}
                  </div>
                )}

                <a
                  href="https://tally.so/r/gD4dOM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cta text-cta-foreground px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-cta-hover transition-colors"
                >
                  Vérifier mon éligibilité — 2 minutes
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Guarantee */}
        <section className="section-padding">
          <div className="section-container max-w-2xl">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-background p-8 md:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-highlight rounded-r-full" />
                <div className="pl-6">
                  <div className="w-12 h-12 rounded-xl bg-highlight/10 flex items-center justify-center mb-5">
                    <ShieldCheck className="w-6 h-6 text-highlight" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">La Garantie Oraya.</h3>
                  <p className="text-base text-foreground/80 leading-relaxed mb-4">
                    Nous identifions au minimum 2 fois le coût du diagnostic en cash
                    récupérable dans vos données. Si nous n'y parvenons pas, nous
                    reprenons l'analyse gratuitement. Sans condition.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Nous sélectionnons les entreprises que nous pouvons réellement aider.
                    C'est pour cela que tout commence par une vérification d'éligibilité.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ offre */}
        <section className="section-padding">
          <div className="section-container max-w-2xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-center mb-8">Questions fréquentes</h2>
            </ScrollReveal>
            <div className="space-y-3">
              {faqOffre.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="border border-border rounded-xl bg-background overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-sm font-semibold pr-4">{faq.q}</span>
                      {openFaq === i ? <Minus className="w-4 h-4 text-highlight flex-shrink-0" /> : <Plus className="w-4 h-4 text-highlight flex-shrink-0" />}
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary/50">
          <div className="section-container max-w-xl text-center">
            <ScrollReveal>
              <p className="text-xl md:text-2xl font-semibold text-primary leading-snug mb-6">
                Sans mesure, pas de recul.<br />Sans recul, pas de correction.
              </p>
              <a
                href="https://tally.so/r/gD4dOM"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cta text-cta-foreground px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-cta-hover transition-colors"
              >
                Vérifier mon éligibilité — 2 minutes
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Offre;
