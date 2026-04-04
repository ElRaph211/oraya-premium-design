import { ShieldCheck } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const GuaranteeSection = () => (
  <section className="section-padding">
    <div className="section-container max-w-2xl">
      <ScrollReveal>
        <div className="rounded-2xl border border-border bg-background p-8 md:p-10 shadow-sm relative overflow-hidden">
          {/* Blue left border accent */}
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
);

export default GuaranteeSection;
