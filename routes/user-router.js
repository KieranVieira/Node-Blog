const express = require('express');
const db = require('../data/helpers/userDb')

function uppercaseUsername(req, res, next){
    req.body.name = req.body.name.toUpperCase()

    next();
}

const router = express.Router();

router.post('/', uppercaseUsername, (req, res) => {
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

router.get('/:id', (req, res) => {
    const userId = req.params.id;

    db.getById(userId)
        .then(user => {
            if(user){
                res.status(200).json(user)
            }else{
                res.status(404).json({
                    message: "Can't find user with given ID"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not find user.",
                error
            })
        })
});

router.put('/:id', uppercaseUsername, (req, res) => {
    const userId = req.params.id;
    const userInfo = req.body;
    try {
        db.update(userId, userInfo)
        .then(user => {
            if(user){
                res.status(200).json({
                    message: "User was updated",
                    user
                })
            }else{
                res.status(404).json({
                    message: "Could not find user with this ID"
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                message: "Bad request, please add the required name field",
            })
        })
    } catch (error) {
        res.status(500).json({
            message: "Server could not update user",
            error
        })
    }
});

router.delete('/:id', (req, res) => {
    const userId = req.params.id;
    db.remove(userId)
        .then(user => {
            console.log(user)
            if(user){
                res.status(200).json({
                    message: "User was deleted"
                }) 
            }else{
                res.status(404).json({
                    message: "No user found with this ID"
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: "Server could not delete the user",
                error
            })
        })
});

router.get('/:id/posts', (req, res) => {
    const userId = req.params.id;
    db
        .getUserPosts(userId)
        .then(posts => {
            if(posts.length > 0){
                res.status(200).json(posts)
            }else{
                res.status(404).json({
                    message: "Could not find any posts for this user"
                })
            }
        })
        .catch(error => {
            res.send(500).json({
                message: "Server could not retrieve user posts",
                error
            })
        })
});

module.exports = router;