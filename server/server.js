//LOAD ENV VAIABLES
if(process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}

//IMPORT DEPENDENCIES
const express = require('express');
const cors = require("cors")
const connectToDb = require('./config/connectToDb')
const notesController = require('./controllers/notesControllers')

//CREATE AN EXPRESS APP
const app = express();

//CONFIGURE EXPRESS APP
app.use(express.json());
app.use(cors());

//CONNECT TO DATABASE
connectToDb();

//ROUTING
app.get('/notes', notesController.fetchNotes)

app.get('/notes/:id', notesController.fetchNote)

app.post('/notes', notesController.createNote)

app.put('/notes/:id', notesController.updateNote)

app.delete("/notes/:id", notesController.deleteNote)

//START OUR SERVER
app.listen(process.env.PORT);