# Brasserie Artisanale de Rodemack 🍻

Site vitrine interactif développé en **React.js** avec **TailwindCSS** et **Redux** pour le panier.

---

## Fonctionnalités

- **Accueil** : présentation de la brasserie suivant API.
- **Catalogue** : affichage des produits, modal détails, ajout au panier, suivant API.
- **Filtres** : recherche par nom, degré d’alcool, amertume… Panneau réductible et réinitialisation possible.
- **Panier** : ajout/suppression de produits et total calculé via Redux.
- **Contact** : formulaire fonctionnel (alert + console).
- **Pages légales** : Mentions légales, Conditions d’utilisation, Politique de confidentialité.
- **Responsive** : mobile, tablette et desktop.

---

## Installation

```bash
git clone <URL_DU_DEPOT>
cd brasserie-rodemack
npm install
npm run dev
```

Ouvrir le site : http://localhost:5173

## Structure

```bash
src/
├─ components/   # Pages et UI (Catalog, Home, Cart, Contact, Filter, Modal, Mentions, Conditions, Privacy)
├─ contexts/     # ListProvider (panier test)
├─ redux/        # Store et slices Redux (cartSlice)
└─ App.jsx
```

## Déploiement

```bash
npm run build
```

Déployer le dossier dist/ sur votre serveur web.

