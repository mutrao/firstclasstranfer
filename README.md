# First Class Transfer Abidjan

Service premium de transfert aéroport à Abidjan, Côte d'Ivoire.

## Description

Site web vitrine et de réservation en ligne pour **First Class Transfer Abidjan** — transferts vers l'Aéroport International Félix-Houphouët-Boigny (ABJ).

- Réservation en ligne en 4 étapes
- Paiement sécurisé (Orange Money, Wave, MTN MoMo, Carte bancaire)
- Suivi chauffeur via WhatsApp le jour du transfert
- Thème luxury dark navy + gold, entièrement responsive

## Structure du projet

```
firstclasstranfer/
├── index.html              # Landing page principale
├── booking.html            # Page de réservation multi-étapes
├── confirmation.html       # Page de confirmation post-paiement
├── assets/
│   ├── css/
│   │   └── style.css       # Styles principaux (CSS variables, glassmorphism)
│   └── js/
│       ├── main.js         # JS landing page (navbar, animations, FAQ)
│       └── booking.js      # JS réservation (étapes, calcul prix, validation)
├── social-media-strategy.md
├── .github/
│   └── workflows/
│       └── deploy.yml      # Déploiement GitHub Pages
└── README.md
```

## Installation & Lancement local

Aucune dépendance npm requise. Le site utilise du HTML/CSS/JS vanilla.

```bash
# Cloner le dépôt
git clone https://github.com/VOTRE-USERNAME/firstclasstranfer.git
cd firstclasstranfer

# Ouvrir dans le navigateur (option 1 - directement)
open index.html

# Ouvrir avec un serveur local (option 2 - recommandé)
# Python
python3 -m http.server 8080
# Node.js
npx serve .
```

Puis ouvrir [http://localhost:8080](http://localhost:8080).

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` déploie automatiquement le site sur GitHub Pages à chaque push sur `main`.

### Activation

1. Aller dans **Settings → Pages** du dépôt GitHub
2. Choisir **Source : GitHub Actions**
3. Pusher sur `main` → le site se déploie automatiquement

URL finale : `https://VOTRE-USERNAME.github.io/firstclasstranfer/`

## Personnalisation

### Numéro WhatsApp

Remplacer `2250700000000` par le vrai numéro dans :
- `index.html` (liens WhatsApp, `data-whatsapp`, footer)
- `booking.html` (liens WhatsApp)
- `confirmation.html` (constante `WA_NUMBER`)
- `assets/js/main.js` (constante `WA_NUMBER`)
- `assets/js/booking.js` (constante `WA_NUMBER`)

### Email de contact

Remplacer `contact@firstclasstransfer.ci` par le vrai email dans `index.html`.

### Tarifs

Les tarifs sont centralisés dans l'objet `PRICING` de `assets/js/booking.js` et `assets/js/main.js`.

### Couleurs

Les variables CSS dans `assets/css/style.css` :
```css
--navy: #0a0f1e;
--gold: #c9a84c;
```

## Technologies utilisées

- HTML5 sémantique
- CSS3 (variables, glassmorphism, grid, flexbox, animations)
- JavaScript ES6+ vanilla (aucun framework)
- Google Fonts (Inter, Playfair Display)
- Font Awesome 6 (icônes)
- GitHub Actions (CI/CD)

## Intégration paiement

Les boutons de paiement sont actuellement en mode UI. Pour activer les paiements réels :

- **CinetPay** : [docs.cinetpay.com](https://docs.cinetpay.com) — intégration JavaScript disponible
- **Orange Money CI** : API Orange Money Côte d'Ivoire
- **Wave** : API Wave CI

## Licence

Propriétaire — First Class Transfer Abidjan © 2025
