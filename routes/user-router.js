const express = require('express');
const db = require('../data/helpers/userDb')

const router = express.Router();

router.post('/', (req, res) => {
    const userData = req.body;
    try {
        db
            .insert(userData)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(error =>{
                res.status(400).json({
                    message: "Please provide a name for the user",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Server could not add the user to the database",
            error
        })
    }
});

router.get('/', (req, res) => {
    db
        .get()
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(error => {
            res.status(500).json({ message: "Server could not fetch users", error })
        })
});


module.exports = router;