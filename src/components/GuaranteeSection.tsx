import ScrollReveal from "./ScrollReveal";

const GuaranteeSection = () => (
  <section className="section-padding">
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
);

export default GuaranteeSection;
