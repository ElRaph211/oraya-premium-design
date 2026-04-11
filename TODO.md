# Oraya — TODO

## Haute priorite

- [ ] **Compresser les images lourdes** via [squoosh.app](https://squoosh.app) (cible < 200 Ko chacune)
  - `image_for_a_propos.png` — 3 Mo
  - `etape_4.png` — 993 Ko
  - `etape_2.png` — 499 Ko
- [ ] **Google Search Console** — Inscrire `orayasystem.fr`, soumettre `https://orayasystem.fr/sitemap.xml`
- [ ] **Purger le cache og-image LinkedIn** — Aller sur https://www.linkedin.com/post-inspector/, coller `https://orayasystem.fr`, cliquer Inspect

## Moyenne priorite

- [ ] **Analytics (Umami)** — Installer Umami pour tracker les sources de trafic (LinkedIn, Google), les pages de sortie, le temps passe sur /offre, les clics CTA Tally
- [ ] **Formulaire contact** — Le `mailto:` ne fonctionne pas sur mobile sans client mail. Alternatives : Resend, EmailJS, ou rediriger vers Tally
- [ ] **Temoignages clients** — Ajouter 2-3 citations clients (nom + role + citation courte) — fort impact conversion
- [ ] **etape_2_1.png** — Image alternative etape 2 dans `src/assets/`. Decider si on l'integre (carrousel, toggle) ou autre usage

## Basse priorite

- [ ] **Page 404** — Ajouter lien retour home + message de marque (actuellement basique)
- [ ] **Nettoyage shadcn/ui** — ~60 composants inutilises dans `src/components/ui/` — alourdit le JS bundle
- [ ] **Alignement logo navbar** — Ajustement fin (`-mt-1`) en place, verifier visuellement et ajuster si besoin
