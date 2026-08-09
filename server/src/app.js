const express = require('express');
const ErrorHandling = require('./middleware/ErrorHandling');
const ApiError = require('./utils/ApiError');
const ConnectDB = require('./config/db');
const app = express()
const dns = require("dns")
const morgan = require("morgan")

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

app.use(express.json({limit:"10mb"}))
app.use(morgan("dev"))

ConnectDB()

app.get('/', (req, res) => {
//   res.send('Hello Coder!')
throw new ApiError(400,"Welcome Back to The Channel")
})

app.use("/api/auth",require("./routes/auth.route"))

app.use((req,res)=>{
    throw new ApiError(400,"Route Not Found")
})
app.use(ErrorHandling)

module.exports=app
