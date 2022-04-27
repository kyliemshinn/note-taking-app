
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes for either html or api from routes folder
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute');

//make all folders accessible
app.use(express.static('public'));

//standard syntax for html and api route use
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

// Listener
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}!`);
});