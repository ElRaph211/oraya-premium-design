# Oraya — Notes & instructions pour le collègue

Dernière mise à jour : 08/04/2026

---

## Ce qui a été fait (à connaître)

### Travaux techniques terminés
- Routes `/offre` et `/systeme` routées dans l'app
- SEO complet : canonical, og:image placeholder, twitter cards, JSON-LD
- Helmet avec titre unique sur chaque page
- `sitemap.xml` créé (5 URLs)
- `_headers` sécurité Cloudflare Pages (X-Frame-Options, etc.)
- `_redirects` pour le SPA routing Cloudflare (évite les 404 sur navigation directe)
- Toutes les constantes centralisées dans `src/config/constants.ts`
- Validation Zod + react-hook-form sur le formulaire contact
- Google Fonts auto-hébergé dans `public/fonts/` (plus de requête Google)
- TypeScript `strict: true`
- Photo Raphaël compressée (1 Mo → 34 Ko) ✅ fait via Lovable
- Favicons HD ✅ fait via Lovable
- `StatsSection` + `WhyOrayaSection` ajoutées ✅ fait via Lovable
- Nouveau favicon (`new_Favicons.png`) en place
- Logo footer remplacé par `bottom_image.png`
- Logo navbar doublé en taille
- Titre SEO mis à jour : "Oraya | Diagnostic retards de paiement PME - Récupérez votre cash en 10 jours"
- Fix SEO "0 words / no H1" : bloc `<noscript>` avec contenu statique ajouté dans `index.html`

---

## 🎯 TÂCHE PRIORITAIRE POUR LE COLLÈGUE — og-image.png

### C'est quoi ?
L'image qui s'affiche quand on partage le lien `orayasystem.fr` sur LinkedIn, WhatsApp, Twitter, iMessage. Sans elle, le partage du lien affiche un aperçu vide ou moche.

### Ce qu'il faut créer
- **Format :** PNG
- **Dimensions :** 1200 × 630 pixels (obligatoire — c'est le standard OpenGraph)
- **Nom du fichier :** `og-image.png`
- **Où le mettre :** dossier `public/` à la racine du projet

### Contenu suggéré pour l'image
```
Fond : bleu marine (couleur primary du site, #1a2e4a ou similaire)
Logo Oraya centré ou en haut à gauche
Texte principal : "Récupérez votre cash bloqué en 10 jours"
Sous-texte : "Diagnostic retards de paiement pour PME B2B"
Éventuellement : badge "Prix fixe 2 500€ · Garanti 2x ou gratuit"
```

### Comment la créer (outil recommandé)
1. Aller sur **https://canva.com**
2. Nouveau design → "Dimensions personnalisées" → 1200 × 630 px
3. Créer le visuel avec les éléments ci-dessus
4. Exporter en PNG
5. Renommer le fichier `og-image.png`
6. Le placer dans le dossier `public/` du projet
7. Commiter et pusher

### Pourquoi c'est important
Le lien `<meta property="og:image" content="/og-image.png" />` est déjà dans le code.
Le fichier est juste absent. Dès qu'il sera mis en place, tous les partages du lien afficheront l'image automatiquement.

---

## Ce qui reste à faire (autres tâches)

### À faire dans le code

| Priorité | Tâche | Détail |
|----------|-------|--------|
| Haute | **og-image.png** | Voir section ci-dessus |
| Haute | **Google Search Console** | Inscrire `orayasystem.fr`, soumettre `https://orayasystem.fr/sitemap.xml` |
| Moyenne | **Analytics** | Installer Plausible (RGPD-friendly, ~9€/mois, pas de bandeau cookie) ou Umami (gratuit) |
| Moyenne | **Formulaire contact → vrai envoi d'email** | Le formulaire actuel ouvre le client mail (`mailto:`). Sur mobile sans client mail configuré, ça ne fonctionne pas. Alternatives : Resend, EmailJS, ou rediriger vers Tally |
| Basse | **Nettoyage composants shadcn/ui** | ~60 composants inutilisés dans `src/components/ui/` — alourdit le JS bundle |
| Basse | **Tests** | Infrastructure Vitest + Playwright en place, 0 test réel écrit |

### À faire sur Lovable

| Tâche | Détail |
|-------|--------|
| **Témoignages clients** | Ajouter une section avec 2-3 citations clients — fort impact sur la conversion. Format : nom + rôle + citation courte |
| **Page 404** | La page NotFound existe mais est basique. Ajouter un lien retour home et un message de marque |
| **Navigation** | Les liens "Système" et "Offre" dans la navbar pointent vers des ancres (`/#systeme`, `/#offre`). Décider si on préfère pointer vers les pages dédiées `/systeme` et `/offre` |

---

## Notes techniques importantes

### SEO — comprendre le problème "0 words / no H1"
Le site est une **SPA React** (Single Page Application). Le HTML servi par le serveur contient juste `<div id="root"></div>` vide. Le contenu (H1, textes) s'affiche uniquement après exécution du JavaScript.

**Résultat :** les outils SEO basiques qui n'exécutent pas JS voient une page vide.

**Ce qui a été fait :** ajout d'un bloc `<noscript>` dans `index.html` avec H1 et textes clés — visible pour les crawlers sans JS.

**Ce qui reste :** Google lui-même exécute JavaScript et voit bien le contenu. Les autres moteurs (Bing, DuckDuckGo) aussi. Les outils de test SEO en ligne (Seobility, etc.) parfois non — c'est une limitation de l'architecture SPA, pas un bug.

**La vraie solution** si le SEO devient critique : passer à du prérendu (SSR ou SSG). C'est un chantier plus lourd, à envisager si le trafic organique devient un canal important.

### Cloudflare Pages — points d'attention
- `public/_headers` → headers de sécurité (automatiquement lus par Cloudflare)
- `public/_redirects` → SPA fallback (toutes les URLs → `index.html`) → **ne pas supprimer**
- `public/sitemap.xml` → accessible sur `https://orayasystem.fr/sitemap.xml`
- Pas de `bun.lockb` dans le repo → Cloudflare utilise npm (c'est voulu)

### Constantes centralisées
Toutes les URLs et infos de contact sont dans `src/config/constants.ts`.
**Ne jamais écrire ces valeurs en dur dans les composants**, toujours importer depuis ce fichier :
```ts
import { EMAIL, WHATSAPP_URL, TALLY_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/config/constants";
```

---

## Commandes utiles

```bash
npm run dev        # Lancer en local (port 8080)
npm run build      # Build de production
npm run preview    # Tester le build → ouvrir http://localhost:4173/
git add -A && git commit -m "..." && git push  # Pusher sur Cloudflare
```
