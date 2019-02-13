const express = require('express');
const db = require('../data/helpers/userDb')

const router = express.Router();

router.get('/', (req, res) => {
    db
        .get()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: "Server could not fetch users", err })
        })
});

module.exports = router;