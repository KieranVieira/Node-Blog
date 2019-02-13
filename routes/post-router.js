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

router.get('/:id', (req, res) => {
    const postId = req.params.id;

    db
        .getById(postId)
        .then(post => {
            if(post){
                res.status(200).json(post)
            }else{
                res.status(404).json({
                    message: "No post found with this ID"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not retrieve this post",
                error
            })
        })
});

router.post('/', (req, res) => {
    const post = req.body;
    try {
        db
            .insert(post)
            .then(post => {
                res.status(201).json(post)
            })
            .catch(error => {
                res.status(400).json({
                    message: "Please add the required fields(text and user_id)",
                    error
                })
            })
    } catch (error) {
        res.status(500).json({
            message: "Server could not post to the database",
            error
        })
    }
});

module.exports = router;