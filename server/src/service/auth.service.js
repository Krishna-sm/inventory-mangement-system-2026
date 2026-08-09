const userModel = require("../models/User.model")
const ApiError = require("../utils/ApiError")

/**
 * 
 * @param {object} data
 * @param {string} data.email 
 * @param {string} data.password  
 */
async function loginService(data){
    const existUser = await userModel.findOne({email:data.email.toLowerCase()})
    if(!existUser){
        throw new ApiError(400,"User Not Exist with this email")
    }

   
    if(existUser.password !== data.password){
        throw new ApiError(400,"User Does Not Have Valid Credentials")

    }
    delete existUser.password
    return {
        token:existUser._id,
        user:{
            name:existUser.name,
            email:existUser.email
        }
    }
}

/**
 * 
 * @param {object} data 
 * @param {string} data.email  
 * @param {string} data.name  
 * @param {string} data.password  
 */
async function registerService(data){

    const existUser = await userModel.findOne({email:data.email.toLowerCase()})
    if(existUser){
        throw new ApiError(400,"User Already Exist with this email")
    }

   const doc=  await userModel.create(data)
    return {
        token:doc._id,
        user:{
            name:doc.name,
            email:doc.email
        }
    }
}



/**
 * 
 * @param {string} id
 */
async function profileService(id){
    const existUser = await userModel.findById(id)
    if(!existUser){
        throw new ApiError(400,"User Not Exist")
    }

    return {
        user:{
            name:existUser.name,
            email:existUser.email
        }
    }

}


module.exports = {
    loginService,
    registerService,
    profileService
}