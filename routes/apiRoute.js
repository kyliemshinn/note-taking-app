//variables required
const apiRouter = require("express").Router();
const newData = require("../db/db.json");
const path = require("path");
const fs = require("fs");
var uniqid = require("uniqid");


  //set get request
  apiRouter.get("/notes", (req, res) => {
    res.json(newData);
  });

  //set post request
  apiRouter.post("/notes", (req, res) => {
    res.send("send some data");
    //create new object this is equal to the body
    const { title, text } = req.body;
    //new note body
    const newNote = {
      title,
      text,
      id: uniqid(),
    };

    newData.push(newNote);
    updateNotes();
    
    const updateNotes = (newNote, newData) => {
        fs.readFile(newData, 'utf8', (err, newNote) => {
            if (err) {
                console.error(err);
            } else {
                // const parsedData = JSON.parse(data);
                // parsedData.push(newNote);

                fs.writeFileSync('../db/db/json', JSON.stringify(newNote));
            }
        });
        
        const response = {
            status: "success",
            body: newData,
        };
        
        res.json(response)
        
    };

//     const readFromFile = util.promisify(fs.readFile);
// /**
//  *  Function to write data to the JSON file given a destination and some content
//  *  @param {string} destination The file you want to write to.
//  *  @param {object} content The content you want to write to the file.
//  *  @returns {void} Nothing
//  */
// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );

  readFromFile();
});

module.exports = apiRouter;
