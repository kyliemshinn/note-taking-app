//variables required
const apiRouter = require('express').Router();
const data = require('../db/db.json');
const path = require('path');

//set get request
apiRouter.get("/notes", (req, res) => {
    res.send('hello clyde')
});
//set post request
apiRouter.post('/notes', (req, res) => {
    res.send('hello farley')
});



module.exports = apiRouter;