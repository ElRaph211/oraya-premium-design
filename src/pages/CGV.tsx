import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CGV = () => (
  <>
    <Helmet>
      <title>Conditions Générales de Vente — Oraya</title>
      <meta name="description" content="Conditions Générales de Vente d'Oraya — Diagnostic retards de paiement pour PME B2B." />
    </Helmet>
    <Navbar />
    <main className="section-padding">
      <div className="section-container max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente — Oraya</h1>

        <div className="space-y-8 text-sm text-foreground/80 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-primary mb-3">Préambule</h2>
            <p>
              Les présentes Conditions Générales de Vente s'appliquent à l'ensemble des prestations réalisées par Oraya (Raphaël Aubry, Entrepreneur Individuel, SIRET : 1024 569 510 0015) pour ses clients professionnels. Oraya opère exclusivement en B2B. Toute commande implique l'acceptation pleine et entière des présentes CGV.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">1. Prestations</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">1.1 — Nature du service</span> Oraya est un service de diagnostic du cycle d'encaissement pour PME B2B. Oraya n'est pas un logiciel, un cabinet de recouvrement, ni un service de conseil continu.</p>
              <p><span className="font-semibold">1.2 — Démarrage de la mission</span> La mission démarre dès réception du paiement intégral et de l'ensemble des éléments demandés via le formulaire d'onboarding (exports comptables, CGV client).</p>
              <p><span className="font-semibold">1.3 — Délai de livraison</span> Oraya s'engage à livrer le diagnostic dans un délai de 10 jours ouvrés à compter de la réception de l'ensemble des éléments nécessaires à l'analyse.</p>
              <p><span className="font-semibold">1.4 — Retard de transmission client</span> Si le client tarde à transmettre les éléments nécessaires, le délai de 10 jours est décalé d'autant. Le paiement reste dû dans sa totalité.</p>
              <p><span className="font-semibold">1.5 — Validation des livrables</span> Le client dispose de 5 jours ouvrés après livraison pour formuler ses observations. Passé ce délai, les livrables sont considérés comme acceptés.</p>
              <p><span className="font-semibold">1.6 — Inactivité client</span> Si le client ne transmet pas les éléments requis dans les 15 jours suivant le paiement malgré relance, la mission peut être clôturée. Le paiement est conservé sous forme de crédit sans date d'expiration. Aucun remboursement ne sera effectué.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">2. Tarifs et paiement</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">2.1 — Tarifs</span> Les tarifs applicables sont ceux affichés sur orayasystem.fr au moment de la commande. Tous les prix sont indiqués TTC. TVA non applicable — article 293B du CGI.</p>
              <p><span className="font-semibold">2.2 — Paiement</span> Le paiement intégral est exigé avant le démarrage de la mission. Les paiements sont effectués via Stripe — plateforme sécurisée. Aucune mission ne démarre avant confirmation du paiement.</p>
              <p><span className="font-semibold">2.3 — Facturation</span> Une facture est émise dans les 48h suivant la réception du paiement.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">3. Annulation et remboursement</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">3.1 — Avant démarrage</span> Si le client souhaite annuler avant transmission des éléments d'onboarding, un remboursement intégral est accordé sous 5 jours ouvrés.</p>
              <p><span className="font-semibold">3.2 — Après démarrage</span> Dès lors que les éléments ont été transmis et que l'analyse a démarré, aucun remboursement ne peut être accordé en raison de la nature personnalisée et non reproductible de la prestation.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">4. Garantie</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">4.1 — Garantie délai</span> Si la livraison dépasse J+10 ouvrés pour une raison imputable à Oraya (hors retard de transmission client), Oraya s'engage à corriger la situation sans frais supplémentaires.</p>
              <p><span className="font-semibold">4.2 — Garantie de correction factuelle</span> Toute erreur factuelle signalée dans les 48h suivant la livraison est corrigée sans frais et sans discussion. Au-delà de ce délai, chaque situation est traitée directement et à l'amiable.</p>
              <p><span className="font-semibold">4.3 — Limites de la garantie</span> La garantie porte exclusivement sur la rigueur méthodologique et la complétude du diagnostic. Elle ne couvre pas les résultats opérationnels ou financiers obtenus par le client à la suite de la mission. Oraya réalise un diagnostic ; il appartient au client de décider des actions à mettre en œuvre. La garantie est exclue en cas de données inexactes, incomplètes ou non conformes transmises par le client.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">5. Contestations et litiges de paiement</h2>
            <p className="mb-3">
              Le client s'engage à contacter Oraya avant d'initier toute contestation de paiement auprès de sa banque ou de Stripe.
            </p>
            <p className="mb-3">
              En cas de chargeback initié sans contact préalable : la mission est immédiatement suspendue, les livrables sont retenus jusqu'à résolution, et Oraya se réserve le droit de contester la demande.
            </p>
            <p>
              Toute contestation frauduleuse entraîne un refus définitif de toute prestation future.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">6. Obligations des parties</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">6.1 — Obligations d'Oraya</span> Oraya s'engage à réaliser la mission avec rigueur et dans les délais convenus, à traiter les données du client avec stricte confidentialité, à supprimer les fichiers transmis après livraison, et à assurer la complétude des livrables conformément au pack souscrit.</p>
              <p><span className="font-semibold">6.2 — Obligations du client</span> Le client s'engage à transmettre des données exactes, complètes et dans les formats requis, à compléter le formulaire d'onboarding dans les 48h suivant le paiement, à maintenir une communication professionnelle et respectueuse, et à s'assurer qu'il dispose des droits légaux sur les données transmises.</p>
              <p><span className="font-semibold">6.3 — Communication</span> Tout comportement irrespectueux ou abusif entraîne la résiliation immédiate de la mission sans remboursement.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">7. Propriété intellectuelle</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">7.1 — Livrables</span> Les livrables produits dans le cadre de la mission deviennent la propriété exclusive du client dès règlement intégral de la prestation.</p>
              <p><span className="font-semibold">7.2 — Données client</span> Les données transmises par le client (exports comptables, CGV, informations commerciales) restent sa propriété exclusive. Oraya s'interdit tout usage de ces données à d'autres fins que la réalisation de la mission.</p>
              <p><span className="font-semibold">7.3 — Méthodologie</span> Les méthodologies, frameworks et outils d'analyse développés par Oraya restent sa propriété exclusive et ne peuvent être reproduits sans autorisation écrite.</p>
              <p><span className="font-semibold">7.4 — Portfolio</span> Oraya se réserve le droit de mentionner la mission à des fins commerciales (type de client, secteur, résultats anonymisés) sauf demande écrite contraire du client. Aucune donnée identifiable ne sera communiquée sans accord explicite.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">8. Confidentialité</h2>
            <p>
              L'ensemble des informations échangées dans le cadre d'une mission Oraya est strictement confidentiel. Elles ne seront jamais transmises à des tiers sans accord préalable du client, sauf obligation légale. Les analystes mandatés par Oraya sont soumis aux mêmes obligations de confidentialité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">9. Responsabilité</h2>
            <div className="space-y-3">
              <p><span className="font-semibold">9.1 — Limitation</span> Oraya est responsable de la qualité et de la rigueur de son analyse. Oraya ne saurait être tenu responsable des décisions prises par le client sur la base des livrables fournis, ni des résultats commerciaux ou financiers obtenus. La responsabilité d'Oraya est limitée au montant de la prestation concernée.</p>
              <p><span className="font-semibold">9.2 — Données inexactes</span> Oraya ne saurait être tenu responsable d'erreurs résultant de données inexactes, incomplètes ou non conformes transmises par le client.</p>
              <p><span className="font-semibold">9.3 — Force majeure</span> Oraya ne saurait être tenu responsable de tout retard ou inexécution causé par un événement indépendant de sa volonté (force majeure, défaillance technique d'un tiers, etc.).</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">10. Résolution des litiges</h2>
            <p className="mb-3">
              En cas de différend, les parties s'engagent à rechercher une solution amiable dans un délai de 30 jours. À défaut d'accord, le litige sera soumis au tribunal compétent du lieu du siège d'Oraya — droit français applicable.
            </p>
            <p>
              Oraya opérant exclusivement en B2B, les dispositions relatives à la médiation de la consommation ne sont pas applicables.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">11. Modification des CGV</h2>
            <p>
              Oraya se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur au moment de la commande. Toute mise à jour sera publiée sur orayasystem.fr.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-primary mb-3">12. Entrée en vigueur</h2>
            <p>
              Les présentes CGV prennent effet dès le paiement de la prestation par le client.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CGV;
