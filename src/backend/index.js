const express = require('express');
const cors = require('cors');
const router = require('./routes/v1/rotas');
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(router)
app.use(express.static('../frontend'))

module.exports = app;