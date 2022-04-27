//variables required
const apiRouter = require('express').Router();
const data = require('../db/db.json');


//set GET requests 
apiRouter.get("/", (req, res) => {
    res.send(path.join(__dirname + "/public/notes.html"))
 });
// Route to go to notes page
apiRouter.get("/notes", function(req, res){
    res.send(path.join(__dirname, "../public/notes.html"));
});


module.exports = apiRouter;