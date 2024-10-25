import express from "express";

const app = express();
const PORT =3000;

//ruta get con parametro de consulta
//solicitud: htpp://localhost:3000/profile?edad=30
app.get("/profile",(req, res)=>{
    const edad= req.query.edad;
    console.log(`edad recibida: ${edad}`);
    res.send(`edad del perfil: ${edad}`);
});

app.listen(PORT,()=> {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
