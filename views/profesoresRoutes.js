import express from 'express';
import profesroresController from '../controllers/profesoresController.js';
const router = express.Router();

//Rutas estaticas
router.get('/', (req, res) => {
    res.json({mensaje: 'Consulta de profesores'});
});

router.post('/', (req, res) => {
    res.json({mensaje: 'Creación de profesores'});
});


//Rutas dinamicas 
router.route('/:id')
    .get(profesroresController.consultarPorId)
    .post(profesroresController.ingresarPorId)
    .put(profesroresController.actualizar)
    .delete(profesroresController.borrar);
    
export default router;