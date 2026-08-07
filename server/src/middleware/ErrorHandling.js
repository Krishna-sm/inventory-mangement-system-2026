const ApiError = require("../utils/ApiError")

const ErrorHandling=(err,req,res,next)=>{
    const error_obj={
        code:500,
        message:"Internal Server Error",
        path:req.path,
        stack:"",
    }

    if(err instanceof ApiError){
       error_obj.code = err.code
       error_obj.message = err.message
       error_obj.stack = err.stack 
    }

    res.status(error_obj.code).json(error_obj)

}

module.exports = ErrorHandling