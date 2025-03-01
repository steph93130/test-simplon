📌 Projet Blagues Carambar

Bienvenue sur le projet Blagues Carambar ! 🎉 Cette application permet d'afficher des blagues aléatoires issues d'une API que nous avons développée. Le projet suit une architecture frontend/backend avec un déploiement sur GitHub Pages et Render.

📝 Cahier des charges

🎯 Objectif du projet

Nous souhaitons une landing page moderne et fun, qui reflète l’univers de Carambar. L’application doit permettre d’afficher une blague aléatoire à chaque clic sur un bouton.

⚙️ Technologies utilisées

Backend : Node.js, Express, Sequelize, SQLite

Frontend : HTML, CSS, JavaScript (Fetch API)

Déploiement : Render (backend) & GitHub Pages (frontend)

Documentation : Swagger

📌 Fonctionnalités demandées

API versionnée avec 4 endpoints :

POST /blagues → Ajouter une blague à la base de données (via Postman)

GET /blagues → Obtenir toutes les blagues

GET /blagues/:id → Obtenir une blague spécifique

GET /blagues/random → Obtenir une blague aléatoire

Gestion de la base de données avec Sequelize & SQLite

La base de données doit être initialisée avec quelques blagues par défaut.

Les blagues doivent être persistantes et accessibles via les endpoints.

Déploiement

Backend : déployé sur Render.com avec un hébergement SQLite.

Frontend : hébergé sur GitHub Pages.

Documentation API

Swagger documente tous les endpoints de l’API.

Disponible sur /api-docs.
https://github.com/steph93130/test-simplon/tree/main
Interface utilisateur

Une page simple avec un bouton pour afficher une blague aléatoire.

Design inspiré de l’univers de Carambar.

🔗 Liens du projet

Backend (API Render) : https://test-simplon-l2ua.onrender.com

Frontend (GitHub Pages) : https://steph93130.github.io/test-simplon-front/

Documentation Swagger : https://test-simplon-l2ua.onrender.com/api-docs

Repo GitHub Backend : https://github.com/steph93130/test-simplon.git

Repo GitHub Frontend : https://github.com/steph93130/test-simplon-front.git


🚀 Installation locale

Si tu veux tester en local :

Clone le repo :

git clone https://github.com/steph93130/test-simplon.git
cd nom-du-repo-backend

Installe les dépendances :

npm install

Lance le serveur :

npm start

Accède à l’API :

http://localhost:3000/blagues/random

📌 Améliorations futures

Ajouter un formulaire d’ajout de blagues.

Ajouter des catégories de blagues.

Passer de SQLite à PostgreSQL pour une meilleure gestion des données.

🚀 Amusez-vous bien avec les blagues Carambar ! 🎭

