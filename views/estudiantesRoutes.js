const express = require('express');
const router = express.Router();
const estudiantesController = require('../controller/estudiantesController.js');


//Rutas estaticas
router.get('/', estudiantesController.consultar);

router.post('/', estudiantesController.ingresar);


//Rutas dinamicas 
router.route('/:id')
    .get(estudiantesController.consultarPorId)
    .post(estudiantesController.ingresarPorId)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.borrar)
    
module.exports = router;