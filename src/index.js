import app from './app.js';
import dataBase from './databases.js'
app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}`)
})