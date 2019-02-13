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

router.put('/:id', (req, res) => {
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

module.exports = router;