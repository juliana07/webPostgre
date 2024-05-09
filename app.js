var express = require('express');
const sequelize = require('sequelize');
const dotenv = require('dotenv').config()

const {createCustomer, 
    getOneCustomer, 
    getALLCustomer
} = require('./src/controllers/customer.controller')

const app = express();

//Middleware
app.use(express.json())

app.get('/', function(req, res){
    //Acceder a la bd 
    res.send('hello world')
})

app.post('/customer/create', createCustomer)
app.get('/customer/getOne', getOneCustomer)
app.get('/customer', getALLCustomer)

app.listen(3000)