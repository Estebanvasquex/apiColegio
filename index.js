const express = require('express')
const app = express()
const estudiantesRoutes = require('./views/estudiantesRoutes')
const profesoresRoutes = require('./views/profesoresRoutes')

app.get('/', (req, res)=>{res.send ('Hola mundo00000000') });

app.use('/estudiantes', estudiantesRoutes);
app.use('/profesores', profesoresRoutes);



app.listen(6500,()=>{console.log('Servidor activo')});

