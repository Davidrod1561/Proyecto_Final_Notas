const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// Ruta para obtener todas las notas
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// Ruta para crear una nueva nota
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json(newNote);
});

module.exports = router;
