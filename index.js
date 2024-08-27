import express from 'express'
const app = express()

import estudiantesRoutes from './views/estudiantesRoutes.js'
import profesoresRoutes from './views/profesoresRoutes.js'


app.get('/', (req, res)=>{res.send ('Hola mundo00000000') });

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);



app.listen(6500,()=>{console.log('Servidor activo')});

