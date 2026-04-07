import { Helmet } from "react-helmet-async";
import { TALLY_URL } from "@/config/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Shield, Search, Target, Lightbulb, BarChart3, FileCheck } from "lucide-react";

const blocks = [
  { icon: Search, title: "Cartographie complète", text: "Chaque facture est analysée individuellement : montant, client, délai réel, écart par rapport aux conditions. Rien n'est estimé." },
  { icon: BarChart3, title: "Scoring client", text: "Chaque client reçoit un score de risque basé sur son historique de paiement. Vous savez immédiatement qui surveiller." },
  { icon: Target, title: "Priorisation par impact", text: "Les actions sont classées par impact financier décroissant. Vous commencez par ce qui rapporte le plus." },
  { icon: FileCheck, title: "Scripts de relance", text: "Pour chaque situation, un script prêt à envoyer : email, appel, courrier. Adapté au profil du client." },
  { icon: Shield, title: "Cadre préventif", text: "Conditions générales, process de facturation, calendrier de relance : le cadre pour que les retards ne se reproduisent plus." },
  { icon: Lightbulb, title: "Recommandations stratégiques", text: "Au-delà de la relance : renégociation des conditions, segmentation client, arbitrage commercial." },
];

const Systeme = () => (
  <>
    <Helmet>
      <title>Notre méthode — Oraya | Analyse facture par facture</title>
      <meta name="description" content="Découvrez la méthode Oraya : cartographie de vos créances, scoring client et priorisation par impact. Une approche chirurgicale pour récupérer votre trésorerie." />
    </Helmet>
    <Navbar />
    <main>
      <section className="section-padding">
        <div className="section-container max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-highlight mb-3">Le système</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Une méthode chirurgicale pour récupérer votre trésorerie.
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Pas un logiciel. Pas un consultant généraliste. Un diagnostic structuré, livré en 10 jours, avec des décisions actionnables dès le lendemain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((block, i) => {
              const Icon = block.icon;
              return (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="bg-background rounded-xl border border-border p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-10 h-10 rounded-lg bg-highlight/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-highlight" />
                    </div>
                    <h3 className="font-bold text-base mb-2">{block.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{block.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="section-container max-w-xl text-center">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4">Prêt à reprendre le contrôle de votre trésorerie ?</h2>
            <a
              href={TALLY_URL}
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

export default Systeme;
