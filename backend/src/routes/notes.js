const router = require("express").Router();

const {index, show, create, store, edit, update, deleteNotes} = require('../controller/notesController');

router.get("/notes", (req, res, next) => {
  res.send("note");
});

module.exports = router;