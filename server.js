
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

//routes for either html or api from routes folder
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//make all folders accessible
app.use(express.static('public'));

//standard syntax for html and api route use
app.use('/', htmlRoute);
app.use('/api', apiRoute);

app.get("*", (req, res) => {
    res.send(path.join(__dirname + "../public/index.html"))
 });

// Listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});