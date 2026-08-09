class ApiError extends Error{
    constructor(code=500, message="Internal Server Error"){
        super(message)
        this.code = code
        Error.captureStackTrace(this,this.constructor)

    }


}

module.exports = ApiError