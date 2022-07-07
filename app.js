//Importaciones
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
require('dotenv').config()

//const { Student } = require('./src/db/models');

app.get('/hola', async function(req, res){
    res.status(201).send('Hola');
})




//Definir el puerto de escucha
app.listen(process.env.PORT || 3000, () => console.log("run server PORT " + process.env.PORT))