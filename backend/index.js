import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import videoRoutes from './routes/videos.js'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import bodyParser from 'body-parser'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/users', userRoutes)
app.use('/videos', videoRoutes)

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    const PORT = process.env.PORT
    app.listen(PORT, ()=>console.log(`Server listening on PORT ${PORT} ...`))
}).catch((err)=>console.log(`${err}; DID NOT CONNECT`))