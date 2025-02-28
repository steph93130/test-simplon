const Joke = require('../models/joke');

// Ajouter une blague
exports.createJoke = async (req, res) => {
    try {
        const { content } = req.body;
        if (!content) return res.status(400).json({ error: "Blague requise" });
        const joke = await Joke.create({ content });
        res.status(201).json(joke);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtenir toutes les blagues
exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

// Obtenir une blague par ID
exports.getJokeById = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    joke ? res.json(joke) : res.status(404).json({ error: "Blague non trouvée" });
};

// Obtenir une blague aléatoire
exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();
    if (jokes.length === 0) return res.status(404).json({ error: "Pas de blagues disponibles" });
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(randomJoke);
};
