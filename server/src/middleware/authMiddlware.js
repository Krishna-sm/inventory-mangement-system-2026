const ApiError = require("../utils/ApiError")
const mongoose = require("mongoose")
const authMiddleware =(req,res,next)=>{
    try {
            const authorization = req.headers['authorization'] ??""
            console.log(authorization)
            if(!authorization || !authorization.startsWith("Bearer ")){
                throw new ApiError(401,"Please Login First")
            }
            const token = authorization.split(" ")[1]
            if(!token || !mongoose.isValidObjectId(token)){
        throw new ApiError(401,"Please Enter valid token")

            }
req.user = token

next()


    } catch (error) {
        next(error)
    }
}

module.exports= authMiddleware