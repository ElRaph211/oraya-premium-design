# Oraya — Notes & instructions pour le collègue

Dernière mise à jour : 10/04/2026

---

## Ce qui a été fait (à connaître)

### Travaux techniques terminés
- Routes `/offre` et `/systeme` routées dans l'app
- SEO complet : canonical, og:image, twitter cards, JSON-LD
- Helmet avec titre unique sur chaque page
- `sitemap.xml` créé (5 URLs)
- `_headers` sécurité Cloudflare Pages (X-Frame-Options, etc.)
- `_redirects` pour le SPA routing Cloudflare (évite les 404 sur navigation directe)
- Toutes les constantes centralisées dans `src/config/constants.ts`
- Validation Zod + react-hook-form sur le formulaire contact
- Google Fonts auto-hébergé dans `public/fonts/` (plus de requête Google)
- TypeScript `strict: true`
- Photo Raphaël compressée (1 Mo → 34 Ko) ✅
- Favicons HD ✅
- `StatsSection` + `WhyOrayaSection` ajoutées ✅
- Nouveau favicon (`new_Favicons.png`) en place
- Logo footer remplacé par `bottom_image.png`
- Logo navbar doublé en taille
- Titre SEO : "Oraya | Diagnostic retards de paiement PME - Récupérez votre cash en 10 jours"
- Fix SEO "0 words / no H1" : bloc `<noscript>` avec contenu statique dans `index.html`
- **`og-image.png`** en place dans `public/` ✅ (OG_image_PNG.png déplacé)
- **`ProcessSteps`** rendu interactif : chaque étape est cliquable et affiche son image ✅
  - Images : `etape_1.png` à `etape_5.png` dans `src/assets/`
  - `etape_2_1.png` également dans `src/assets/` (image alternative étape 2 — non utilisée pour l'instant)
  - Image active s'anime à chaque changement d'étape

---

## ⚠️ Point d'attention — etape_4.png

`etape_4.png` pèse **992 Ko** — c'est lourd pour une image web. À compresser avant le déploiement final.

**Outil recommandé :** [squoosh.app](https://squoosh.app)
- Ouvrir `src/assets/etape_4.png`
- Format : WebP ou PNG optimisé
- Cible : < 200 Ko sans perte de qualité visible
- Remplacer le fichier dans `src/assets/`

---

## Ce qui reste à faire

### a faire la mano

| Tâche | Détail |
|-------|--------|
| **Compression etape_4.png** | 992 Ko → cible < 200 Ko. Voir ci-dessus |
| **Google Search Console** | Inscrire `orayasystem.fr`, soumettre `https://orayasystem.fr/sitemap.xml` |
| **Témoignages clients** | Ajouter 2-3 citations clients — fort impact conversion. Format : nom + rôle + citation courte |
en gros | on prends Umami pour savoir d'où viennent tes visiteurs (LinkedIn ? Google ?), quelle page ils quittent sans cliquer sur le CTA Tally, combien de temps ils restent sur la page Offre. on veut les chiffre Mason! ref a black ops

### Priorité moyenne

| Tâche | Détail |
|-------|--------|
| **Formulaire contact → vrai envoi email** | Le formulaire ouvre le client mail (`mailto:`). Sur mobile sans client mail configuré, ça casse. Alternatives : Resend, EmailJS, ou rediriger vers Tally |
| **Analytics** | Plausible (~9€/mois, RGPD-friendly, pas de bandeau cookie) ou Umami (gratuit, auto-hébergé) |

| **etape_2_1.png** | Image alternative pour l'étape 2 (Cadrage) dans `src/assets/`. Décider si on l'intègre dans le ProcessSteps (carrousel ? toggle ?) ou si on la garde pour un autre usage |

### Priorité basse

| Tâche | Détail |
|-------|--------|
| **Page 404** | Basique. Ajouter lien retour home + message de marque |
| **Nettoyage shadcn/ui** | ~60 composants inutilisés dans `src/components/ui/` — alourdit le JS bundle |

---

## Notes techniques importantes


### Cloudflare Pages — points d'attention
- `public/_headers` → headers de sécurité (lus automatiquement par Cloudflare)
- `public/_redirects` → SPA fallback (toutes URLs → `index.html`) → **ne pas supprimer**
- `public/sitemap.xml` → accessible sur `https://orayasystem.fr/sitemap.xml`
- `public/og-image.png` → image de partage LinkedIn/WhatsApp/Twitter
- Pas de `bun.lockb` dans le repo → Cloudflare utilise npm (voulu)

### Constantes centralisées
Toutes les URLs et infos de contact sont dans `src/config/constants.ts`.
**Ne jamais écrire ces valeurs en dur dans les composants** :
```ts
import { EMAIL, WHATSAPP_URL, TALLY_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/config/constants";
```

---


