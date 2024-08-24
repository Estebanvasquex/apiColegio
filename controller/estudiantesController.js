class EstudiantesController{
    constructor(){
    }

    consultar(req, res){
        res.json({mensaje: 'Consulta de estudiantes'});
        
    };

    ingresar( req, res){
        res.json({mensaje: 'Creación de estudiantes'});

    };

    consultarPorId(req, res){
        res.json({mensaje: 'Consulta de estudiantes por id'});
        
    };

    ingresarPorId( req, res){
        res.json({mensaje: 'Creación de estudiantes por id'});

    };

    actualizar( req, res){
        res.json({mensaje: `Actualizar estudiante por id: `});

    };

    borrar( req, res){
        res.json({mensaje: `Borrar estudiante por id: `});

    };


}

module.exports = new EstudiantesController();