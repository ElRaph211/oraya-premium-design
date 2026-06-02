# Contexte projet · Oraya
> Colle ce fichier en entier au début d'une conversation Claude Code pour donner le contexte complet du projet.

---

## L'entreprise

**Oraya** est un service de diagnostic des retards de paiement pour les dirigeants de **PME B2B françaises**.

**Fondateur :** Raphaël Aubry
**Site :** https://orayasystem.fr
**Email :** raphael@orayasystem.fr
**WhatsApp :** 07.78.95.85.54 (https://wa.me/33778958554)
**LinkedIn :** https://www.linkedin.com/in/raphaelaubry03
**Instagram :** https://www.instagram.com/raphaelaubry_/
**Adresse :** 128 Rue La Boétie, 75008 Paris

---

## Le problème adressé

86 % des entreprises françaises sont touchées par les retards de paiement. 15 milliards d'euros de cash bloqué chaque année. Les dirigeants de PME B2B financent l'activité de leurs clients avec leur propre trésorerie sans savoir combien, pourquoi, ni quoi faire.

**Positionnement :** Oraya n'est pas un logiciel, pas un consultant généraliste. C'est une **méthode chirurgicale** dédiée à un seul problème.

---

## L'offre · Oraya Precision

**Prix fixe : 2 500 € TTC**
**Délai : 10 jours**
**Garantie : 2x le coût du diagnostic en cash récupérable identifié · sinon on recommence gratuitement**

### Ce qui est inclus

- 12 mois de facturation analysés facture par facture (pas une estimation globale)
- Scoring client par niveau de risque · qui vous coûte combien et pourquoi
- Priorisation par impact financier · quoi faire cette semaine
- Scripts de relance personnalisés copier-coller pour chaque situation
- Kit de cadrage : modèle CGV + acompte + pénalités de retard
- 2 appels : cadrage 20 min + restitution 30 min
- Point de suivi à J+30
- Encaissements prévisionnels à J+30 / J+60 / J+90
- Tableau de bord synthétique

### Les 5 étapes du process

1. **Éligibilité (Jour 0)** · 2 minutes de questions
2. **Cadrage (Jour 1)** · appel 20 min + export des factures
3. **Analyse (Jours 2-9)** · on analyse chaque facture, le client n'a rien à faire
4. **Restitution (Jour 10)** · diagnostic complet + appel 30 min
5. **Suivi (J+30)** · point de contrôle pour mesurer les résultats

---

## Le système Oraya (6 piliers)

1. **Cartographie complète** · chaque facture analysée individuellement
2. **Scoring client** · score de risque basé sur l'historique de paiement
3. **Priorisation par impact** · actions classées par impact financier décroissant
4. **Scripts de relance** · prêts à envoyer, adaptés au profil client
5. **Cadre préventif** · CGV, process de facturation, calendrier de relance
6. **Recommandations stratégiques** · renégociation des conditions, segmentation client

---

## La stack technique

| Élément | Valeur |
|---|---|
| Framework | React 18 + Vite 5 + TypeScript (strict) |
| Routing | React Router v6 (BrowserRouter, SPA) |
| Styling | Tailwind CSS + design tokens custom |
| SEO | react-helmet-async (par page) |
| Formulaires | react-hook-form + zod |
| Hébergement | Cloudflare Pages |
| Polices | Montserrat auto-hébergé (WOFF2, RGPD) |
| Analytics | Umami (placeholder prêt, clé à activer) |
| Repo | https://github.com/ElRaph211/oraya-premium-design |

---

## Structure des fichiers clés

```
src/
├── config/
│   └── constants.ts          ← TOUTES les URLs et contacts centralisés ici
├── pages/
│   ├── Index.tsx             ← page d'accueil (/)
│   ├── Contact.tsx           ← formulaire contact (mailto + Web3Forms placeholder)
│   ├── Offre.tsx             ← page /offre (dédiée)
│   ├── Systeme.tsx           ← page /systeme (dédiée)
│   ├── MentionsLegales.tsx
│   ├── CGV.tsx
│   └── NotFound.tsx          ← 404 avec logo + liens
├── components/
│   ├── Navbar.tsx            ← logo responsive (h-44 mobile, h-72 desktop)
│   ├── Footer.tsx            ← logo bottom_image.png
│   ├── Hero.tsx              ← titre principal + CTA Tally
│   ├── ProcessSteps.tsx      ← 5 étapes interactives + images
│   ├── OffreSection.tsx      ← détail de l'offre Precision
│   ├── SystemeSection.tsx    ← les 6 piliers
│   ├── AboutSection.tsx      ← photo Raphaël + texte
│   ├── FAQSection.tsx        ← 7 questions/réponses
│   ├── FinalCTA.tsx          ← CTA de fin de page
│   └── Calculator.tsx        ← calculateur de cash bloqué
└── assets/
    ├── logo-oraya.png        ← logo principal (navbar + 404)
    ├── bottom_image.png      ← logo footer
    ├── image_for_a_propos.png ← photo section À propos (3 Mo · À COMPRESSER)
    ├── etape_1.png à etape_5.png ← images ProcessSteps
    ├── etape_2_1.png         ← image alternative étape 2 (dot navigation)
    └── etape_4.png           ← 993 Ko · À COMPRESSER via squoosh.app

public/
    ├── og-image.png          ← image de partage LinkedIn/WhatsApp (1200×630)
    ├── favicon.ico           ← favicon principal (Google, onglet)
    ├── favicon-32x32.png
    ├── favicon-16x16.png
    ├── apple-touch-icon.png
    ├── sitemap.xml           ← 5 URLs
    ├── _headers              ← headers sécurité Cloudflare
    ├── _redirects            ← SPA fallback (NE PAS SUPPRIMER)
    └── fonts/                ← Montserrat WOFF2 auto-hébergé
```

---

## Pages et routes

| Route | Composant | Contenu |
|---|---|---|
| `/` | Index.tsx | Hero, ProblemsSection, StatsSection, WhyOrayaSection, ComparisonSection, SystemeSection, Calculator, ProcessSteps, OffreSection, AboutSection, FAQSection, FinalCTA |
| `/offre` | Offre.tsx | OffreSection + FAQSection + FinalCTA |
| `/systeme` | Systeme.tsx | SystemeSection + FAQSection + FinalCTA |
| `/contact` | Contact.tsx | Formulaire mailto + coordonnées |
| `/mentions-legales` | MentionsLegales.tsx | |
| `/cgv` | CGV.tsx | |
| `*` | NotFound.tsx | 404 avec logo Oraya |

---

## Constantes · NE JAMAIS hardcoder, toujours importer

```ts
// src/config/constants.ts
export const EMAIL = "raphael@orayasystem.fr";
export const WHATSAPP_URL = "https://wa.me/33778958554";
export const TALLY_URL = "https://tally.so/r/gD4dOM";   // formulaire éligibilité
export const LINKEDIN_URL = "https://www.linkedin.com/in/raphaelaubry03";
export const INSTAGRAM_URL = "https://www.instagram.com/raphaelaubry_/";
export const SITE_URL = "https://orayasystem.fr";
```

---

## Ce qui reste à faire (TODO)

### À faire dans le code
- [ ] **Activer Umami** : décommenter le script dans `index.html`, remplacer `VOTRE_WEBSITE_ID` (compte à créer sur cloud.umami.is)
- [ ] **Formulaire contact** : activer Web3Forms · aller sur web3forms.com, entrer raphael@orayasystem.fr, obtenir la clé, remplacer `VOTRE_CLE_WEB3FORMS` dans `src/pages/Contact.tsx` ligne 14
- [ ] **Compresser les images lourdes** via squoosh.app :
  - `src/assets/image_for_a_propos.png` · 3 Mo → cible < 200 Ko
  - `src/assets/etape_4.png` · 993 Ko → cible < 200 Ko
  - `src/assets/etape_2.png` · 499 Ko → cible < 200 Ko

### À faire manuellement
- [ ] **Google Search Console** : inscrire orayasystem.fr, soumettre https://orayasystem.fr/sitemap.xml
- [ ] **Témoignages clients** : préparer 2-3 citations (nom + rôle + citation courte) pour les intégrer

---

## Points d'attention Cloudflare Pages

- Build command : `npm run build` · output : `dist/`
- `public/_redirects` → SPA fallback indispensable, ne pas supprimer
- `public/_headers` → headers de sécurité automatiquement lus
- Pas de bun.lockb dans le repo (Cloudflare utilise npm via package-lock.json)
- og:image en URL absolue : `https://orayasystem.fr/og-image.png`
- Après déploiement, purger le cache LinkedIn : https://www.linkedin.com/post-inspector/

---

## Commandes utiles

```bash
npm run dev        # Dev local (port 8080)
npm run build      # Build prod (toujours vérifier avant de push)
npm run preview    # Tester le build → http://localhost:4173/
git add -A && git commit -m "..." && git push
```
