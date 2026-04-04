import { useState } from "react";
import { Plus, Minus, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Qu'est-ce qu'Oraya exactement ?",
    a: "Oraya est un diagnostic complet de vos retards de paiement. On analyse chaque facture, on identifie les clients qui vous coûtent le plus, et on vous livre un plan d'action chiffré et priorisé pour récupérer votre trésorerie.",
  },
  {
    q: "Mon comptable ne gère pas déjà ça ?",
    a: "Votre comptable enregistre les factures. Oraya les analyse sous un angle financier que personne ne regarde : combien chaque retard vous coûte, quels clients bloquent votre cash, et quelles actions prendre en priorité.",
  },
  {
    q: "Comment un diagnostic va m'aider à encaisser plus vite ?",
    a: "Vous ne recevez pas un rapport à interpréter. Vous recevez une cartographie complète de votre cash bloqué, les causes exactes pour chaque blocage, et un plan d'action priorisé par impact financier. Chaque action est chiffrée.",
  },
  {
    q: "Je peux faire ça moi-même, non ?",
    a: "En théorie, oui. En pratique, ça demande des heures d'analyse, une méthode éprouvée et une objectivité difficile à avoir quand ce sont vos propres clients. Oraya vous fait gagner du temps et de la lucidité.",
  },
  {
    q: "Et si je ne suis pas satisfait ?",
    a: "Notre garantie est simple : nous identifions au minimum 2 fois le coût du diagnostic en cash récupérable. Si ce n'est pas le cas, on recommence gratuitement. Sans condition.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Absolument. Vos données sont traitées de manière confidentielle, stockées sur des serveurs sécurisés en Europe, et supprimées après la mission. Nous signons un accord de confidentialité dès le départ.",
  },
  {
    q: "Je ne veux pas brusquer mes clients.",
    a: "C'est justement l'approche Oraya : pas de relance agressive. On vous donne les mots justes, le bon timing, et la bonne méthode pour chaque client. Vous protégez votre relation commerciale tout en encaissant plus vite.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Des questions ?<br />On y répond <span className="italic text-highlight">sans filtre</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="mt-8 rounded-2xl p-6 text-primary-foreground" style={{ background: "linear-gradient(135deg, hsl(213 70% 19%), hsl(214 80% 40%))" }}>
                <p className="font-semibold text-base mb-1">Besoin d'un renseignement ?</p>
                <p className="text-sm opacity-80 mb-5">Contactez Raphaël directement.</p>
                <a
                  href="mailto:raphael@orayasystem.fr"
                  className="flex items-center justify-center gap-2 bg-background/15 hover:bg-background/25 backdrop-blur text-primary-foreground rounded-lg py-3 text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Envoyer un email
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right */}
          <div className="md:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="border border-border rounded-xl bg-background overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="text-sm font-semibold pr-4">{faq.q}</span>
                    {openIndex === i ? (
                      <Minus className="w-4 h-4 text-highlight flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-highlight flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === i && (
                    <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
