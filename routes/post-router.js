const express = require('express');
const db = require('../data/helpers/postDb')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('post directory')
});

module.exports = router;