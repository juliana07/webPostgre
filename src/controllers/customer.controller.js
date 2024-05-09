//Consultas de la bd 
const db = require("../database/db")
const Customer = db.customer;

//Crear un nuevo customer
const createCustomer = async(req, res) => {
    try {
        const { customer_details } = req.body
        console.log(customer_details)
        const customer = await User.create(
        {
            //Datos que se van a recibir
            customer_details : customer_details
        },
        //Datos que se van a retornar 
        { fields: ['customer_id', 'customer_details'] },
        );
        return res.send(customer)

    } catch (error) {
        console.log(error)
        return res.send(0)
    }
} 

//Obtener los customers
const getALLCustomer = async(req, res) =>{
    
    try {
        const customer = await Customer.findAll();

        return res.send(customer)
    } catch (error) {
        console.log(error)
        res.send([])
    }
}


const getOneCustomer = async(req, res) =>{
    try {
        const { id } = req.body
        const customer = await Customer.findByPk(id);
        if (project === null) {
          console.log('Not found!');
        } else {
            return res.send(customer) // Its primary key is 123
        }

    } catch (error) {
        console.log(error)
        res.send({})
    }
}


//Obtener un customer


module.exports = {
    createCustomer,
    getALLCustomer,
    getOneCustomer
}