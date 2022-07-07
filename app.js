//Importaciones
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
require('dotenv').config()

const { Note } = require('./src/db/models');

app.get('/hola', async function(req, res){
    res.status(201).send('Hola, esto es una app con railway');
})

app.get('/notes', async function(req, res){
    try{
        let notes = await Note.findAll();
        res.status(201).send(notes)
    }catch(err){
        res.status(401).send(err.message)
    }

})
//
// app.post('/notes', async function(req, res){
//     const {fullName, dni, email, courseId} = req.body;
//
//     try{
//         if (fullName == "" || dni == "" || email == "" || courseId == "" ) {
//             res.status(500).json('Los valores no pueden ser nulos');
//         }else if((courseId != "01" && courseId != "02" && courseId != "03" ) ){
//             res.status(500).send('No se pudo realizar la operacion: Curso invalido');
//         }else{
//             let student = await Student.findOne({where: {dni:dni, courseId: courseId}})
//             if(student){
//                 res.status(201).send('Ya existe un estudiante con ese dni y ese curso')
//             }else{
//                 let newStudent = await Student.create({
//                     fullName: fullName,
//                     dni: dni,
//                     email: email,
//                     courseId: courseId,
//                     approved: false,
//                     createdAt: new Date(),
//                     updatedAt: new Date()
//                 })
//
//                 res.status(201).send('Estudiante creado');
//             }
//         }
//
//     }catch(err) {
//         res.status(500).send('No se pudo realizar la operacion');
//     }
// })




//Definir el puerto de escucha
app.listen(process.env.PORT || 3000, () => console.log("run server PORT " + process.env.PORT))