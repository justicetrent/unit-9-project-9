const express = require('express')
const router = express.Router()
const user = require('../routes/user')
const course= require('../routes/course')

router.get('/user', (req, res) => {
  res.json(users);
});

router.post('/user', (req,res) => {
    //requests the user
    const users = req.body
    //Adds the user to the users array
    user.push(users)
    //sets status to 201
    res.status(201).end()
})
