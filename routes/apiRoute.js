//variables required
const apiRouter = require('express').Router();
const data = require('../db/db.json');
const path = require('path');

//set get request
apiRouter.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname + "/db/db.json") () => {
        res.json(JSON.parse(object))
    }
})

//set post request
apiRouter.post()

module.exports = apiRouter;