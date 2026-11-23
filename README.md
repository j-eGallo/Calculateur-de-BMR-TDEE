# 🏋️ BMR & TDEE Calculator

Application web développée avec **React et TypeScript**, permettant d'estimer les besoins caloriques quotidiens d'un utilisateur en fonction de ses caractéristiques physiques et de son niveau d'activité.

## 🚀 Fonctionnalités

- Calcul du métabolisme de base (BMR).
- Calcul de la dépense énergétique journalière totale (TDEE).
- Prise en compte du sexe, de l'âge, du poids et de la taille.
- Sélection du niveau d'activité physique.
- Affichage des résultats en calories par jour.

## 🛠️ Technologies utilisées

- **React** — Interface utilisateur et gestion des états.
- **TypeScript** — Typage des données et des fonctions.
- **CSS** — Mise en forme de l'interface.
- **Vite** — Environnement de développement et compilation.

## 📐 Méthodes de calcul

### Métabolisme de base (BMR)

Le BMR correspond à une estimation de l'énergie dépensée quotidiennement par l'organisme au repos.

L'application utilise la formule de **Mifflin-St Jeor**.

**Homme :**

```text
BMR = (10 × poids) + (6.25 × taille) - (5 × âge) + 5
```

**Femme :**

```text
BMR = (10 × poids) + (6.25 × taille) - (5 × âge) - 161
```

Le poids est exprimé en kilogrammes et la taille en centimètres.

### Dépense énergétique totale (TDEE)

Le TDEE estime les dépenses énergétiques quotidiennes en tenant compte du niveau d'activité physique.

```text
TDEE = BMR × facteur d'activité
```

| Niveau d'activité | Coefficient |
|---|---|
| Sédentaire | 1.2 |
| Léger | 1.375 |
| Modéré | 1.55 |
| Intense | 1.725 |

Ces résultats constituent des estimations et non des mesures exactes des besoins énergétiques individuels.

## 🏗️ Architecture du projet

Le projet sépare les composants React de la logique métier afin de faciliter la lisibilité, la maintenance et la réutilisation du code.

```text
src/
├── components/
│   ├── Home.tsx
│   └── home.css
├── utils/
│   ├── calculateBmr.ts
│   └── calculateTdee.ts
├── App.tsx
└── main.tsx
```

**Home.tsx**

Gère le formulaire, les interactions utilisateur, les états React et l'affichage des résultats. Il appelle les fonctions de calcul.

**calculateBmr.ts**

Contient la fonction de calcul du métabolisme de base.

**calculateTdee.ts**

Contient la fonction de calcul de la dépense énergétique totale à partir du BMR et du niveau d'activité.

Les deux fonctions de calcul sont indépendantes des composants React et peuvent être testées et réutilisées séparément.

## 💻 Installation

Cloner le dépôt :

```bash
git clone URL_DU_REPOSITORY
```

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

## 🎯 Objectifs du projet

Ce projet a été réalisé pour mettre en pratique plusieurs compétences :

- Utilisation des hooks React, notamment `useState`.
- Gestion des formulaires et des événements.
- Typage des données avec TypeScript.
- Manipulation de fonctions et de paramètres.
- Séparation de la logique métier et de l'interface utilisateur.
- Organisation d'une application React en composants et fonctions utilitaires.

## 🔧 Améliorations envisagées

- Validation renforcée des données saisies.
- Arrondi et présentation améliorée des résultats.
- Calcul des macronutriments (protéines, glucides, lipides).
- Ajout de tests unitaires pour les fonctions de calcul.
- Amélioration de l'ergonomie et du responsive design.

## 📄 Licence

Projet personnel réalisé dans le cadre de ma pratique du développement web.
