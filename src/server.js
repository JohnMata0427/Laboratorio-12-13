import express from 'express'
import dotenv from 'dotenv'
import routerLegalCase from './routers/legalcase.routes.js'
import routerUser from './routers/user.routes.js'

const app = express()

dotenv.config()

app.set('port', process.env.port || 3000)

app.use(express.json())

app.get('/', (_, res) => res.send("Server on"))

app.use('/api/v1', routerLegalCase)
app.use('/api/v1', routerUser)

export default app