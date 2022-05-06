const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const index = require('./routes/index')
const users = require('./routes/users')
const notes = require('./routes/notes')

//setting
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use(index);
app.use(users);
app.use(notes);


module.exports = app;
