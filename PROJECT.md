# Page Newsletters Les Echos

## Processus de création
1. Lecture du test
2. Intégration de la page
3. Ajout des test unitaires
4. Ajout des test E2E
5. Ajout des test d'accessibilité
6. Check lighthouse + corrections
7. Rédaction PROJECT.md

## Commandes

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

## 🧪 Tests

```bash
# Tests unitaires
npm test

# Tests unitaires en mode watch
npm run test:watch

# Tests E2E avec Playwright
npm run test:e2e
```

## Gestion des abonnements
- 3 profils utilisateur différents :
  - `USER_WITH_MULTIPLE_SUBSCRIPTION` : Utilisateur avec plusieurs abonnements
  - `USER_WITH_ONE_SUBSCRIPTION` : Utilisateur avec un seul abonnement
  - `USER_WITHOUT_SUBSCRIPTION` : Utilisateur sans abonnement
- Sélecteur d'utilisateur pour tester les différents profils
- Tests unitaires (vitest) : composants isolés.
- Tests E2E (Playwright) : parcours utilisateur.
- Tests d'accessibilité avec axe-core pour assurer un niveau RGAA AA.

## Plus tard

- Retirer le selecteur d'utilisateur en production.
- Design tokens pour les styles, plutôt qu'en dur.
- Test lighthouse automatisé.
- Vérifier l'accessibilité en réel.



