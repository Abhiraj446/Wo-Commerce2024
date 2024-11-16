const express = require('express');
const errorMiddleware=require('./Middleware/error')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type']
}))

const product = require("./routes/productRoute")
const user=require("./routes/userRoute")

app.use("/api/v1",product);
app.use("/api/v1",user);

//errorMiddleware
// app.use(errorMiddleware)



//uncaught error
//exceptional error

module.exports = app;