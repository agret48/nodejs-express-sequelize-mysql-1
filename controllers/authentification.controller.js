const db = require('../models');
const Authentification = db.authentification
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const AuthentificationController = {

    createUser: async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user = await Authentification.create({ username: req.body.username, password: hashedPassword });
            res.status(201).send('User registered successfully');
        } catch (error) {
            console.error('Error registering user:', error);
            res.status(500).send('Error registering user');
        }
    },
    login: async (req, res) => {
        const user = await Authentification.findOne({ where: { username: req.body.username } });
        if (!user) return res.status(404).send('User not found');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).send('Invalid password');

        const token = jwt.sign({ username: user.username }, 'secret');
        res.header('auth-token', token).send(token);
    }

};

module.exports = AuthentificationController;