import express from 'express'
import dotenv from 'dotenv'
import {notFound ,errorHandler} from './middleware/errorModdleware.js'
import connectDB from './config/database.js'
import  productRoutes from './routes/productRoutes.js'
import  userRoutes from './routes/userRoutes.js'


dotenv.config()


connectDB()
const app=express()

app.use(express.json())



app.get('/',(req,res)=>{
    res.send('ApI is running.....')
})

app.use('/api/products', productRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)

app.use(errorHandler)


const PORT=process.env.PORT ||5000
app.listen(PORT)
console.log('Server running on port 5000')