// Importar los módulos
import express from 'express'
import routerLegalCase from './routers/legalCase_router.js'
import routerUser from './routers/user_routes.js'

// Inicializaciones
const app = express()

// Definir variables
app.set('port', process.env.port || 3000)

// Middlewares
app.use(express.json())

// Rutas
app.get('/', (req, res)=> res.send("Server on"))
app.use('/api/v1', routerUser, routerLegalCase)
// Exportar la variable
export default app