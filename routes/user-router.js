const express = require('express');
const db = require('../data/helpers/userDb')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('users directory')
});

module.exports = router;