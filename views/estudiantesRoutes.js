import express from 'express';
const router = express.Router();
import estudiantesController from '../controllers/estudiantesController.js';


//Rutas estaticas
router.get('/', estudiantesController.consultar);

router.post('/', estudiantesController.ingresar);


//Rutas dinamicas 
router.route('/:id')
    .get(estudiantesController.consultarPorId)
    .post(estudiantesController.ingresarPorId)
    .put(estudiantesController.actualizar)
    .delete(estudiantesController.borrar)
    
export default router;