const mongoose= require('mongoose')
require('dotenv').config({path: 'variables.env'})

const conectarDB= async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,  //sirven para ver los errores de conexion con mongo en la consola
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('DB Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1) //detener la app
    }

}

module.exports= conectarDB