const express = require('express');
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
    .get((req, res) => {
        res.json({mensaje: `Consulta profesor por id: `});
    })
    .post((req, res) => {
        res.json({mensaje: `Crear profesor por id: `});
    })
    .put((req, res) => {
        res.json({mensaje: `Actualizar profesor por id: `});
    })
    .delete((req, res) => {
        res.json({mensaje: `Borrar profesor por id: `});
    });
    
module.exports = router;