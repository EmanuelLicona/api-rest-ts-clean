import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routes from './routes/user.routes'
import { AppDataSource } from '../../common/infrastructure/config/data.source'

// Configuración
const PORT = process.env.PORT || 3002

const app = express() // Crea el servidor

app.use(cors()) // Puede ser consumida por cualquier origen
app.use(express.json()) // Permite leer JSON

app.use(routes) // Rutas de la API en item

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

AppDataSource.initialize()
  .then(() => {
    console.log('Data Base Up and Running!')
  }).catch((err) => {
    console.error('Error while connecting to Data Base:', err)
  })