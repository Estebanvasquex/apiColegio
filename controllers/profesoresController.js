class ProfesoresController{
    constructor(){
    }

    consultar(req, res){
        res.json({mensaje: 'Consulta de profesores'});
        
    };

    ingresar( req, res){
        res.json({mensaje: 'Creación de profesores'});

    };

    consultarPorId(req, res){
        res.json({mensaje: 'Consulta de profesores por id'});
        
    };

    ingresarPorId( req, res){
        res.json({mensaje: 'Creación de profesores por id'});

    };

    actualizar( req, res){
        res.json({mensaje: `Actualizar estudiante por id: `});

    };

    borrar( req, res){
        res.json({mensaje: `Borrar estudiante por id:`});

    };


}

export default new ProfesoresController;