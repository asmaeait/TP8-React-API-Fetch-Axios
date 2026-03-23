# TP8 — React : Consommer une API avec Fetch et Axios

---

## Objectifs

- Comprendre la difference entre fetch() et axios
- Charger des donnees depuis une API externe
- Gerer le chargement et les erreurs
- Afficher des listes dynamiques

---

## Installation

```bash
npm install
npm start
```

---

## Composants

### FetchData
Recupere des articles depuis jsonplaceholder avec fetch(). Permet de choisir entre 5 ou 10 articles avec des boutons. Affiche le titre et le numero de chaque article.

### AxiosData
Recupere des utilisateurs depuis jsonplaceholder avec Axios. Affiche le nom, l'email et la ville de chaque utilisateur. Inclut une barre de recherche pour filtrer par nom en temps reel.

---

## Difference fetch() vs Axios

| | fetch() | Axios |
|---|---|---|
| Installation | Integre au navigateur | npm install axios |
| Syntaxe | Plus verbose | Plus simple |
| Reponse | response.json() | response.data |
| Erreurs | Verification manuelle | Automatique |

---

## Captures d'ecran

### Articles avec fetch() et Utilisateurs avec Axios
<img width="1683" height="860" alt="image" src="https://github.com/user-attachments/assets/7a18d750-f648-478a-af9f-a6329a29f8f0" />

### Liste complete des utilisateurs
<img width="889" height="598" alt="image" src="https://github.com/user-attachments/assets/511abdce-44e3-40d7-992a-71a6dd2fe2a6" />

---

## Auteur

Asma Ait El Mahjoub — Cours Developpement Front-End React
