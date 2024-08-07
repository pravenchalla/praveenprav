const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 4561
app.use(express.json())
app.use(cors())

mongoUrl = "mongodb+srv://praveen:praveen@cluster0.y6h6jpt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl,{})

mongoose.connection.on('connected', () => {
    console.log("mongoDB is connected successfully")
})

const todoRoute = require('./routes/todoRoute')
app.use('/prave', todoRoute)

app.listen(port,() => {
    console.log("port is connected " +" " + port)
})

