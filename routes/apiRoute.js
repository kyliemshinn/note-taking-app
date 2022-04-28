//variables required
const apiRouter = require("express").Router();
const newData = require("../db/db.json");
const path = require("path");
const fs = require("fs");
// var uniqid = require("uniqid");

// setup for notes
// fs.readFile("db/db.json", "utf8", (err, data) => {
//   if (err) throw err;

  //set get request
  apiRouter.get("/notes", (req, res) => {
    res.json(newData);
  });
  //set post request
  apiRouter.post("/notes", (req, res) => {
    res.send("send some data");

    const { title, text } = req.body;

    const newNote = {
      title,
      text,
    //   id: uniqid(),
    };

    newData.push(newNote);
    updateNotes();
  });

  const updateNotes = (content, newData) => {
    fs.readFile(newData, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };
  
// });

// function updateNotes() {
//   fs.writeFile("db/db.json", JSON.stringify(data), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return true;
//     }
//   });
// }
module.exports = apiRouter;
