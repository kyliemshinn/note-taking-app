//variables required
const apiRouter = require("express").Router();
const newData = require("../db/db.json");
//const path = require("path");
const fs = require("fs");
// var uuidv1 = require("uuid/v1");

//set get request
apiRouter.get("/notes", (req, res) => {
  res.json(newData);
});

//set post request
apiRouter.post("/notes", (req, res) => {
  //create new object this is equal to the body
  const { title, text } = req.body;
  //new note body
  const newNote = {
    title,
    text,
    // id: uuidv1(),
  };

  newData.push(newNote);

  // fs.readFile(newData, 'utf8', (err, data) => {
  //   if (err) {
  //       console.error(err);
  //     }
  //   });

  // const dataStr = JSON.stringify(newNote);

  // fs.writeFile(newData, dataStr, (err) =>
  //   err
  //     ? console.error(err)
  //     : console.log(
  //         `Review for ${newNote.product} has been written to JSON file`
  //       )
  // );
  
// Gives back the response, which is the user's new note. 
// res.json(newNote);



  const response = {
    status: "success",
    body: newNote,
  };
  res.json(response)

  // const updateNotes = (newNote, newData) => {
 
        //   } else {
        //       const parsedData = JSON.parse(data);
        //       parsedData.push(newNote);
        //       fs.writeFileSync('../db/db/json', parsedData);
       
    //   const response = {
    //       status: "success",
    //       body: newData, //should be new note?
      // };

    updateNotes();

//   };

});

function updateNotes() {
  fs.writeFile("db/db.json", JSON.stringify(newData), function (err) {
      if (err) {
          console.log("error")
          return console.log(err);
      }

      console.log("Success!");
  });
}

//delete addd :id

module.exports = apiRouter;

//add file to send a recieve
// when it comes  back into the syustem needs to be stringified
