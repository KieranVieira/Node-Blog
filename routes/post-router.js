const express = require('express');
const db = require('../data/helpers/postDb')

const router = express.Router();

router.get('/', (req, res) => {
    db
        .get()
        .then(posts => {
            if(posts){
                res.status(200).json(posts)
            }else{
                res.status(404).json({
                    message: "No posts found"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not find posts",
                error
            })
        })
});

module.exports = router;