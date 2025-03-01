const express = require('express');
const cors = require('cors'); // Importer CORS
const { Sequelize, DataTypes } = require('sequelize');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(express.json());


// ✅ Activation de CORS avec des paramètres pour autoriser toutes les origines
app.use(cors({
    origin: 'https://steph93130.github.io/', // Autorise toutes les origines
    methods: ['GET', 'POST'], // Autorise seulement les requêtes GET et POST
    allowedHeaders: ['Content-Type']
}));

// Configuration de Sequelize et SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

// Définition du modèle Joke (Blague)
const Joke = sequelize.define('Joke', {
    content: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Synchronisation de la base de données
sequelize.sync();

// Endpoint pour récupérer une blague aléatoire
app.get('/blagues/random', async (req, res) => {
    const jokes = await Joke.findAll();
    if (jokes.length === 0) {
        return res.status(404).json({ error: 'Aucune blague disponible' });
    }
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    // ✅ Ajout manuel des en-têtes CORS (au cas où)
    res.header('Access-Control-Allow-Origin', '*');
    res.json(randomJoke);
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});




