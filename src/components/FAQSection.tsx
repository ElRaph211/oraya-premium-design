import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { WHATSAPP_URL, EMAIL } from "@/config/constants";

const faqs = [
  {
    q: "Concrètement, qu'est-ce qu'Oraya fait ?",
    a: "Oraya se connecte à votre outil comptable via API, détecte vos factures en retard, envoie les relances depuis votre propre nom, analyse les réponses, adapte les séquences, et vous envoie un récap chaque lundi. Vous ne touchez à rien.",
  },
  {
    q: "Mon comptable ne gère pas déjà ça ?",
    a: "Votre comptable enregistre que la facture n'est pas payée. Il ne vous dit pas pourquoi, combien ça vous coûte par mois, ni quoi faire cette semaine. Ce n'est pas son rôle ; c'est le nôtre.",
  },
  {
    q: "J'ai déjà un logiciel de trésorerie.",
    a: "Votre logiciel vous montre ce qui rentre et ce qui sort. C'est un thermomètre. Oraya identifie pourquoi la température est élevée et la fait baisser. Si vous êtes déjà sur un outil comptable, Oraya s'y connecte directement : ce n'est pas un logiciel de plus, c'est une couche d'exécution au-dessus.",
  },
  {
    q: "Je ne veux pas brusquer mes clients.",
    a: "Ne pas relancer, c'est envoyer un message : prenez votre temps. Un cadre clair ne détruit pas la relation ; c'est le flou qui la détruit. Vos clients stratégiques sont protégés : rien ne part sans votre validation.",
  },
  {
    q: "Je peux faire ça moi-même.",
    a: "Vous pouvez identifier qui vous paie en retard. Mais avez-vous analysé chaque facture des 12 derniers mois pour chiffrer exactement combien chaque client vous coûte en cash bloqué ? Et savez-vous si le retard vient de votre process de facturation ou du client ? La plupart du temps, le problème a une composante interne. C'est difficile à voir quand on est dedans.",
  },
  {
    q: "Mes données sont-elles protégées ?",
    a: "Accord de traitement des données signé à l'activation. Connexion API sécurisée. Relances envoyées depuis votre propre domaine. Votre client voit votre entreprise, pas Oraya.",
  },
  {
    q: "C'est normal dans mon secteur.",
    a: "C'est normalisé. Ce n'est pas la même chose. Si tout le monde accepte 35 jours de retard et que vous descendez à 20, vous avez du cash disponible que vos concurrents n'ont pas. Même secteur, mêmes clients : juste un meilleur cadre.",
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
                    On peut regarder ensemble si votre situation est éligible.
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
                    href={`mailto:${EMAIL}`}
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
