import express, { urlencoded } from 'express'
import userRoute from './routes.js'
 
const app = express()


app.use(express.json())

app.use(urlencoded({extended:true}))

app.use('/api/user',userRoute)

export default app