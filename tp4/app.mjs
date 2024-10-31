import express from "express";

//crear una instancia de express
const app = express();

//configurar el puerto en el que el servidor escuchara
const PORT =3000;

//ruta basica
app.get("/", (req,res) =>{
    res.send("¡Hola, mundo!");

});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



