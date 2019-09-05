const express = require('express')
const router = express.Router()
const user = require('../routes/user')
const course= require('../routes/course')

router.get('/api/user', (req, res) => {
  res.json(users);
});

router.post('/api/user', (req,res) => {
    //requests the user
    const users = req.body
    //Adds the user to the users array
    user.push(users)
    //sets status to 201
    res.status(201).end()
})


// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the REST API project!',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

