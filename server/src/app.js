const express = require('express');
const ErrorHandling = require('./middleware/ErrorHandling');
const ApiError = require('./utils/ApiError');
const app = express()

app.get('/', (req, res) => {
//   res.send('Hello Coder!')
throw new ApiError(400,"Welcome Back to The Channel")
})


app.use((req,res)=>{
    throw new ApiError(400,"Route Not Found")
})
app.use(ErrorHandling)

module.exports=app
