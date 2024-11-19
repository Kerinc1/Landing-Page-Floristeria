//archivo que obtendra las rutas

//importar el paquete de express
const express = require('express');

// creamos una instancia de un router (ruta) de express
const router = express.Router();

//definir la ruta para la pagina de inicio
router.get('/', (req,res) =>{
    //renderizar la vista de home.ejs y le pondremos un titulo dinamico
    res.render('home',{title:'Jardin De Colores'});
});

//exportar el archivo para que pueda ser utilizado en otros archivos
module.exports = router;