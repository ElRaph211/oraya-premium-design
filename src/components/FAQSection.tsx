import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WHATSAPP_URL = "https://wa.me/33778958554";

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
    <section id="faq" className="section-padding">
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
              <div className="mt-8 rounded-2xl overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(213 70% 19%) 0%, hsl(214 80% 45%) 100%)" }}>
                <div className="p-6 text-white">
                  <p className="font-semibold text-lg mb-1">Besoin d'un renseignement ?</p>
                  <p className="font-semibold text-lg mb-3">Discutez avec Raphaël sur Whatsapp.</p>
                  <p className="text-sm opacity-70 mb-6">
                    Découvrez comment nous pouvons vous aider à récupérer votre trésorerie bloquée.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-white/90 hover:bg-white text-foreground rounded-xl py-3.5 px-4 text-sm font-semibold transition-colors"
                  >
                    <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Envoyer un message à Raphaël
                  </a>
                  <a
                    href="mailto:raphael@orayasystem.fr"
                    className="block text-center text-sm text-white/80 hover:text-white underline mt-4 transition-colors"
                  >
                    ou envoyer un email
                  </a>
                </div>
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
