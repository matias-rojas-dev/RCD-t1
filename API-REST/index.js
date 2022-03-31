const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const routes = require('./routes');
require('dotenv').config();

const app = express();

//app.use(expressValidator());

// Habilitar pug
app.set('view engine', 'pug');

// Habilitar la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// Habilitar rutas de navegación
app.use('/api', routes());

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en el puerto ${port}`);
})