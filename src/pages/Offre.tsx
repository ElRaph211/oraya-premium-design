import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const includes = [
  "Analyse individuelle de chaque facture",
  "Cartographie complète du cash bloqué",
  "Scoring de risque par client",
  "Plan d'action chiffré et priorisé",
  "Scripts de relance personnalisés",
  "Cadre préventif (CGV, process, calendrier)",
  "Appel de restitution de 30 minutes",
  "Suivi à J+30",
];

const faqOffre = [
  { q: "Combien de factures sont analysées ?", a: "Toutes. Nous analysons l'intégralité de vos factures sur la période concernée, sans limite." },
  { q: "Quel format pour les exports ?", a: "Excel, CSV ou export direct depuis votre logiciel de facturation. On s'adapte à ce que vous avez." },
  { q: "Combien de temps dure la mission ?", a: "10 jours ouvrés entre la réception de vos données et la livraison du diagnostic complet." },
  { q: "Que se passe-t-il après le diagnostic ?", a: "Vous avez un plan d'action concret. Vous l'appliquez. À J+30, on fait un point pour mesurer les résultats." },
  { q: "La garantie, c'est vraiment sans condition ?", a: "Oui. Si nous n'identifions pas 2x le coût du diagnostic en cash récupérable, on recommence. Pas de clause cachée." },
];

const Offre = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>
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

        {/* Prix */}
        <section className="pb-16">
          <div className="section-container max-w-md">
            <ScrollReveal>
              <div className="rounded-2xl border border-primary/20 p-8 text-center" style={{ backgroundColor: "#F8FAFC" }}>
                <p className="text-muted-foreground line-through text-lg mb-1">4 500€</p>
                <p className="text-4xl font-bold text-highlight mb-2">2 500€ <span className="text-base font-normal text-muted-foreground">TTC</span></p>
                <p className="text-xs text-highlight font-semibold mb-6">Tarif fondateur — places limitées</p>

                <ul className="space-y-3 text-left mb-8">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-cta flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://tally.so/r/gD4dOM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cta text-cta-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-cta-hover transition-colors"
                >
                  Vérifier mon éligibilité
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Garantie */}
        <section className="section-padding bg-secondary/50">
          <div className="section-container max-w-2xl">
            <ScrollReveal>
              <div className="rounded-xl border-l-4 border-l-highlight p-6 md:p-8" style={{ backgroundColor: "#F0F7FF" }}>
                <h3 className="text-xl font-bold mb-3">La Garantie Oraya.</h3>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Nous identifions au minimum 2 fois le coût du diagnostic en cash récupérable dans vos données.
                  Si nous n'y parvenons pas, nous reprenons l'analyse gratuitement. Sans condition.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ROI & ancrage comparatif */}
        <section className="section-padding">
          <div className="section-container max-w-2xl text-center">
            <ScrollReveal>
              <h2 className="text-2xl font-bold mb-4">Mettez ce prix en perspective.</h2>
              <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
                2 500€ représente moins qu'un mois de retard sur un seul client moyen.
                Le diagnostic identifie en moyenne 10 à 30x ce montant en cash récupérable.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ offre */}
        <section className="section-padding bg-secondary/50">
          <div className="section-container max-w-2xl">
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-center mb-8">Questions fréquentes</h2>
            </ScrollReveal>
            <div className="space-y-3">
              {faqOffre.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="border border-border rounded-xl bg-background overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-sm font-semibold pr-4">{faq.q}</span>
                      {openIndex === i ? <Minus className="w-4 h-4 text-highlight flex-shrink-0" /> : <Plus className="w-4 h-4 text-highlight flex-shrink-0" />}
                    </button>
                    {openIndex === i && (
                      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="section-container max-w-xl text-center">
            <ScrollReveal>
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
