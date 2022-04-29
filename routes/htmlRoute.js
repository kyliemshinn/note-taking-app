//variables required
const path = require("path");
const apiRouter = require('express').Router();
const data = require('../db/db.json');


//set GET requests 
// apiRouter.get("*", (req, res) => {
//     res.send(path.join(__dirname + "../public/index.html"))
//  });

apiRouter.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});



module.exports = apiRouter;