const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Note = require('./models/note');

const app = express();

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost/notes_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

// Rutas de la API para las notas
app.use('/api/notes', require('./routes/notes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${8080}`);
});
