import express from 'express'
import blogRoutes from './routes/blog.routes.js'
import authRoutes from './routes/auth.routes.js'
import { registerUser } from './controllers/auth.controller.js'
import cors from 'cors'

const app = express()

app.use(express.json()) //middleware
app.use(cors())

app.use('/', blogRoutes)
app.use('/api/auth', authRoutes)

export default app